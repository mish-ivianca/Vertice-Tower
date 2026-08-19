function CarouselArrow({

    direction,

    onClick

}){

    return(

        <button

            onClick={onClick}

            className="
                w-12
                h-12
                rounded-full
                bg-white
                shadow-lg
                hover:shadow-xl
                border
                border-slate-200
                flex
                items-center
                justify-center
                transition
            "

        >

            {

                direction === "left"

                ?

                "←"

                :

                "→"

            }

        </button>

    )

}

export default CarouselArrow;