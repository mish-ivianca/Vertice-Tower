from django.contrib import admin

from .models import (
    CategoriaUnidad,
    TipoUnidad,
    Piso,
    ImageTipoUnidad,
    Unidad,
    HistorialEstadoUnidad,
    HistorialPrecioUnidad,
)


# =========================================================
# INLINE: IMÁGENES DE TIPO DE UNIDAD
# =========================================================

class ImageTipoUnidadInline(admin.TabularInline):
    model = ImageTipoUnidad
    extra = 1
    fields = ("image",)


# =========================================================
# INLINE: UNIDADES DE UN PISO
# =========================================================

class UnidadInline(admin.TabularInline):
    model = Unidad
    extra = 1

    fields = (
        "tipoUnidad",
        "estado",
        "precio",
        "moneda",
    )


# =========================================================
# CATEGORÍA
# =========================================================

@admin.register(CategoriaUnidad)
class CategoriaUnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "nombre",
    )

    search_fields = (
        "nombre",
    )


# =========================================================
# TIPO DE UNIDAD
# =========================================================

@admin.register(TipoUnidad)
class TipoUnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "codigo",
        "nombre",
        "categoria",
        "proyecto",
        "tipo",
        "superficie",
    )

    list_filter = (
        "categoria",
        "proyecto",
        "tipo",
    )

    search_fields = (
        "codigo",
        "nombre",
        "tipo",
    )

    inlines = [
        ImageTipoUnidadInline,
    ]


# =========================================================
# PISO
# =========================================================

@admin.register(Piso)
class PisoAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "numero",
        "nombrePiso",
        "proyecto",
    )

    list_filter = (
        "proyecto",
    )

    search_fields = (
        "nombrePiso",
    )

    inlines = [
        UnidadInline,
    ]


# =========================================================
# IMÁGENES DE TIPO DE UNIDAD
# =========================================================

@admin.register(ImageTipoUnidad)
class ImageTipoUnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "tipoUnidad",
        "image",
    )

    list_filter = (
        "tipoUnidad",
    )


# =========================================================
# UNIDAD
# =========================================================

@admin.register(Unidad)
class UnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "tipoUnidad",
        "piso",
        "estado",
        "precio",
        "moneda",
    )

    list_filter = (
        "estado",
        "moneda",
        "tipoUnidad__categoria",
        "piso__proyecto",
    )

    search_fields = (
        "tipoUnidad__codigo",
        "tipoUnidad__nombre",
    )


# =========================================================
# HISTORIAL DE ESTADOS
# =========================================================

@admin.register(HistorialEstadoUnidad)
class HistorialEstadoUnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "unidad",
        "estado_anterior",
        "estado_nuevo",
        "usuario",
        "fecha",
    )

    list_filter = (
        "estado_anterior",
        "estado_nuevo",
        "fecha",
    )

    readonly_fields = (
        "fecha",
    )


# =========================================================
# HISTORIAL DE PRECIOS
# =========================================================

@admin.register(HistorialPrecioUnidad)
class HistorialPrecioUnidadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "unidad",
        "precio_anterior",
        "precio_nuevo",
        "usuario",
        "fecha",
    )

    list_filter = (
        "fecha",
    )

    readonly_fields = (
        "fecha",
    )