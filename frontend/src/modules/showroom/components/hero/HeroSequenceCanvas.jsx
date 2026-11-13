import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import logo1 from "../../images/LOGO1.webp";
import logo2 from "../../images/LOGO2.webp";
import logo3 from "../../images/LOGO3.webp";
import { PiHandTapThin } from "react-icons/pi";

const INTRO_END = 0.08; // 8 % del scroll: fundido video 1 -> secuencia 2.
const INERTIA_MS = 180; // inercia cinematográfica probada.
const GLAMBOT_INTENSITY = 0.7;
const BOTON_FRAMES_ANTES = 60; // ~2.5 segundos del video original a 24 FPS.
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smoothstep = (x) => x * x * (3 - 2 * x);
const glambotEase = (p) => p + (smoothstep(p) - p) * GLAMBOT_INTENSITY;

export default function HeroSequenceCanvas({ project }) {
  const navigate = useNavigate();
  const [showRecorrido, setShowRecorrido] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(null);
  const videoRef = useRef(null);
  const scrollHintRef = useRef(null);
  const introOverlayRef = useRef(null);
  const stages = [...(project?.hero || [])].sort((a, b) => a.orden - b.orden);
  const introStage = stages[0];
  const introVideo = introStage?.video || "";
  const sequenceStage = stages.find((stage) => stage.tipo === "secuencia");
  const TOTAL_FRAMES = Number(sequenceStage?.total_frames || 0);
  const BASE = (sequenceStage?.frames_base_url || "").replace(/\/+$/, "");
  const urlFrame = (number) => `${BASE}/frame_${String(number).padStart(4, "0")}.webp`;

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas || !BASE || TOTAL_FRAMES <= 0) {
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const MAX_FETCHES = isMobile ? 3 : 4;
    const MAX_DECODES = 2;
    const BITMAP_BUDGET = (isMobile ? 96 : 220) * 1024 * 1024;
    const MAX_BITMAPS = isMobile ? 20 : 36;

    const blobs = new Map();
    const fetching = new Set();
    const failed = new Set();
    const decodeFailed = new Set();
    const abortController = new AbortController();
    let fetchesActive = 0;

    const decoded = new Map();
    const decoding = new Set();
    let decodesActive = 0;
    let bytesPerFrame = 0;

    let target = 1;
    let easedFrame = 1;
    let inertiaRaf = 0;
    let lastInertiaTime = 0;
    let currentProgress = 0;
    let direction = 1;
    let drawn = 0;
    let frameRaf = 0;
    let disposed = false;
    let recorridoVisible = false;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return undefined;

    function bitmapLimit() {
      if (!bytesPerFrame) return isMobile ? 8 : 18;
      return Math.max(
        3,
        Math.min(MAX_BITMAPS, Math.floor(BITMAP_BUDGET / bytesPerFrame))
      );
    }

    function showStats() {
      if (!progressRef.current) return;

      const progress = drawn > 0
        ? (drawn - 1) / Math.max(1, TOTAL_FRAMES - 1)
        : 0;
      progressRef.current.style.transform =
        `scaleX(${Math.max(0, Math.min(1, progress))})`;
    }

    function updateIntro() {
      const video = videoRef.current;
      if (!video) return;
      // No revelar el canvas antes de que al menos su primer frame esté listo.
      const fade = drawn > 0 ? smoothstep(clamp01(currentProgress / INTRO_END)) : 0;
      const overlay = introOverlayRef.current;
      if (overlay) {
      overlay.style.opacity = String(1 - fade);
      overlay.style.transform =
          `translate3d(0, ${-12 * fade}px, 0)`;
      overlay.style.visibility =
          fade >= 1 ? "hidden" : "visible";
      }
      video.style.opacity = String(1 - fade);
      video.style.transform = `scale(${1 + 0.025 * fade})`;
      video.style.visibility = fade >= 1 ? "hidden" : "visible";

      // Ahorrar decodificación de video mientras vemos los WebP.
      if (fade >= 1 && !video.paused) video.pause();
      if (fade < 1 && video.paused && video.readyState >= 2) {
        video.play().catch(() => {});
      }
    }

    function display(number) {
      const entry = decoded.get(number);
      if (!entry) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(canvas.clientWidth * dpr);
      const height = Math.round(canvas.clientHeight * dpr);
      if (width < 1 || height < 1) return false;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      const scale = Math.max(width / entry.width, height / entry.height);
      const dw = entry.width * scale;
      const dh = entry.height * scale;
      ctx.drawImage(entry.source, (width - dw) / 2, (height - dh) / 2, dw, dh);
      drawn = number;
      showStats();
      updateIntro();
      return true;
    }

    // Frames que nos interesa mantener decodificados; preferencia hacia
    // la dirección actual, pero también reservamos imágenes para retroceder.
    function priorities() {
      const positions = [];
      const limit = bitmapLimit();
      const visual = Math.round(easedFrame);
      const add = (n) => {
        if (n >= 1 && n <= TOTAL_FRAMES &&
            !positions.includes(n) && positions.length < limit) {
          positions.push(n);
        }
      };
      add(visual);
      add(target);
      for (let distance = 1; positions.length < limit && distance < TOTAL_FRAMES; distance++) {
        for (const center of [visual, target]) {
          add(center + direction * distance);
          add(center - direction * distance);
        }
      }
      return positions;
    }

    function freeFarBitmaps() {
      const keep = new Set(priorities());
      // No cerrar el bitmap que está pintado mientras no tengamos reemplazo.
      if (drawn > 0) keep.add(drawn);
      for (const [n, entry] of decoded) {
        if (!keep.has(n)) {
          entry.dispose();
          decoded.delete(n);
        }
      }
    }

    async function decodeBlob(blob) {
      if (typeof createImageBitmap === "function") {
        try {
          const bitmap = await createImageBitmap(blob);
          return {
            source: bitmap,
            width: bitmap.width,
            height: bitmap.height,
            dispose: () => bitmap.close(),
          };
        } catch (_) {
          // Compatibilidad: usar Image si el navegador rechaza createImageBitmap.
        }
      }
      const tempUrl = URL.createObjectURL(blob);
      const img = new Image();
      try {
        img.src = tempUrl;
        await img.decode();
        return {
          source: img,
          width: img.naturalWidth,
          height: img.naturalHeight,
          dispose: () => { img.src = ""; },
        };
      } finally {
        URL.revokeObjectURL(tempUrl);
      }
    }

    function pumpDecodes() {
      if (disposed) return;
      const candidates = priorities();
      while (decodesActive < MAX_DECODES) {
        const n = candidates.find(
          (i) => blobs.has(i) && !decoded.has(i) && !decoding.has(i) && !decodeFailed.has(i)
        );
        if (n === undefined) break;
        decoding.add(n);
        decodesActive += 1;

        decodeBlob(blobs.get(n))
          .then((entry) => {
            if (disposed || !priorities().includes(n)) {
              entry.dispose();
              return;
            }
            bytesPerFrame ||= entry.width * entry.height * 4;
            decoded.set(n, entry);
            if (n === Math.round(easedFrame) && n !== drawn) display(n);
            freeFarBitmaps();
          })
          .catch((err) => {
            if (!disposed) {
              decodeFailed.add(n);
              console.warn("Falló la decodificación del frame", n, err);
            }
          })
          .finally(() => {
            decoding.delete(n);
            decodesActive -= 1;
            if (!disposed) pumpDecodes();
          });
      }
    }

    // Descargamos TODOS los WebP una única vez; cuando el usuario cambie
    // de dirección, el siguiente turno prioriza los más cercanos a target.
    function nextFetch() {
      // Al entrar: priorizar video 1 y primeros 8 frames, no descargar 281 a la vez.
      if (currentProgress === 0) {
        for (let n = 1; n <= 8; n++) {
          if (!blobs.has(n) && !fetching.has(n) && !failed.has(n)) return n;
        }
        return null;
      }
      for (let distance = 0; distance < TOTAL_FRAMES; distance++) {
        const nums = distance === 0
          ? [target]
          : [target + distance * direction, target - distance * direction];
        for (const n of nums) {
          if (
            n >= 1 && n <= TOTAL_FRAMES &&
            !blobs.has(n) && !fetching.has(n) && !failed.has(n)
          ) return n;
        }
      }
      return null;
    }

    function pumpFetches() {
      if (disposed) return;
      while (fetchesActive < MAX_FETCHES) {
        const n = nextFetch();
        if (n === null) break;
        fetching.add(n);
        fetchesActive += 1;
        fetch(urlFrame(n), { signal: abortController.signal })
          .then(async (response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const blob = await response.blob();
            if (disposed) return;
            blobs.set(n, blob);
            showStats();
            pumpDecodes();
          })
          .catch((error) => {
            if (disposed || error.name === "AbortError") return;
            failed.add(n);
            console.warn("No se pudo obtener el frame", n, error);
          })
          .finally(() => {
            fetching.delete(n);
            fetchesActive -= 1;
            if (!disposed) pumpFetches();
          });
      }
    }

    function animateInertia(time) {
      inertiaRaf = 0;
      const delta = lastInertiaTime ? Math.min(50, time - lastInertiaTime) : 16;
      lastInertiaTime = time;
      const smoothing = 1 - Math.exp(-delta / INERTIA_MS);
      easedFrame += (target - easedFrame) * smoothing;
      if (Math.abs(target - easedFrame) < 0.12) easedFrame = target;
      const frame = Math.round(easedFrame);
      if (frame !== drawn && decoded.has(frame)) display(frame);

      // El botón aparece solo en el tramo final y se oculta al retroceder.
      // Actualizamos React únicamente cuando cruza el umbral, no por cada frame.
      const shouldShowRecorrido = easedFrame >= TOTAL_FRAMES - BOTON_FRAMES_ANTES;
      if (shouldShowRecorrido !== recorridoVisible) {
        recorridoVisible = shouldShowRecorrido;
        setShowRecorrido(shouldShowRecorrido);
      }
      pumpDecodes();
      if (easedFrame !== target) {
        inertiaRaf = requestAnimationFrame(animateInertia);
      } else {
        lastInertiaTime = 0;
      }
    }

    function refresh() {
      frameRaf = 0;
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const position = -section.getBoundingClientRect().top;
      const progress = clamp01(position / distance);
      currentProgress = progress;
      updateIntro();

      // Durante el fundido se mantiene el frame 1 de la escena 2.
      const sequenceProgress = clamp01((progress - INTRO_END) / (1 - INTRO_END));
      const next = 1 + Math.round(glambotEase(sequenceProgress) * (TOTAL_FRAMES - 1));
      if (next !== target) {
        direction = Math.sign(next - target);
        target = next;
        freeFarBitmaps();
      }
      pumpDecodes();
      pumpFetches();
      if (!inertiaRaf && easedFrame !== target) {
        inertiaRaf = requestAnimationFrame(animateInertia);
      }
    }

    function onScroll() {
      if (!frameRaf) frameRaf = requestAnimationFrame(refresh);
    }
    function onResize() {
      if (decoded.has(drawn)) display(drawn);
      onScroll();
    }

    const observer = new ResizeObserver(onResize);
    observer.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    refresh();

    return () => {
      disposed = true;
      abortController.abort();
      cancelAnimationFrame(frameRaf);
      cancelAnimationFrame(inertiaRaf);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      decoded.forEach((entry) => entry.dispose());
      decoded.clear();
      blobs.clear();
      fetching.clear();
      decoding.clear();
      decodeFailed.clear();
    };
  }, [BASE, TOTAL_FRAMES]);

  useEffect(() => {
    const updateScrollHint = () => {
      if (!scrollHintRef.current) return;

      scrollHintRef.current.style.opacity =
        window.scrollY > 24 ? "0" : "1";
    };

    window.addEventListener("scroll", updateScrollHint, {
      passive: true,
    });

    updateScrollHint();

    return () => {
      window.removeEventListener("scroll", updateScrollHint);
    };
  }, []);


  return (
    <section ref={sectionRef} className="relative h-[1500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas ref={canvasRef} className="block h-full w-full" />
        {introVideo && (
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => window.dispatchEvent(new Event("scroll"))}
            className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover will-change-transform"
          />
        )}

        <div
        ref={introOverlayRef}
        className="pointer-events-none absolute inset-0 z-20"
        >
        {/* Contenido central del video 1 */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 bottom-40 text-center text-white lg:bottom-55">
            <span className="mb-5 text-xs font-light tracking-[0.2em] text-white/80 md:text-sm">
              {introStage?.subtitle}
            </span>
              {introStage?.imagenHero && (
            <img
                src={introStage.imagenHero}
                alt="Vértice Tower"
                className="h-20 w-auto object-contain md:h-30 lg:h-40"
            />
            )}
        </div>

        {/* Indicador animado para deslizar */}
        <div
          ref={scrollHintRef}
          className="
            pointer-events-none
            absolute
            bottom-[85px] md:bottom-[124px]
            left-1/2 z-30
            -translate-x-1/2
            flex flex-col items-center
            gap-2
            text-white
            transition-opacity duration-500
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[9px] md:text-[11px]
              font-light
              tracking-[0.28em]
              uppercase
              drop-shadow-md
            "
          >
            DESLIZA PARA EXPLORAR ↓
          </span>
          <div className="flex items-center justify-center">
            {/* MÓVIL: mano animada */}
            <div className="flex md:hidden items-center justify-center">
              <PiHandTapThin
                className="
                  size-6
                  text-white
                  motion-safe:animate-[swipeUp_1.6s_ease-in-out_infinite]
                  rotate-270
                "
              />
            </div>
            {/* DESKTOP: mouse animado */}
            <div className="hidden md:flex flex-col items-center">
              <div className="relative h-9 w-6 rounded-full border border-white/90">
                <span
                  className="
                    absolute left-1/2 top-1.5
                    h-1.5 w-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-white
                    animate-[mouseWheel_1.4s_ease-in-out_infinite]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logos inferiores responsive */}
        <div
          className="
            absolute
            bottom-8
            left-0 right-0
            px-5 md:px-8
            pointer-events-none
          "
        >
          <div
            className="
              mx-auto
              grid grid-cols-3
              items-center
              gap-4 md:gap-8
              w-full max-w-[580px]
            "
          >
            {[logo1, logo2, logo3].map((logo, index) => (
              <div
                key={index}
                className="
                  min-w-0
                  flex items-center justify-center
                "
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="
                    block
                    w-full
                    max-w-full
                    h-8
                    sm:h-10
                    md:h-12
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>

        </div>

        <div
          aria-hidden={!showRecorrido}
          className={`absolute inset-0 flex items-center justify-center
            ${showRecorrido
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-4 opacity-0 pointer-events-none"}`}
        >
          <button
            type="button"
            tabIndex={showRecorrido ? 0 : -1}
            onClick={() => navigate("/recorrido")}
            className="animated-button tracking-widest"
          >
            <GoArrowRight className="arr-2" />
            <span className="text">
              {sequenceStage?.button || "INGRESAR A RECORRIDO"}
            </span>
            <span className="circle" />
            <GoArrowRight className="arr-1" />
          </button>
        </div>
        {/* Indicador cinematográfico de progreso */}
        <div
          className="
            pointer-events-none
            absolute bottom-4 left-1/2 z-30
            h-[2px] w-[65vw] max-w-[420px]
            -translate-x-1/2
            overflow-hidden rounded-full
            bg-white/30
          "
        >
          <div
            ref={progressRef}
            className="h-full w-full bg-white"
            style={{
              transform: "scaleX(0)",
              transformOrigin: "left center",
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </section>
  );
}
