import { useOutletContext } from "react-router-dom";

function ProjectLoader({text = "CARGANDO",}) {
    const {project,} = useOutletContext();
    const logo = project?.logoProyecto || project?.faviconProyecto;
        
    return (
        <main
            role="status"
            aria-live="polite"
            aria-label="Cargando contenido"
            className="
                fixed
                inset-0
                z-[2000]

                flex
                min-h-[100dvh]
                w-full

                items-center
                justify-center

                overflow-hidden

                bg-neutral-900
        ">
            <div
                className="
                    pointer-events-none
                    absolute

                    left-1/2
                    top-1/2

                    h-[320px]
                    w-[320px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[var(--color-naranja)]

                    opacity-[0.06]

                    blur-[100px]
                "
            />
            <div
                className="
                    relative

                    flex
                    flex-col

                    items-center
                    justify-center
            ">
                <div
                    className="
                        relative

                        flex
                        h-[180px]
                        w-[180px]

                        items-center
                        justify-center

                        sm:h-[200px]
                        sm:w-[200px]

                        lg:h-[220px]
                        lg:w-[220px]
                ">
                    <div
                        className="
                            absolute
                            inset-0

                            rounded-full

                            border
                            border-white/10
                        "
                    />
                    <div
                        className="
                            absolute
                            inset-0

                            animate-spin

                            rounded-full

                            border
                            border-transparent

                            border-t-[var(--color-naranja)]
                            border-r-[var(--color-naranja)]

                            opacity-90
                        "
                        style={{
                            animationDuration:
                                "1.8s",
                        }}
                    />
                    <div
                        className="
                            absolute
                            inset-[5px]

                            animate-spin

                            rounded-full
                        "
                        style={{
                            animationDuration:
                                "1.8s",
                        }}
                    >
                        <span
                            className="
                                absolute

                                left-1/2
                                top-[-2px]

                                h-[6px]
                                w-[6px]

                                -translate-x-1/2

                                rounded-full

                                bg-[var(--color-naranja)]

                                shadow-[0_0_16px_var(--color-naranja)]
                            "
                        />
                    </div>
                    {logo && (
                        <img
                            src={logo}
                            alt=""
                            draggable={false}
                            className="
                                relative
                                z-10

                                block

                                max-h-[72px]
                                max-w-[105px]

                                select-none

                                object-contain

                                brightness-0
                                invert

                                sm:max-h-[80px]
                                sm:max-w-[120px]

                                lg:max-h-[90px]
                                lg:max-w-[135px]
                            "
                        />
                    )}
                </div>
                <p
                    className="
                        mt-8
                        text-[10px]
                        font-light
                        uppercase
                        tracking-[0.45em]
                        text-white/55
                        sm:text-[11px]
                ">
                    {text}
                </p>

            </div>

        </main>
    );

}


export default ProjectLoader;