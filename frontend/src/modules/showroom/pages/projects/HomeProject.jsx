import { useParams } from "react-router-dom";
import projects from "../../data/projectsData";
import { HeroProject } from "../../components/project/hero";

function HomeProject() {
    const { slug } = useParams();
    const project = projects.find(
        project => project.slug === slug
    );
    if (!project) {
        return (
            <h1>Proyecto no encontrado</h1>
        );
    }
    return (
        <>
            <HeroProject project={project} />
        </>
    );
}
export default HomeProject;