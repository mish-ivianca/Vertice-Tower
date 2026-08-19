import { Link } from "react-router-dom";
import Container from "../Container/Container";


function NavbarPublic() {

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

                    {/* LOGO */}

                    <Link
                        to="/"
                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        SHOWROOM
                    </Link>


                    {/* MENU */}

                    <div
                        className="
                            flex
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


                </nav>

            </Container>


        </header>

    );

}


export default NavbarPublic;