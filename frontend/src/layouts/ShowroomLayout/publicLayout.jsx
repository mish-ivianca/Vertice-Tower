import { Outlet } from "react-router-dom";
import NavbarPublic from "../../shared/components/navbar/navbarPublic";
import Footer from "../../shared/components/footer/Footer";

function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavbarPublic />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default PublicLayout;