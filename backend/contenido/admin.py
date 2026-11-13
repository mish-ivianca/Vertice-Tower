from django.contrib import admin

from .models import (
    HeroStage,
    Ubicacion,
    Contacto,
)


@admin.register(HeroStage)
class HeroStageAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "proyecto",
        "orden",
        "tipo",
        "video",
        "estado",
        "total_frames",
    )
    list_filter = ("proyecto",)
    search_fields = (
        "subtitle",
        "proyecto__nombreProyecto",
    )
    ordering = ("proyecto", "orden")

    def save_model(self, request, obj, form, change):
        # Detectar si se subió un video nuevo
        video_cambiado = "video" in form.changed_data
        tipo_cambiado = "tipo" in form.changed_data

        debe_procesar = (
            obj.tipo == HeroStage.Tipo.SECUENCIA
            and (
                not change
                or video_cambiado
                or tipo_cambiado
            )
        )

        # Guardar normalmente el HeroStage
        super().save_model(request, obj, form, change)

        # Marcar la secuencia para procesamiento
        if debe_procesar:
            HeroStage.objects.filter(pk=obj.pk).update(
                estado=HeroStage.Estado.PENDIENTE,
                error_procesamiento=""
            )

@admin.register(Ubicacion)
class UbicacionAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "proyecto",
        "ciudad",
        "direccion",
    )
    list_filter = ("ciudad",)
    search_fields = (
        "proyecto__nombreProyecto",
        "ciudad",
        "direccion",
    )


@admin.register(Contacto)
class ContactoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "proyecto",
        "numeroContacto",
        "correo",
    )
    search_fields = (
        "proyecto__nombreProyecto",
        "numeroContacto",
        "correo",
    )