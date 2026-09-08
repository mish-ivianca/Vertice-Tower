from django.contrib import admin

from .models import Empresa, Proyecto


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "nameEmpresa",
        "correo",
        "celular",
    )

    search_fields = (
        "nameEmpresa",
        "correo",
    )


@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "nombreProyecto",
        "empresa",
        "estado",
    )

    list_filter = (
        "estado",
    )

    search_fields = (
        "nombreProyecto",
        "empresa__nameEmpresa",
    )