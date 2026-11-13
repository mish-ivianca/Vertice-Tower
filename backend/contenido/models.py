from django.db import models

from proyectos.models import Proyecto


class HeroStage(models.Model):

    class Tipo(models.TextChoices):
        VIDEO = "video", "Video"
        SECUENCIA = "secuencia", "Secuencia WebP"

    class Estado(models.TextChoices):
        PENDIENTE = "pendiente", "Pendiente"
        PROCESANDO = "procesando", "Procesando"
        LISTO = "listo", "Listo"
        ERROR = "error", "Error"

    proyecto = models.ForeignKey(
        Proyecto,
        on_delete=models.CASCADE,
        related_name="hero_stages"
    )

    orden = models.PositiveIntegerField(default=0)

    tipo = models.CharField(
        max_length=10,
        choices=Tipo.choices,
        default=Tipo.VIDEO
    )

    # MP4 original
    video = models.FileField(
        upload_to="proyecto/hero/videos/"
    )

    # Elementos visuales del Home
    imagenHero = models.ImageField(
        upload_to="proyecto/hero/images/",
        blank=True,
        null=True
    )

    subtitle = models.TextField(blank=True)

    button = models.CharField(
        max_length=100,
        blank=True
    )

    # Procesamiento automático
    estado = models.CharField(
        max_length=12,
        choices=Estado.choices,
        default=Estado.PENDIENTE
    )

    carpeta_frames = models.CharField(
        max_length=500,
        blank=True
    )

    total_frames = models.PositiveIntegerField(
        default=0
    )

    error_procesamiento = models.TextField(
        blank=True
    )

    class Meta:
        ordering = ["orden"]

    def __str__(self):
        return (
            f"{self.proyecto.nombreProyecto}"
            f" - Stage {self.orden}"
        )



class Ubicacion(models.Model):
    proyecto = models.OneToOneField(
        Proyecto,
        on_delete=models.CASCADE,
        related_name="ubicacion"
    )
    ciudad = models.CharField(
        max_length=100
    )
    direccion = models.CharField(
        max_length=255
    )
    imageUbicacion = models.ImageField(
        upload_to="proyecto/ubicacion/",
        blank=True,
        null=True
    )
    imageUbicacionMobile = models.ImageField(
        upload_to="proyecto/ubicacion/",
        blank=True,
        null=True
    )
    linkUbicacion = models.URLField(
        blank=True
    )
    iframeUbicacion = models.TextField(
        blank=True
    )

    def __str__(self):
        return f"Ubicación - {self.proyecto.nombreProyecto}"


class Contacto(models.Model):
    proyecto = models.OneToOneField(
        Proyecto,
        on_delete=models.CASCADE,
        related_name="contacto"
    )
    numeroContacto = models.CharField(
        max_length=30
    )
    correo = models.EmailField()
    whatsappLink = models.URLField(
        blank=True
    )
    imagecontacto = models.ImageField(
        upload_to="proyecto/contacto/",
        blank=True,
        null=True
    )

    def __str__(self):
        return f"Contacto - {self.proyecto.nombreProyecto}"