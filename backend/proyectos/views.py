from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User, Group
from .permissions import EsAdministrador

from .models import Proyecto
from .serializers import (
    ProyectoSerializer,
    NosotrosPageSerializer,
    ProyectoHeroSerializer,
    ProyectoBaseSerializer,
    UsuarioSerializer
)
from contenido.models import (
    Avance, Ubicacion, Contacto
)
from contenido.serializers import (
    AvanceSerializer,
    UbicacionSerializer,
    ContactoSerializer,
)
from recorrido.serializers import (
    UnidadSerializer, UnidadEstadoSerializer, HistorialEstadoUnidadSerializer, UnidadPrecioSerializer, HistorialPrecioUnidadSerializer
)
from recorrido.models import (
    Unidad, HistorialEstadoUnidad, HistorialPrecioUnidad
)


class ProyectoListView(generics.ListAPIView):
    queryset = Proyecto.objects.select_related("empresa").all()
    serializer_class = ProyectoSerializer

class ProyectoRecorridoView(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

class ProyectoBaseView(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoBaseSerializer

class ProyectoNosotrosView(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = NosotrosPageSerializer

class ProyectoHeroView(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoHeroSerializer

class ProyectoAvancesView(generics.ListAPIView):
    serializer_class = AvanceSerializer
    def get_queryset(self):
        return Avance.objects.filter(
            proyecto_id=self.kwargs["pk"]
        )

class ProyectoUbicacionView(generics.RetrieveAPIView):
    serializer_class = UbicacionSerializer
    def get_queryset(self):
        return Ubicacion.objects.filter(
            proyecto_id=self.kwargs["pk"]
        )

class ProyectoContactoView(generics.RetrieveAPIView):
    serializer_class = ContactoSerializer
    def get_queryset(self):
        return Contacto.objects.filter(
            proyecto_id=self.kwargs["pk"]
        )

class UnidadListView(generics.ListAPIView):
    queryset = Unidad.objects.select_related(
        "piso",
        "tipoUnidad"
    )
    serializer_class = UnidadSerializer
    permission_classes = [IsAuthenticated]

class UnidadEstadoUpdateView(generics.UpdateAPIView):
    queryset = Unidad.objects.all()
    serializer_class = UnidadEstadoSerializer
    permission_classes = [
        IsAuthenticated,
        DjangoModelPermissions
    ]

class UnidadPrecioUpdateView(generics.UpdateAPIView):

    queryset = Unidad.objects.all()

    serializer_class = UnidadPrecioSerializer

    permission_classes = [
        IsAuthenticated,
        DjangoModelPermissions
    ]

class HistorialEstadoUnidadListView(APIView):

    permission_classes = [
        EsAdministrador
    ]

    def get(self, request):

        historial_estados = HistorialEstadoUnidad.objects.select_related(
            "unidad__tipoUnidad",
            "unidad__piso",
            "usuario"
        )

        historial_precios = HistorialPrecioUnidad.objects.select_related(
            "unidad__tipoUnidad",
            "unidad__piso",
            "usuario"
        )

        estados = HistorialEstadoUnidadSerializer(
            historial_estados,
            many=True
        ).data

        precios = HistorialPrecioUnidadSerializer(
            historial_precios,
            many=True
        ).data

        historial = []

        for registro in estados:
            historial.append({
                **registro,
                "tipo": "estado",
            })

        for registro in precios:
            historial.append({
                **registro,
                "tipo": "precio",
            })

        historial.sort(
            key=lambda registro: registro["fecha"],
            reverse=True
        )

        return Response(historial)

class UsuarioActualView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "username": request.user.username,
            "groups": [
                group.name
                for group in request.user.groups.all()
            ],
        })
    
class UsuarioListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by("username")
    serializer_class = UsuarioSerializer
    permission_classes = [
        IsAuthenticated,
        EsAdministrador
    ]
    def perform_create(self, serializer):
        user = serializer.save()
        grupo = self.request.data.get("group")
        if grupo:
            group = Group.objects.get(name=grupo)
            user.groups.add(group)

class UsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [
        IsAuthenticated,
        EsAdministrador
    ]