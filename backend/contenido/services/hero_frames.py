"""Procesamiento local de una escena HeroStage de tipo 'secuencia'.

Paso inicial para desarrollo. Más adelante se ejecutará mediante un worker
independiente al subir un MP4 desde Django Admin.
"""

import os
import shutil
import subprocess
from pathlib import Path
from uuid import uuid4

from django.conf import settings
from contenido.models import HeroStage


FPS = 24
QUALITY = 82
WIDTH = 1920


def generar_frames(hero_id: int) -> int:
    hero = HeroStage.objects.get(pk=hero_id)
    if hero.tipo != HeroStage.Tipo.SECUENCIA:
        raise ValueError("Esta escena no está configurada como secuencia")
    if not hero.video:
        raise ValueError("La escena no tiene un MP4 cargado")

    # Por ahora el proyecto utiliza almacenamiento MEDIA_ROOT local.
    origen = Path(hero.video.path)
    if not origen.is_file():
        raise FileNotFoundError(f"No existe el video: {origen}")

    # Carpeta nueva por generación: nunca se sobrescriben frames en uso.
    relativa = (
        Path("proyecto") / "hero" / "secuencias"
        / str(hero.pk) / uuid4().hex[:12]
    )
    destino = Path(settings.MEDIA_ROOT) / relativa
    destino.mkdir(parents=True, exist_ok=False)

    hero.estado = HeroStage.Estado.PROCESANDO
    hero.error_procesamiento = ""
    hero.save(update_fields=["estado", "error_procesamiento"])

    ffmpeg = os.getenv("FFMPEG_BIN", "ffmpeg")
    filtro = f"fps={FPS},scale={WIDTH}:-2:flags=lanczos"
    comando = [
        ffmpeg, "-hide_banner", "-loglevel", "error", "-nostdin", "-y",
        "-i", str(origen), "-vf", filtro, "-an", "-c:v", "libwebp",
        "-quality", str(QUALITY), "-compression_level", "6",
        "-start_number", "1", str(destino / "frame_%04d.webp"),
    ]

    try:
        subprocess.run(comando, check=True, capture_output=True, text=True)
        total = len(list(destino.glob("frame_*.webp")))
        if total == 0:
            raise RuntimeError("FFmpeg no generó ningún WebP")

        # Publicamos la nueva carpeta solo cuando terminó la conversión.
        hero.carpeta_frames = relativa.as_posix()
        hero.total_frames = total
        hero.estado = HeroStage.Estado.LISTO
        hero.error_procesamiento = ""
        hero.save(update_fields=[
            "carpeta_frames", "total_frames", "estado", "error_procesamiento"
        ])
        return total
    except Exception as error:
        shutil.rmtree(destino, ignore_errors=True)
        hero.estado = HeroStage.Estado.ERROR
        detalle = (error.stderr or str(error)) if isinstance(error, subprocess.CalledProcessError) else str(error)
        hero.error_procesamiento = detalle[-2000:]
        hero.save(update_fields=["estado", "error_procesamiento"])
        raise
