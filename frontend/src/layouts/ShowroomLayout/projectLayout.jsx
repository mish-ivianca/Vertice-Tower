import NavbarProject from "../../shared/components/navbar/navbarProject";
import Footer from "../../shared/components/footer/Footer";
import PageTransition from "../../modules/showroom/components/PageTransition";
import { Outlet } from "react-router-dom";

function ProjectLayout() {
    return (
        <div
            className="relative flex min-h-screen flex-col"
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