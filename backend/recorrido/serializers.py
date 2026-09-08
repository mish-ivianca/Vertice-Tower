from rest_framework import serializers

from .models import (
    Piso,
    TipoUnidad,
    ImageTipoUnidad,
    Unidad,
    HistorialEstadoUnidad,
    HistorialPrecioUnidad,
    CategoriaUnidad,
)

class CategoriaUnidadSerializer(serializers.ModelSerializer):

    class Meta:
        model = CategoriaUnidad

        fields = [
            "id",
            "nombre",
        ] 

# ============================================================
# IMÁGENES DEL TIPO DE UNIDAD
# ============================================================

class ImageTipoUnidadSerializer(serializers.ModelSerializer):

    class Meta:
        model = ImageTipoUnidad

        fields = [
            "id",
            "image",
        ]


# ============================================================
# TIPO DE UNIDAD
# ============================================================

class TipoUnidadSerializer(serializers.ModelSerializer):

    galeria = ImageTipoUnidadSerializer(
        many=True,
        read_only=True
    )

    categoriaNombre = serializers.CharField(
        source="categoria.nombre",
        read_only=True
    )

    class Meta:
        model = TipoUnidad

        fields = [
            "id",
            "proyecto",
            "codigo",
            "nombre",
            "categoria",
            "categoriaNombre",
            "tipo",
            "superficie",
            "dormitorios",
            "banos",
            "sala",
            "lavanderia",
            "cocina",
            "comedor",
            "render3D",
            "planoTecnico",
            "frame",
            "tour360",
            "path",
            "x",
            "y",
            "galeria",
        ]

# ============================================================
# UNIDAD
# ============================================================

class UnidadSerializer(serializers.ModelSerializer):

    tipoUnidad = TipoUnidadSerializer(
        read_only=True
    )
    tipoMoneda = serializers.CharField(
        source="get_moneda_display",
        read_only=True
    )
    numeroPiso = serializers.IntegerField(
        source="piso.numero",
        read_only=True
    )
    estadoNombre = serializers.CharField(
        source="get_estado_display",
        read_only=True
    )

    class Meta:
        model = Unidad

        fields = [
            "id",
            "piso",
            "numeroPiso",
            "tipoUnidad",
            "estado",
            "estadoNombre",
            "precio",
            "tipoMoneda",
            
        ]
        
class UnidadEstadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Unidad
        fields = ["estado"]

    def update(self, instance, validated_data):
        estado_anterior = instance.estado
        estado_nuevo = validated_data["estado"]

        if estado_anterior != estado_nuevo:
            instance.estado = estado_nuevo
            instance.save()

            HistorialEstadoUnidad.objects.create(
                unidad=instance,
                estado_anterior=estado_anterior,
                estado_nuevo=estado_nuevo,
                usuario=self.context["request"].user
            )

        return instance

class UnidadPrecioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Unidad
        fields = ["precio"]

    def update(self, instance, validated_data):

        precio_anterior = instance.precio
        precio_nuevo = validated_data["precio"]

        if precio_anterior != precio_nuevo:

            instance.precio = precio_nuevo
            instance.save()

            HistorialPrecioUnidad.objects.create(
                unidad=instance,
                precio_anterior=precio_anterior,
                precio_nuevo=precio_nuevo,
                usuario=self.context["request"].user
            )

        return instance

# ============================================================
# PISO
# ============================================================

class PisoSerializer(serializers.ModelSerializer):

    unidades = UnidadSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Piso

        fields = [
            "id",
            "numero",
            "nombrePiso",
            "imagePiso",
            "unidades",
        ]

class HistorialEstadoUnidadSerializer(serializers.ModelSerializer):

    unidad_codigo = serializers.CharField(
        source="unidad.tipoUnidad.codigo",
        read_only=True
    )

    numero_piso = serializers.IntegerField(
        source="unidad.piso.numero",
        read_only=True
    )

    nombre_piso = serializers.CharField(
        source="unidad.piso.nombrePiso",
        read_only=True
    )

    usuario_nombre = serializers.CharField(
        source="usuario.username",
        read_only=True
    )

    estado_anterior_nombre = serializers.CharField(
        source="get_estado_anterior_display",
        read_only=True
    )

    estado_nuevo_nombre = serializers.CharField(
        source="get_estado_nuevo_display",
        read_only=True
    )

    class Meta:
        model = HistorialEstadoUnidad

        fields = [
            "id",
            "unidad_codigo",
            "numero_piso",
            "nombre_piso",
            "estado_anterior_nombre",
            "estado_nuevo_nombre",
            "usuario_nombre",
            "fecha",
        ]

class HistorialPrecioUnidadSerializer(serializers.ModelSerializer):

    unidad_codigo = serializers.CharField(
        source="unidad.tipoUnidad.codigo",
        read_only=True
    )

    numero_piso = serializers.IntegerField(
        source="unidad.piso.numero",
        read_only=True
    )

    nombre_piso = serializers.CharField(
        source="unidad.piso.nombrePiso",
        read_only=True
    )

    usuario_nombre = serializers.CharField(
        source="usuario.username",
        read_only=True
    )

    class Meta:
        model = HistorialPrecioUnidad

        fields = [
            "id",
            "unidad_codigo",
            "numero_piso",
            "nombre_piso",
            "precio_anterior",
            "precio_nuevo",
            "usuario_nombre",
            "fecha",
        ]