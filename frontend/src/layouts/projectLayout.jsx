import { Outlet } from "react-router-dom";
import NavbarProject from "../shared/components/navbar/NavbarProject";
import Footer from "../shared/components/footer/footer";

function ProjectLayout() {

    return (
        <div className="relative flex min-h-screen flex-col">
            <NavbarProject />
            <main className="flex-1 min-h-0">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default ProjectLayout;