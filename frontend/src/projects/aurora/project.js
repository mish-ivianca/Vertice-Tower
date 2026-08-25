import renderA101 from "./departaments/A101/render3D.png";
import planoA101 from "./departaments/A101/PlanoTecnico.png";
import fotoA101_1 from "./departaments/A101/galeria/foto1.png";
import fotoA101_2 from "./departaments/A101/galeria/foto2.png";
import fotoA101_3 from "./departaments/A101/galeria/foto3.png";
import fotoA101_4 from "./departaments/A101/galeria/foto4.png";
import fotoA101_5 from "./departaments/A101/galeria/foto5.png";
import floorImage from "./images/planta.png";
import departmentsSvg from "./departments.svg";
import departmentPaths from "./departmentPaths";
import frameA101 from "./departaments/A101/frameA101.png";
import brochurePDF from "./brochure-vertice.pdf";
import Background01Desktop from  "./videos/V2.mp4";
import Background02Desktop from "./videos/V1.mp4";
import Background03Desktop from "./videos//V3.mp4";
import imageUbicacion from "./ubicacionAurora.PNG";
import ImageContacto from "./images/contacto.PNG";
import ImageNosotros1 from "./images/nosotros/nosotros01.png";
import ImageNosotros2 from "./images/nosotros/nosotros02.png";
import ImagePerfil01 from "./images/team/perfil1.avif";
import ImageGym01 from "./images/amenidades/1.png";
import ImageGym02 from "./images/amenidades/2.png";
import ImagePiscina01 from "./images/amenidades/3.png";
import ImagePiscina02 from "./images/amenidades/4.png";
import ImageSalon01 from "./images/amenidades/5.png";
import ImageSalon02 from "./images/amenidades/6.png";
import img1_08 from "./images/avances/DJI_0792.JPG";
import img2_08 from "./images/avances/DJI_0802.JPG";
import img3_08 from "./images/avances/DJI_0846.JPG";
import ImagePiso01 from "./images/pisos/13.png";
import ImagePiso02 from "./images/pisos/14.png";
import ImagePiso03 from "./images/pisos/15.png";

const project = {
    id: 1,
    slug: "aurora",
    nombre: "Edificio Aurora",
    logo: null,
    ciudad: "La Paz",
    direccion: "Av. Costanera",
    imageUbicacion: imageUbicacion,
    linkUbicacion:"https://maps.app.goo.gl/oVDxfzhHSxMuJpKVA",
    iframeUbicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.2520681476913!2d-66.15559471046625!3d-17.384656136577714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3740f512e7923%3A0x42bb93e9c4f3d6ab!2sC.%2016%20de%20Julio%20713%2C%20Cochabamba!5e1!3m2!1ses!2sbo!4v1787254722832!5m2!1ses!2sbo",
    contacto:"+519 76266225",
    whatsappLink:"https://wa.link/eme3je",
    imageContacto: ImageContacto,
    imageNosotros: [ImageNosotros1, ImageNosotros2],
    equipo: [
        {
            id: 1,
            nombre: "Juan Pérez",
            cargo: "Gerente General",
            foto: ImagePerfil01,
            descripcion: "descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1"
        },
        {
            id: 2,
            nombre: "María López",
            cargo: "Arquitecta",
            foto: ImagePerfil01,
            descripcion: "descripcion 2 descripcion 2 descripcion2 descripcion 2 descripcion 1 descripcion 1 descripcion 1"
        },
        {
            id: 3,
            nombre: "Carlos Ramírez",
            cargo: "Director de Proyectos",
            foto: ImagePerfil01,
            descripcion: "descripcion 3descripcion 3 descripcion 3 descripcion 3 descripcion 3 descripcion 1 descripcion 1"
        },
        {
            id: 4,
            nombre: "Juan Pérez",
            cargo: "Gerente General",
            foto: ImagePerfil01,
            descripcion: "descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1 descripcion 1"
        },
        {
            id: 5,
            nombre: "María López",
            cargo: "Arquitecta",
            foto: ImagePerfil01,
            descripcion: "descripcion 2 descripcion 2 descripcion2 descripcion 2 descripcion 1 descripcion 1 descripcion 1"
        },
        {
            id: 6,
            nombre: "Carlos Ramírez",
            cargo: "Director de Proyectos",
            foto: ImagePerfil01,
            descripcion: "descripcion 3descripcion 3 descripcion 3 descripcion 3 descripcion 3 descripcion 1 descripcion 1"
        }
    ],
    correo: "ojosdeflor00@gmail.com",
    descripcion:
        "Departamentos modernos con excelente ubicación, áreas comunes y acabados de alta calidad.",
    precioDesde: 95000,
    moneda: "USD",
    estado: "En Venta",
    hero: {
        stages: [
            {
                desktop: Background01Desktop,
                title: "Vertice Tower",
                subtitle: "La mejor inversión para tu proximo proyecto",
                button: "CONOCER PROYECTO",
            },
            {
                desktop: Background02Desktop,
                title: " ",
                subtitle: " ",
                button: "DESCUBRIR",
            },
            {
                desktop: Background03Desktop,
                title: "Vertice Tower",
                subtitle: "Un lugar exclusivo para ti y tu familia",
                button: "EMPEZAR",
            },
        ],
    },
    brochure: brochurePDF,
    amenidades: [
        {
            id: 1,
            nombre: "Salón exclusivo",
            descripcion:
                "Un lugar diseñado para compartir, celebrar y conectar. Con ambientes elegantes y confortables, se convierte en el escenario ideal para reuniones privadas, encuentros sociales y momentos memorables en comunidad.",
            imagenes: [
                ImageSalon01,
                ImageSalon02,
            ],
        },
        {
            id: 2,
            nombre: "Piscina",
            descripcion:
                "Un espacio pensado para disfrutar, relajarse y desconectarse de la rutina en un ambiente exclusivo.",
            imagenes: [
                ImagePiscina01,
                ImagePiscina02,
            ],
        },
        {
            id: 3,
            nombre: "Gimnasio",
            descripcion:
                "Un espacio equipado para acompañarte en tu rutina y mantener un estilo de vida activo sin salir de casa.",
            imagenes: [
                ImageGym01,
                ImageGym02,
            ],
        },
    ],
    avances: [
        {
            mes: "Agosto",
            anio: 2026,
            porcentaje: 45,
            descripcion:
                "Durante este mes se realizaron trabajos de estructura y avance en las áreas comunes.",
            imagenes: [
                img1_08,
                img2_08,
                img3_08
            ],
        },
        {
            mes: "Julio",
            anio: 2026,
            porcentaje: 38,
            descripcion:
                "Se concluyeron trabajos correspondientes a la etapa estructural.",
    
            imagenes: [
                img1_08,
                img2_08,
                img3_08
            ],
        },
    
        {
            mes: "Junio",
            anio: 2026,
            porcentaje: 31,
            descripcion:
                "Se realizaron trabajos de preparación y construcción de la estructura.",
            imagenes: [
                        img1_08,
                        img2_08,
                        img3_08
                    ],
        },
    ],
    planos: {
        floorImage,
        departmentsSvg,
        departmentPaths,
        departmentMap: {
        left: "7%",
        top: "23.5%",
        width: "81%",
        viewBox: "0 0 2670 1350",
    },
    },
    pisos: [
        {
            id: 1,
            numero: 1,
            nombre: "PISO 1",
            imagePiso: ImagePiso01,
            departamentos: [
                {
                    id: "A101",
                    codigo: "A101",
                    tipo: "Monoambiente",
                    estado: "Disponible",
                    precio: 120000,
                    moneda: "USD",
                    superficie: 85,
                    dormitorios: 3,
                    banos: 2,
                    cocina: 1,
                    render3D: renderA101,
                    planoTecnico: planoA101,
                    galeria: [
                        fotoA101_1,
                        fotoA101_2,
                        fotoA101_3,
                        fotoA101_4,
                        fotoA101_5,
                    ],
                    frame: frameA101,
                    tour360: "https://kuula.co/share/5VXwm?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
                },
                {
                    id: "A102",
                    codigo: "A102",
                    estado: "Reservado",
                    precio: 118000,
                    moneda: "USD",
                    superficie: 82,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A103",
                    codigo: "A103",
                    estado: "Vendido",
                    precio: 115000,
                    moneda: "USD",
                    superficie: 80,
                    dormitorios: 2,
                    banos: 2,
                },
                {
                    id: "A104",
                    codigo: "A104",
                    estado: "Disponible",
                    precio: 118000,
                    moneda: "USD",
                    superficie: 82,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A105",
                    codigo: "A105",
                    estado: "Disponible",
                    precio: 115000,
                    moneda: "USD",
                    superficie: 80,
                    dormitorios: 2,
                    banos: 2,
                },
                {
                    id: "A106",
                    codigo: "A106",
                    estado: "Disponible",
                    precio: 120000,
                    moneda: "USD",
                    superficie: 85,
                    dormitorios: 3,
                    banos: 2,
                    render3D: renderA101,
                    planoTecnico: planoA101,
                    galeria: [
                        fotoA101_1,
                        fotoA101_2,
                        fotoA101_3,
                        fotoA101_4,
                        fotoA101_5,
                    ],
                    tour360: null,
                },
                {
                    id: "A107",
                    codigo: "A107",
                    estado: "Reservado",
                    precio: 118000,
                    moneda: "USD",
                    superficie: 82,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A108",
                    codigo: "A108",
                    estado: "Vendido",
                    precio: 115000,
                    moneda: "USD",
                    superficie: 80,
                    dormitorios: 2,
                    banos: 2,
                },
                {
                    id: "A109",
                    codigo: "A109",
                    estado: "Disponible",
                    precio: 118000,
                    moneda: "USD",
                    superficie: 82,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A110",
                    codigo: "A110",
                    estado: "Disponible",
                    precio: 115000,
                    moneda: "USD",
                    superficie: 80,
                    dormitorios: 2,
                    banos: 2,
                },
            ],
        },
        {
            id: 2,
            numero: 2,
            nombre: "PISO 2",
            imagePiso: ImagePiso02,
            departamentos: [
                {
                    id: "A201",
                    codigo: "A201",
                    estado: "Disponible",
                    precio: 125000,
                    moneda: "USD",
                    superficie: 90,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A202",
                    codigo: "A202",
                    estado: "Disponible",
                    precio: 128000,
                    moneda: "USD",
                    superficie: 92,
                    dormitorios: 3,
                    banos: 2,
                },
            ],
        },
        {
            id: 3,
            numero: 3,
            nombre: "PISO 3",
            imagePiso: ImagePiso03,
            departamentos: [
                {
                    id: "A301",
                    codigo: "A301",
                    estado: "Disponible",
                    precio: 130000,
                    moneda: "USD",
                    superficie: 95,
                    dormitorios: 3,
                    banos: 2,
                },
                {
                    id: "A302",
                    codigo: "A302",
                    estado: "Disponible",
                    precio: 132000,
                    moneda: "USD",
                    superficie: 97,
                    dormitorios: 3,
                    banos: 2,
                },
            ],
        },
    ],
};

export default project;