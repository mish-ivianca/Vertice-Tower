import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar(){

    const [openProyecto, setOpenProyecto] = useState(false);


    return(

        <header
            className="
                w-full
                bg-white
                border-b
                border-slate-200
            "
        >

            <nav
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-5
                    flex
                    items-center
                    justify-between
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



                    {/* PROYECTO */}

                    <div
                        className="
                            relative
                        "
                    >

                        <button

                            onClick={() =>
                                setOpenProyecto(!openProyecto)
                            }

                            className="
                                flex
                                items-center
                                gap-1
                            "
                        >

                            Proyecto

                            <span>
                                ▾
                            </span>


                        </button>



                        {
                        openProyecto && (

                            <div
                                className="
                                    absolute
                                    top-8
                                    left-0
                                    w-52
                                    bg-white
                                    rounded-xl
                                    shadow-lg
                                    border
                                    border-slate-100
                                    p-3
                                    z-50
                                "
                            >


                                <Link

                                    to="/edificios"

                                    className="
                                        block
                                        px-4
                                        py-2
                                        rounded-lg
                                        hover:bg-slate-100
                                    "
                                >
                                    Edificios

                                </Link>



                                <Link

                                    to="/ubicacion"

                                    className="
                                        block
                                        px-4
                                        py-2
                                        rounded-lg
                                        hover:bg-slate-100
                                    "
                                >
                                    Ubicación

                                </Link>



                                <Link

                                    to="/amenidades"

                                    className="
                                        block
                                        px-4
                                        py-2
                                        rounded-lg
                                        hover:bg-slate-100
                                    "
                                >
                                    Amenidades

                                </Link>



                                <Link

                                    to="/avances"

                                    className="
                                        block
                                        px-4
                                        py-2
                                        rounded-lg
                                        hover:bg-slate-100
                                    "
                                >
                                    Avances de Obra

                                </Link>



                            </div>

                        )

                        }



                    </div>



                    <Link to="/contacto">

                        Contacto

                    </Link>



                </div>


            </nav>


        </header>

    )

}


export default Navbar;