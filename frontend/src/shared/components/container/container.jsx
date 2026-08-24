function Container({children, className=""}) {
    return (
        <div
            className={`
                max-w-8xl
                mx-auto
                px-5
                md:px-10
                lg:px-20
                ${className}
            `}
        >
            {children}

        </div>
    )
}

export default Container;