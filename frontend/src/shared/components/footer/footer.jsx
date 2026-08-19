function Footer(){

    return (

        <footer
            className="
                bg-black/30
                border-slate-200
                backdrop-blur-md
            "
        >

            <div
                className="
                    px-10
                    py-3
                "
            >
                <p
                    className="
                        text-white
                        text-center
                        text-xs
                    "
                >
                    © {new Date().getFullYear()} Arqa Estudio. Todos los derechos reservados.

                </p>

            </div>

        </footer>

    )

}


export default Footer;