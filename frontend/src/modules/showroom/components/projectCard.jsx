import { Link } from "react-router-dom";

function ProjectCard({

    nombre,
    ciudad,
    precio,
    imagen,
    slug

}){

    return(

        <article
            className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
            "
        >

            <img

                src={imagen}

                alt={nombre}

                className="
                    w-full
                    h-64
                    object-cover
                "

            />


            <div
                className="
                    p-6
                "
            >

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-slate-900
                    "
                >
                    {nombre}
                </h3>


                <p
                    className="
                        mt-2
                        text-slate-500
                    "
                >
                    {ciudad}
                </p>


                <p
                    className="
                        mt-4
                        text-lg
                        font-bold
                    "
                >
                    Desde {precio}
                </p>


                <Link

                    to={`/portal-comercial/${slug}`}

                    className="
                        mt-6
                        inline-block
                        bg-slate-900
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        hover:bg-slate-700
                    "

                >

                    Ver Proyecto

                </Link>

            </div>

        </article>

    )

}

export default ProjectCard;