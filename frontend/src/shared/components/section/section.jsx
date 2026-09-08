function Section({
    children,
    className=""
}) {
    return (
        <section
            className={`
                py-15
                md:px-10
                md:py-30
                ${className}
            `}
        >

            {children}

        </section>
    )
}
export default Section;