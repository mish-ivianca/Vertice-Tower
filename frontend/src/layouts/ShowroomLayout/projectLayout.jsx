import { Outlet } from "react-router-dom";
import NavbarProject from "../../shared/components/navbar/NavbarProject";
import Footer from "../../shared/components/footer/Footer";

function ProjectLayout() {
    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
        >
            <NavbarProject />
            <main className="flex-1 min-h-0">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default ProjectLayout;