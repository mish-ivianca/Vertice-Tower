FROM python:3.12-slim

# Evitar archivos .pyc y permitir logs inmediatos
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Directorio de trabajo
WORKDIR /app

# Dependencias del sistema
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libpq5 \
    && rm -rf /var/lib/apt/lists/*

# Dependencias Python
COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Código del proyecto
COPY . .

# Crear directorios necesarios
RUN mkdir -p /app/staticfiles /app/media

# Recopilar archivos estáticos
RUN python manage.py collectstatic --noinput

# Puerto interno del contenedor
EXPOSE 8000

# Servidor de producción
CMD ["gunicorn", "showroom.wsgi:application", "--bind", "0.0.0.0:8000"]