import Container from "../../../../shared/components/container/container";
import { useParams } from "react-router-dom";
import projects from "../../data/projectsData";
import { TbMapShare } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import PageHeader from "../../components/project/pageHeader/PageHeader";

function Ubicacion() {
    const { slug} = useParams();

    const project = projects.find(
        project => project.slug === slug
    )
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
        <main className="
            w-full
            bg-gradient-to-bl from-zinc-300 to-zinc-50">
            <Container>
                <div className="py-12 md:py-16">
                    <PageHeader
                        icon={FiMapPin}
                        title="Ubicación"
                        subtitle="Encuéntranos"
                    />
                     <p
                            className="
                                my-4
                                max-w-2xl
                                text-sm
                                leading-relaxed
                                text-gray-600
                                md:text-base
                            "
                        >
                            Conoce la ubicación de nuestro proyecto y
                            encuentra fácilmente el camino para visitarnos.
                        </p>
                    <div className="
                        grid
                        gap-5
                        lg:grid-cols-[1fr_320px]
                    ">
                        <div className="
                            overflow-hidden
                            rounded-2xl
                            shadow-xl
                            shadow-lg
                        ">
                            <iframe
                                src= {project.iframeUbicacion}
                                className="
                                    h-[450px]
                                    md:h-[100%]
                                    w-full
                                "
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación del proyecto"
                            />
                        </div>
                         {/* INFORMACIÓN */}
                        <div className="
                            flex
                            flex-col
                            justify-center
                            rounded-2xl
                            bg-gray-50
                            shadow-lg
                            pb-5
                            md:pb-3
                            text-center
                        ">
                            <img 
                                src={project.imageUbicacion}
                                alt="Ubicacion"
                                className="
                                    rounded-t-lg
                                "
                            />
                            <div className="
                                p-3
                                md:p-5
                            ">   
                            <span className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-gray-500
                            ">
                                Dirección
                            </span>

                            <h2 className="
                                text-2xl
                                font-semibold
                            ">
                                Visítanos
                            </h2>

                            <p className="
                                leading-relaxed
                                text-gray-600
                            ">
                                {project.ciudad}<br></br>
                                {project.direccion}
                            </p>

                            <a
                                href={project.linkUbicacion}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    mt-4
                                    w-auto
                                    gap-1
                                    justify-center
                                    rounded-full
                                    bg-red-600
                                    p-3
                                    text-sm
                                    uppercase
                                    tracking-widest
                                    text-white
                                    transition-all
                                    duration-250
                                    hover:scale-105
                                    hover:bg-slate-900
                                    animate-pulse
                                    m-auto
                                "
                            >
                                <TbMapShare className="size-5"/> Cómo llegar
                            </a>

                            </div>
                        </div>
                    </div>

                </div>

            </Container>

        </main>
    );
}

export default Ubicacion;