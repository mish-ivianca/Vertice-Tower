import { Outlet } from "react-router-dom";
import NavbarProject from "../../shared/components/navbar/navbarProject";
import PageTransition from "../../modules/showroom/components/PageTransition";

function ProjectLayout() {
    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
        >
            <NavbarProject />
            <main className="flex-1 min-h-0">
                <PageTransition />
            </main>
        </div>
    );
}
export default ProjectLayout;