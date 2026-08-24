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
import NosotrosBackground from "./videos/backgroundDesktop.MP4";
import imageUbicacion from "./ubicacionAurora.PNG";
import ImageContacto from "./images/contacto.PNG";
import ImageNosotros1 from "./images/nosotros/nosotros01.png";
import ImageNosotros2 from "./images/nosotros/nosotros02.png";

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
    planos: {
        floorImage,
        departmentsSvg,
        departmentPaths,
        departmentMap: {
        left: "10.45%",
        top: "21%",
        width: "78%",
        viewBox: "0 0 2670 1350",
    },
    },
    pisos: [
        {
            id: 1,
            numero: 1,
            nombre: "PISO 1",
            colorFondo: "#24baab",
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
            colorFondo: "#D8E27C",
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
            colorFondo: "#243ddd",
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