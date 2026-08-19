import { useState } from "react";

import CarouselArrow from "./CarouselArrow";
import CarouselDots from "./CarouselDots";


function Carousel({

    items,

    renderItem

}){

    const [current,setCurrent] = useState(0);


    function next(){

        setCurrent(

            current === items.length-1

            ? 0

            : current+1

        )

    }


    function previous(){

        setCurrent(

            current === 0

            ? items.length-1

            : current-1

        )

    }


    return(

        <>

            <div
                className="
                    flex
                    items-center
                    gap-6
                "
            >

                <CarouselArrow

                    direction="left"

                    onClick={previous}

                />


                <div
                    className="
                        flex-1
                    "
                >

                    {

                        renderItem(

                            items[current]

                        )

                    }

                </div>


                <CarouselArrow

                    direction="right"

                    onClick={next}

                />

            </div>


            <CarouselDots

                total={items.length}

                current={current}

                onSelect={setCurrent}

            />

        </>

    )

}

export default Carousel;