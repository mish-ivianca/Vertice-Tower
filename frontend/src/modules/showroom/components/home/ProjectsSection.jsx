import projects from "../../data/projectsData";
import ProjectCard from "../project/ProjectCard";


function ProjectsSection(){

    const featuredProjects = projects.slice(0, 3);

    return(

        <section
            className="
                max-w-7xl
                mx-auto
                px-6
                py-20
            "
        >

            <div
                className="
                    text-center
                    mb-14
                "
            >

                <h2
                    className="
                        text-4xl
                        font-bold
                        text-slate-900
                    "
                >
                    Proyectos Destacados
                </h2>

                <p
                    className="
                        mt-4
                        text-slate-500
                        text-lg
                    "
                >
                    Descubre nuestros proyectos inmobiliarios más exclusivos.
                </p>

            </div>


            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-10
                "
            >

                {

                    featuredProjects.map((project)=>(

                        <ProjectCard

                            key={project.id}

                            nombre={project.nombre}

                            ciudad={project.ciudad}

                            precio={project.precio_desde}

                            imagen={project.imagen_portada}

                            slug={project.slug}

                        />

                    ))

                }

            </div>

        </section>

    )

}

export default ProjectsSection;