import { Link, useParams } from "react-router-dom";
import Container from "../Container/Container";


function NavbarProject() {

    const { slug } = useParams();


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
                        flex
                        items-center
                        justify-between
                        py-5
                    "
                >


                    <Link
                        to={`/proyectos/${slug}`}
                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        SHOWROOM
                    </Link>


                    <div
                        className="
                            flex
                            items-center
                            gap-8
                            text-sm
                            text-slate-600
                        "
                    >

                        <Link to={`/proyectos/${slug}`}>
                            Home
                        </Link>


                        <Link to={`/proyectos/${slug}/nosotros`}>
                            Nosotros
                        </Link>


                        <Link to={`/proyectos/${slug}/recorrido`}>
                            Recorrido
                        </Link>


                        <Link to={`/proyectos/${slug}/amenidades`}>
                            Amenidades
                        </Link>


                        <Link to={`/proyectos/${slug}/avances`}>
                            Avances
                        </Link>


                        <Link to={`/proyectos/${slug}/ubicacion`}>
                            Ubicación
                        </Link>


                        <Link to={`/proyectos/${slug}/contacto`}>
                            Contáctanos
                        </Link>


                    </div>


                </nav>

            </Container>

        </header>

    );

}


export default NavbarProject;