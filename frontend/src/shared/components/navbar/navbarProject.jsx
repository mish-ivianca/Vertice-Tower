import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../container/Container";


function NavbarProject() {
    const { slug } = useParams();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header
            className="
                fixed
                top-0
                left-0
                w-full
                z-60
                bg-gradient-to-b
                from-black/55
                via-black/20
                to-transparent
            "
        >
            <div
            className={`
                max-w-8xl
                mx-auto
                md:px-10
                lg:px-20
            `}
        >
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
                        to={`/portal-comercial/${slug}`}
                        onClick={closeMenu}
                        className="
                            text-xl
                            font-bold
                            text-stone-50
                            pl-2
                            md:pl-0
                        "
                    >
                        LOGO
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
                            text-stone-50
                            pr-2
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
                                ${isMenuOpen
                                    ? "translate-y-2 rotate-45"
                                    : ""
                                }
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
                                ${isMenuOpen
                                    ? "opacity-0"
                                    : ""
                                }
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
                                ${isMenuOpen
                                    ? "-translate-y-2 -rotate-45"
                                    : ""
                                }
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
                            text-stone-50
                        "
                    >
                        <Link to={`/portal-comercial/${slug}`} className="menu-link">
                            Home
                        </Link>

                        <Link to={`/portal-comercial/${slug}/nosotros`} className="menu-link">
                            Nosotros
                        </Link>

                        <Link to={`/portal-comercial/${slug}/recorrido`} className="menu-link">
                            Recorrido
                        </Link>

                        <Link to={`/portal-comercial/${slug}/amenidades`} className="menu-link">
                            Amenidades
                        </Link>

                        <Link to={`/portal-comercial/${slug}/avances`} className="menu-link">
                            Avances
                        </Link>

                        <Link to={`/portal-comercial/${slug}/ubicacion`} className="menu-link">
                            Ubicación
                        </Link>

                        <Link to={`/portal-comercial/${slug}/contacto`} className="menu-link">
                            Contáctanos
                        </Link>

                    </div>


                    {/* MENU MÓVIL */}
                    <div
                        className={`
                            absolute
                            right-0
                            top-full
                            z-1000
                            w-[180px]
                            bg-slate-50
                            shadow-xl
                            md:hidden
                            overflow-hidden
                            transition-all
                            duration-300
                            rounded-l-lg
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
                                max-h-[83vh]
                                overflow-y-auto
                            "
                        >
                            <Link
                                to={`/portal-comercial/${slug}`}
                                onClick={closeMenu}
                                className="
                                    p-4
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                    
                                "
                            >
                                Home
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/nosotros`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Nosotros
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/recorrido`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Recorrido
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/amenidades`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Amenidades
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/avances`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Avances
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/ubicacion`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Ubicación
                            </Link>
                            <Link
                                to={`/portal-comercial/${slug}/contacto`}
                                onClick={closeMenu}
                                className="
                                    px-4
                                    py-3
                                    text-sm
                                    text-slate-900
                                    hover:bg-slate-50
                                "
                            >
                                Contáctanos
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </header>

    );
}
export default NavbarProject;