function Section({
    children,
    className=""
}) {

    return (

        <section
            className={`
                py-12
                md:py-16
                lg:py-20
                ${className}
            `}
        >

            {children}

        </section>

    )

}

export default Section;