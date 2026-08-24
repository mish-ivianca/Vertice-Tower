import { FiHome, FiTarget, FiEye, FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Container from "../../../../shared/components/container/container";
import projects from "../../data/projectsData";

function Nosotros() {

    const { slug } = useParams();

    const project = projects.find(
        project => project.slug === slug
    );

    if (!project) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Proyecto no encontrado
                </h1>
            </main>
        );
    }

    return (
        <main
            className="
                w-full
                bg-slate-50
            "
        >  
            <Container>
                <div className="p-12 md:p-16">
                    <div
                        className="
                            relative
                            mt-15
                            h-[450px]
                            w-full
                            overflow-hidden
                            rounded-2xl
                            shadow-xl
                        "
                    >
                        {/* IMAGEN */}

                        <img
                            src={project.imageNosotros[1]}
                            alt="Nuestra empresa"
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                            "
                        />

                        {/* DEGRADADO */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-black/35
                            "
                        />

                        {/* CONTENIDO */}

                        <div
                            className="
                                absolute
                                inset-x-0
                                top-0
                                p-6
                                md:p-10
                            "
                        >
                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-white
                                "
                            >
                                Nuestra empresa
                            </span>

                            <h2
                                className="
                                    mt-3
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    leading-tight
                                    text-white
                                    md:text-5xl
                                "
                            >
                                Construimos espacios

                                <span className="block text-white/60">
                                    para vivir mejor
                                </span>
                            </h2>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 flex flex-row">

                        <article
                            className="
                                flex-1
                                mt-10
                                p-10
                                max-w-3xl
                            "
                        >

                            <span
                                className="
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Nuestro propósito
                            </span>
                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Misión
                            </h2>
                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-relaxed
                                    text-gray-500
                                    md:text-base
                                "
                            >
                                Crear proyectos inmobiliarios de calidad,
                                diseñados para mejorar la experiencia de quienes
                                los habitan, ofreciendo espacios funcionales,
                                modernos y pensados para el bienestar.
                            </p>

                        </article>
                        <article
                            className="
                                flex-1
                                mt-10
                                p-10
                                max-w-3xl
                            "
                        >
                            <span
                                className="
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Hacia dónde vamos
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Visión
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-relaxed
                                    md:text-base
                                    text-gray-500
                                "
                            >
                                Ser una empresa reconocida por desarrollar
                                proyectos que integren innovación, diseño y
                                calidad, generando espacios que trasciendan
                                y aporten valor a nuestras ciudades.
                            </p>

                        </article>

                    </div>
                    <section className="mt-10">
                        <div className="m-10">
                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Lo que nos representa
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Nuestro Equipo
                            </h2>

                        </div>


                        <div
                            className="
                                grid
                                gap-5
                                sm:grid-cols-2
                                lg:grid-cols-4
                                px-10
                            "
                        >

                            {[
                                "Calidad",
                                "Innovación",
                                "Compromiso",
                                "Transparencia",
                            ].map((valor) => (

                                <article
                                    key={valor}
                                    className="
                                        group
                                        rounded-2xl
                                        bg-white
                                        p-6
                                        shadow-md
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:shadow-xl
                                    "
                                >

                                    <FiHeart
                                        className="
                                            size-6
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                        "
                                    />

                                    <h3
                                        className="
                                            mt-5
                                            text-lg
                                            font-semibold
                                            uppercase
                                        "
                                    >
                                        {valor}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-relaxed
                                            text-gray-500
                                        "
                                    >
                                        Trabajamos cada detalle con
                                        responsabilidad y dedicación.
                                    </p>

                                </article>

                            ))}

                        </div>

                    </section>

                </div>

            </Container>

        </main>
    );
}

export default Nosotros;