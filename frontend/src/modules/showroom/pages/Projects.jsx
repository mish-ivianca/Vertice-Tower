import projects from "../data/projectsData";
import ProjectCard from "../components/project/ProjectCard";


function Projects(){
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
                <h1
                    className="
                        text-5xl
                        font-bold
                        text-slate-900
                    "
                >
                    Nuestros Proyectos
                </h1>
                <p
                    className="
                        mt-4
                        text-slate-500
                        text-lg
                    "
                >
                    Conoce nuestros desarrollos inmobiliarios.
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
                    projects.map((project)=>(
                        <ProjectCard
                            key={project.id}
                            nombre={project.nombre}
                            ciudad={project.ciudad}
                            precio={project.precioDesde}
                            imagen={project.hero.desktop}
                            slug={project.slug}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Projects;