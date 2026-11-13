
import time

from django.core.management.base import BaseCommand
from django.db import transaction, close_old_connections

from contenido.models import HeroStage
from contenido.services.hero_frames import generar_frames


class Command(BaseCommand):
    help = "Procesa automáticamente las secuencias Hero pendientes"

    def add_arguments(self, parser):
        parser.add_argument(
            "--once",
            action="store_true",
            help="Procesar pendientes y finalizar"
        )
        parser.add_argument(
            "--intervalo",
            type=int,
            default=3
        )

    def procesar_una(self):
        # Reservar una escena pendiente para evitar
        # que dos trabajadores procesen la misma.
        with transaction.atomic():
            hero = (
                HeroStage.objects
                .select_for_update(skip_locked=True)
                .filter(
                    tipo=HeroStage.Tipo.SECUENCIA,
                    estado=HeroStage.Estado.PENDIENTE
                )
                .order_by("orden", "pk")
                .first()
            )

            if hero is None:
                return False

            hero.estado = HeroStage.Estado.PROCESANDO
            hero.error_procesamiento = ""
            hero.save(update_fields=[
                "estado", "error_procesamiento"
            ])
            hero_id = hero.pk

        self.stdout.write(
            f"Procesando HeroStage {hero_id}..."
        )

        try:
            total = generar_frames(hero_id)
            self.stdout.write(
                self.style.SUCCESS(
                    f"HeroStage {hero_id}: {total} frames listos"
                )
            )
        except Exception as error:
            HeroStage.objects.filter(
                pk=hero_id,
                estado=HeroStage.Estado.PROCESANDO
            ).update(
                estado=HeroStage.Estado.ERROR,
                error_procesamiento=str(error)[-2000:]
            )
            self.stderr.write(
                f"Error en HeroStage {hero_id}: {error}"
            )

        return True

    def handle(self, *args, **options):
        intervalo = max(1, options["intervalo"])

        self.stdout.write("Trabajador Hero iniciado.")

        try:
            while True:
                close_old_connections()

                if self.procesar_una():
                    continue

                if options["once"]:
                    break

                time.sleep(intervalo)

        except KeyboardInterrupt:
            self.stdout.write(
                "Trabajador detenido."
            )
