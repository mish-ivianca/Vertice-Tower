import { useParams } from "react-router-dom";
import Container from "../../../../shared/components/container/container";
import projects from "../../data/projectsData";
import TeamCard from "../../components/project/nosotros/TeamCard";
import TitleCard from "../../components/project/nosotros/titleCard";

function Nosotros() {

    const { slug } = useParams();

    const project = projects.find(
        project => project.slug === slug
    );

    if (!project) {
        return (
            <main
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                "
            >
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

                <div
                    className="
                        px-5
                        py-15
                        md:px-10
                        md:py-30
                    "
                >
                    <TitleCard
                        image={project.imageNosotros[0]}
                        label="Proyecto"
                        title="Espacios para disfrutar"
                        highlight="cada momento"
                    />

                    <section
                        className="
                            mt-10
                            grid
                            gap-5
                            md:grid-cols-2
                        "
                    >

                        {/* MISIÓN */}

                        <article
                            className="
                                p-6
                                md:p-10
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
                                    max-w-2xl
                                    text-sm
                                    leading-relaxed
                                    text-gray-500
                                    md:text-base
                                "
                            >
                                Crear proyectos inmobiliarios de calidad,
                                diseñados para mejorar la experiencia de
                                quienes los habitan, ofreciendo espacios
                                funcionales, modernos y pensados para el
                                bienestar.
                            </p>

                        </article>


                        {/* VISIÓN */}

                        <article
                            className="
                                p-6
                                md:p-10
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
                                    max-w-2xl
                                    text-sm
                                    leading-relaxed
                                    text-gray-500
                                    md:text-base
                                "
                            >
                                Ser una empresa reconocida por desarrollar
                                proyectos que integren innovación, diseño y
                                calidad, generando espacios que trasciendan
                                y aporten valor a nuestras ciudades.
                            </p>

                        </article>

                    </section>


                    {/* =====================================
                        EQUIPO
                    ====================================== */}
                    <section className="mt-16 md:mt-20 px-10">

                        <div
                            className="
                                mb-10
                                md:mb-12
                            "
                        >

                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Las personas detrás
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
                                Nuestro equipo
                            </h2>

                        </div>


                        {/* FICHAS */}

                        <div
                            className="
                                grid
                                gap-12
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                            "
                        >

                            {project.equipo.map((person) => (

                                <TeamCard
                                    key={person.id}
                                    person={person}
                                />

                            ))}

                        </div>

                    </section>
                    <TitleCard
                        image={project.imageNosotros[1]}
                        label="Comprometidos"
                        title="PARA BRINDARTE"
                        highlight="UNA EXPERIENCIA INOLVIDABLE"
                    />
                    <section
                        className="
                           my-16 md:my-20 px-10
                        "
                    >

                        <div className="mb-10">

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
                                Nuestros valores
                            </h2>

                        </div>


                        <div
                            className="
                                grid
                                gap-12
                                sm:grid-cols-2
                                lg:grid-cols-4
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
                                        border-l
                                        border-black/10
                                        py-5
                                    "
                                >

                                    <h3
                                        className="
                                            text-lg
                                            font-semibold
                                            uppercase
                                            pl-6
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
                                            pl-6
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