import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getProyectoBase } from "../../../services/api";

function Footer(){
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function cargarProyecto() {
            try {
                const data = await getProyectoBase();
                setProject(data);
            } catch (error) {
                console.error(
                    "Error al cargar información del proyecto:",
                    error
                );
            }
        }
        cargarProyecto();
    }, []);

    return (
        <footer
            className="
                absolute
                bottom-0
                left-0
                w-full
                z-50
                bg-gradient-to-t
                from-black/55
                via-black/20
                to-transparent
            "
        >
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-2
                    gap-y-1
                    p-3
                    lg:px-5
                "
            >
                <p
                    className="
                        text-center
                        text-[10px]
                        text-white
                        md:text-xs
                    "
                >
                    © {new Date().getFullYear()} ARQA 360° {" · "}
                    Todos los derechos reservados.
                </p>

                <div className="flex items-center gap-1">
                        <p
                        className="
                            text-center
                            text-[10px]
                            text-white
                            md:text-xs
                        "
                    >
                        Plataforma desarrollada por nuestro equipo.
                    </p>
                    <a
                        href={project?.empresa?.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-white
                            transition
                            hover:scale-110
                            hover:text-[var(--color-naranja)]
                        "
                    >
                        <FaWhatsapp className="size-3 md:size-4" />
                    </a>

                    <a
                        href={project?.empresa?.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-white
                            transition
                            hover:scale-110
                            hover:text-[var(--color-naranja)]
                        "
                    >
                        <FiFacebook className="size-3 md:size-4" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;