import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProyectoBase } from "../../../services/api";

const menuItems = [
    { label: "Home", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Recorrido", path: "/recorrido" },
    { label: "Amenidades", path: "/amenidades" },
    { label: "Avances", path: "/avances" },
    { label: "Ubicación", path: "/ubicacion" },
    { label: "Contáctanos", path: "/contacto" },
];

function NavbarProject() {
    const [project, setProject] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const cargarNavbar = async () => {
            try {
                const data = await getProyectoBase();
                setProject(data);
            } catch (error) {
                console.error(error);
            }
        };

        cargarNavbar();
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className="
                fixed
                top-0
                left-0
                z-60
                w-full
                h-15
                lg:h-17
                bg-black/60
                justify-center
            "
        >
            <div className="
                max-w-8xl
                mx-auto
                px-0
                md:px-3
                lg:px-20
            ">
                <nav
                    className="
                        relative
                        flex
                        items-center
                        justify-between
                        p-3
                    "
                >
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="
                            flex
                            items-center
                            pl-2
                            text-xl
                            font-bold
                            text-stone-50
                            md:pl-0
                        "
                    >
                        <img
                            src={project?.empresa.logo1}
                            alt={project?.empresa.nombre}
                            className="
                                h-8
                                lg:h-10
                                w-auto
                                max-w-[180px]
                                object-contain
                            "
                        />
                    </Link>

                    {/* BOTÓN HAMBURGUESA */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="
                            flex
                            flex-col
                            gap-1.5
                            pr-2
                            text-stone-50
                            md:hidden
                        "
                        aria-label={
                            isMenuOpen ? "Cerrar menú" : "Abrir menú"
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
                                ${
                                    isMenuOpen
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
                                ${
                                    isMenuOpen
                                        ? "-translate-y-2 -rotate-45"
                                        : ""
                                }
                            `}
                        />
                    </button>

                    {/* MENÚ DESKTOP */}
                    <div
                        className="
                            hidden
                            items-center
                            gap-6
                            lg:gap-8
                            text-xs
                            md:text-sm
                            text-stone-50
                            md:flex
                        "
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="menu-link"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* MENÚ MÓVIL */}
                    <div
                        className={`
                            absolute
                            right-0
                            top-15
                            z-1000
                            w-[140px]
                            overflow-hidden
                            rounded-bl-lg
                            bg-black/65
                            shadow-xl
                            transition-all
                            duration-300
                            md:hidden
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
                                max-h-[80vh]
                                flex-col
                                overflow-y-auto
                                py-1
                            "
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className="
                                        px-4
                                        py-3
                                        text-right
                                        text-sm
                                        text-slate-50
                                        hover:bg-slate-50
                                        hover:text-black
                                        text-shadow-lg
                                    "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavbarProject;