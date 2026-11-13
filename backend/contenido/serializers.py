from rest_framework import serializers

from .models import (
    HeroStage,
    Ubicacion,
    Contacto,
)
from proyectos.models import Proyecto


class HeroStageSerializer(serializers.ModelSerializer):
    frames_base_url = serializers.SerializerMethodField()
    class Meta:
        model = HeroStage
        fields = [
            "id",
            "proyecto",
            "tipo",
            "video",
            "imagenHero",
            "subtitle",
            "button",
            "orden",
            "estado",
            "carpeta_frames",
            "total_frames",
            "error_procesamiento",
            "frames_base_url",
        ]

    def get_frames_base_url(self, obj):
        if not obj.carpeta_frames or obj.estado != "listo":
            return None
        from django.conf import settings
        ruta = (
            f"{settings.MEDIA_URL.rstrip('/')}/"
            f"{obj.carpeta_frames.strip('/')}/"
        )
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(ruta)
        return ruta


class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = [
            "id",
            "ciudad",
            "direccion",
            "imageUbicacion",
            "imageUbicacionMobile",
            "linkUbicacion",
            "iframeUbicacion",
        ]
class ProyectoNombreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = [
            "id",
            "nombreProyecto",
        ]

class ContactoSerializer(serializers.ModelSerializer):
    proyecto = ProyectoNombreSerializer(read_only=True)
    class Meta:
        model = Contacto
        fields = [
            "id",
            "numeroContacto",
            "correo",
            "whatsappLink",
            "imagecontacto",
            "proyecto",
        ]