import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useState } from "react";

function NavbarPublic() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header
            className="
                w-full
                bg-white
                border-b
                border-slate-200
            "
        >
            <Container>
                <nav
                    className="
                        relative
                        flex
                        items-center
                        justify-between
                        p-3
                    "
                >
                    {/* LOGO */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        SHOWROOM
                    </Link>
                    {/* BOTÓN HAMBURGUESA */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="
                            flex
                            flex-col
                            gap-1.5
                            md:hidden
                            text-slate-900
                        "
                        aria-label={
                            isMenuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={isMenuOpen}
                    >
                        <span
                            className={`
                                block
                                h-0.5
                                w-6
                                bg-current
                                transition
                                duration-300
                                ${isMenuOpen ? "translate-y-2 rotate-45" : ""}
                            `}
                        />
                        <span
                            className={`
                                block
                                h-0.5
                                w-6
                                bg-current
                                transition
                                duration-300
                                ${isMenuOpen ? "opacity-0" : ""}
                            `}
                        />
                        <span
                            className={`
                                block
                                h-0.5
                                w-6
                                bg-current
                                transition
                                duration-300
                                ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}
                            `}
                        />
                    </button>
                    {/* MENU ESCRITORIO */}
                    <div
                        className="
                            hidden
                            md:flex
                            items-center
                            gap-8
                            text-sm
                            text-slate-600
                        "
                    >
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/nosotros">
                            Nosotros
                        </Link>
                        <Link to="/portafolio">
                            Portafolio
                        </Link>
                        <Link to="/portal-comercial">
                            Portal Comercial
                        </Link>
                        <Link to="/contacto">
                            Contacto
                        </Link>
                    </div>
                    {/* MENU MÓVIL */}
                    <div
                        className={`
                            absolute
                            right-0
                            w-50
                            top-full
                            z-100
                            bg-white/90
                            border-b
                            border-slate-200
                            md:hidden
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                                isMenuOpen
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                            }
                        `}
                    >
                        <div
                            className="
                                flex
                                flex-col
                                py-1
                            "
                        >
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                "
                            >
                                Home
                            </Link>

                            <Link
                                to="/nosotros"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                "
                            >
                                Nosotros
                            </Link>

                            <Link
                                to="/portafolio"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                "
                            >
                                Portafolio
                            </Link>

                            <Link
                                to="/portal-comercial"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                "
                            >
                                Portal Comercial
                            </Link>

                            <Link
                                to="/contacto"
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-600
                                    hover:bg-slate-50
                                "
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
export default NavbarPublic;