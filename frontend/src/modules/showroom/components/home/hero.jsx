import Container from "../../../../shared/components/Container";
import Button from "../../../../shared/components/Button";
import { Link } from "react-router-dom";
import heroImage from "../../../../assets/images/hero.webp";
import Projects from "../../pages/Projects";


function Hero(){

    return (

        <section
            className="
                relative
                h-[85vh]
                flex
                items-center
                justify-center
                bg-cover
                bg-center
            "
            style={{
                backgroundImage:`url(${heroImage})`
            }}
        >


            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/40
                "
            />


            {/* Contenido */}

            <Container>

                <div
                    className="
                        relative
                        z-10
                        text-center
                        max-w-4xl
                        mx-auto
                        text-white
                    "
                >


                    <h1
                        className="
                            text-5xl
                            md:text-7xl
                            font-semibold
                            tracking-tight
                        "
                    >

                        Vive una nueva experiencia inmobiliaria

                    </h1>


                    <p
                        className="
                            mt-6
                            text-lg
                            md:text-xl
                            text-white/80
                        "
                    >

                        Explora proyectos,
                        edificios y departamentos
                        de manera interactiva.

                    </p>



                    <Link to="/portal-comercial">
                        <Button
                            className="
                                mt-8    "
                        >
                            Explorar Proyectos
                        </Button>

                    </Link>


                </div>


            </Container>


        </section>


    )

}


export default Hero;