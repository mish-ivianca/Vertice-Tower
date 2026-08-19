import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import KuulaViewer from "./KuulaViewer";

function DepartmentViewer({ view, department }) {
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [isFading, setIsFading] = useState(false);
    const changeGallery = (newIndex) => {
        setPreviousIndex(galleryIndex);
        setGalleryIndex(newIndex);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsFading(true);
            });
         });
    };
    return (
        <section
            className="
                w-full
                h-full
                overflow-hidden
                shadow-xl
            "
        >
            {view === "3d" && (
                <div
                    className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                    "
                >
                        <img
                            src={department.render3D}
                            alt={`Render ${department.codigo}`}
                            className="
                                max-w-[calc(100%-5rem)]
                                max-h-[calc(100%-5rem)]
                                w-auto
                                h-auto
                                object-contain
                                m-10
                            "
                        />
                </div>
            )}
            {view === "technical" && (
                <div
                    className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        bg-gradient-to-br
                        from-neutral-900
                        to-stone-400
                    "
                >
                        <img
                            src={department.planoTecnico}
                            alt={`Plano técnico ${department.codigo}`}
                            className="
                                max-w-[calc(100%-5rem)]
                                max-h-[calc(100%-5rem)]
                                w-auto
                                h-auto
                                object-contain
                                m-10
                            "
                        />
                </div>
            )}
            {view === "gallery" && (
                <div
                    className="
                        relative
                        w-full
                        h-full
                        overflow-hidden
                        bg-black
                        flex
                        items-center
                        justify-center
                    "
                >
                    <img
                        src={department.galeria[galleryIndex]}
                        alt=""
                        aria-hidden="true"
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            scale-110
                            blur-sm
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/25
                        "
                    >
                        <div
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                shadow-[0_0_30px_rgba(0,0,0,0.90)]
                            "
                        >

                            {/* IMAGEN NUEVA */}
                            <img
                                src={department.galeria[galleryIndex]}
                                alt={`Galería ${department.codigo}`}
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    pb-16
                                    pt-2
                                    object-contain
                                    transition-opacity
                                    duration-500
                                    ease-in-out
                                "
                            />


                            {/* IMAGEN ANTERIOR */}
                            {previousIndex !== null && (
                                <img
                                    src={department.galeria[previousIndex]}
                                    alt=""
                                    className={`
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        pb-16
                                        pt-2
                                        object-contain

                                        transition-opacity
                                        duration-900
                                        ease-in-out

                                        ${
                                            isFading
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }
                                    `}
                                    onTransitionEnd={() => {
                                        setPreviousIndex(null);
                                        setIsFading(false);
                                    }}
                                />
                            )}

                        </div>
                        {/* =========================
                            ANTERIOR
                        ========================= */}

                        <button
                            onClick={() =>
                                changeGallery(
                                    galleryIndex === 0
                                        ? department.galeria.length - 1
                                        : galleryIndex - 1
                                )
                            }
                            className="
                                absolute
                                left-5
                                top-1/2
                                -translate-y-1/2
                                z-20

                                h-10
                                w-10
                                rounded-full

                                flex
                                items-center
                                justify-center

                                bg-slate-50
                                text-slate-700

                                hover:scale-110

                                transition
                            "
                        >
            <IoIosArrowBack size={20}/>
        </button>


                        {/* =========================
                            SIGUIENTE
                        ========================= */}

                        <button
            onClick={() =>
                changeGallery(
                    galleryIndex ===
                    department.galeria.length - 1
                        ? 0
                        : galleryIndex + 1
                )
            }
            className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                z-20

                h-10
                w-10
                rounded-full

                flex
                items-center
                justify-center

                bg-white/80
                text-slate-800

                hover:scale-110

                transition
            "
        >
            <IoIosArrowForward size={20}/>
        </button>



                        {/* =========================
                            CONTADOR
                        ========================= */}
                        <div
                            className="
                                absolute
                                bottom-17
                                left-1/2
                                -translate-x-1/2
                                z-20
                                flex
                                items-center
                                gap-1
                                rounded-full
                                bg-black/40
                                px-2
                                py-2
                            "
                        >
                            {department.galeria.map((_, index) => (
                                <span
                                    key={index}
                                    className={`
                                        h-1
                                        w-1
                                        rounded-full
                                        transition-all
                                        duration-300

                                        ${
                                            galleryIndex === index
                                                ? "bg-white scale-125"
                                                : "bg-white/50"
                                        }
                                    `}
                                />
                            ))}
                        </div>

                    </div>
                </div>

            )}


            {/* =========================
                TOUR 360
            ========================= */}

            {view === "tour" && (

                <div
                    className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        bg-black
                        text-white
                    "
                >

                    <KuulaViewer url={department.tour360} />

                </div>

            )}

        </section>

    );

}

export default DepartmentViewer;