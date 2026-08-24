
function PageHeader({
    icon: Icon,
    title,
    subtitle,
}) {
    return (
        <div className="pt-5 pb-2">

            {/* TÍTULO */}
            <div className="flex items-start gap-3">

                {/* ICONO */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-center
                    "
                >
                    <Icon className="size-12 md:size-14" />
                </div>

                {/* TEXTOS */}
                <div>

                    <h1
                        className="
                            text-3xl
                            font-semibold
                            uppercase
                            md:text-5xl
                        "
                    >
                        {title}
                    </h1>

                    <span
                        className="
                            text-base
                            uppercase
                            tracking-[0.25em]
                            text-gray-500
                            md:tracking-[0.80em]
                        "
                    >
                        {subtitle}
                    </span>

                </div>

            </div>

            {/* SEPARADOR */}
            <div className="mt-5 border-t border-black/10" />

        </div>
    );
}

export default PageHeader;