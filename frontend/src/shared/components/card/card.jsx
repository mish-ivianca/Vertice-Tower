function Card({
    children,
    className = ""
}) {

    return (

        <div
            className={`
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                transition
                duration-300
                ${className}
            `}
        >

            {children}

        </div>

    );

}


export default Card;