import { useParams } from "react-router-dom";
import projects from "../../../data/projectsData";
import HeroBackground from "./HeroBackground";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

function HeroProject() {

    const { slug } = useParams();

    const project = projects.find(
        item => item.slug === slug
    );

    if (!project) {
        return <h1>Proyecto no encontrado</h1>;
    }

    return (

        <section
            className="
                relative
                w-full
                h-full
                overflow-hidden
            "
        >

            <HeroBackground
                image={project.hero.image}
            />

            <HeroOverlay />

            <HeroContent
                project={project}
            />

        </section>

    );

}

export default HeroProject;