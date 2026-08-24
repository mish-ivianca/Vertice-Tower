function DepartmentViewSelector({
    view,
    setView
}) {

    return (

        <nav
            className="
                absolute
                bottom-8
                md:bottom-10
                left-1/2
                -translate-x-1/2
                z-30
                flex
                items-center
                justify-around
                gap-1
                rounded-full
                bg-white/60
                p-1
                shadow-2xl
                w-xs
                md:w-auto
            "
        >

            {/* PLANO 3D */}

            <button
                onClick={() => setView("3d")}

                className={`
                    rounded-full
                    p-2
                    text-[10px]
                    font-light
                    transition
                    md:text-sm
                    md:px-4
                    md:py-2
                    ${
                        view === "3d"
                            ? "bg-slate-900 text-white"
                            : "text-slate-600 hover:bg-slate-100"
                    }
                `}
            >
                PLANO 3D
            </button>


            {/* PLANO TÉCNICO */}

            <button
                onClick={() => setView("technical")}

                className={`
                    rounded-full
                    p-2
                    text-[10px]
                    font-light
                    transition
                    md:text-sm
                    md:px-4
                    md:py-2
                    ${
                        view === "technical"
                            ? "bg-slate-900 text-white"
                            : "text-slate-600 hover:bg-slate-100"
                    }
                `}
            >
                PLANO TÉCNICO
            </button>


            {/* GALERÍA */}

            <button
                onClick={() => setView("gallery")}

                className={`
                    rounded-full
                    p-2
                    text-[10px]
                    font-light
                    transition
                    md:text-sm
                    md:px-4
                    md:py-2
                    ${
                        view === "gallery"
                            ? "bg-slate-900 text-white"
                            : "text-slate-600 hover:bg-slate-100"
                    }
                `}
            >
                GALERÍA
            </button>


            {/* TOUR 360 */}

            <button
                onClick={() => setView("tour")}

                className={`
                    rounded-full
                    p-2
                    text-[10px]
                    font-light
                    transition
                    md:text-sm
                    md:px-4
                    md:py-2
                    ${
                        view === "tour"
                            ? "bg-slate-900 text-white"
                            : "text-slate-600 hover:bg-slate-100"
                    }
                `}
            >
                TOUR 360°
            </button>

        </nav>

    );
}

export default DepartmentViewSelector;