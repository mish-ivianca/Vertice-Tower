function CarouselDots({

    total,

    current,

    onSelect

}){

    return(

        <div
            className="
                flex
                justify-center
                gap-3
                mt-8
            "
        >

            {

                Array.from({ length: total }).map((_, index)=>(

                    <button

                        key={index}

                        onClick={()=>onSelect(index)}

                        className={`
                            w-3
                            h-3
                            rounded-full
                            transition
                            ${
                                current === index
                                ? "bg-slate-900"
                                : "bg-slate-300"
                            }
                        `}

                    />

                ))

            }

        </div>

    )

}

export default CarouselDots;