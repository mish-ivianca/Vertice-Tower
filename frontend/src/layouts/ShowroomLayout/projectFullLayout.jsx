import { Outlet } from "react-router-dom";
import NavbarProject from "../../shared/components/navbar/NavbarProject";

function ProjectLayout() {
    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
        >
            <NavbarProject />
            <main className="flex-1 min-h-0">
                <Outlet />
            </main>
        </div>
    );
}
export default ProjectLayout;