import { Link } from "react-router-dom";


function CTASection(){

    return(

        <section
            className="
                py-24
                bg-slate-900
            "
        >

            <div
                className="
                    max-w-5xl
                    mx-auto
                    px-6
                    text-center
                "
            >

                <h2
                    className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-white
                    "
                >
                    ¿Estas listopara llevar tus Proyectos a otro nivel?
                </h2>


                <p
                    className="
                        mt-6
                        text-lg
                        text-slate-300
                    "
                >
                    Agenda una visita y conoce todos los detalles
                    de nuestros servicios inmobiliarios.
                </p>


                <Link

                    to="/contacto"

                    className="
                        inline-block
                        mt-10
                        bg-white
                        text-slate-900
                        px-8
                        py-4
                        rounded-xl
                        font-semibold
                        hover:bg-slate-100
                        transition
                    "

                >

                    Contactar ahora

                </Link>


            </div>


        </section>

    )

}


export default CTASection;