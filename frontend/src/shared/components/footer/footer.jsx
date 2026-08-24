function Footer(){
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
                    md:px-5
                    py-3
                    px-1
                "
            >
                <p
                    className="
                        text-white
                        text-center
                        md:text-xs
                        text-[10px]
                    "
                >
                    © {new Date().getFullYear()} Arqa Estudio. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
export default Footer;