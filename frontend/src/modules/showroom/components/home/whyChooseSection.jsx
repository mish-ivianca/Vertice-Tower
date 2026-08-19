function WhyChooseSection(){

    const benefits = [

        {
            title:"Diseño moderno",
            description:
            "Creamos espacios funcionales con arquitectura contemporánea."
        },

        {
            title:"Ubicación estratégica",
            description:
            "Proyectos ubicados en zonas de alta valorización."
        },

        {
            title:"Calidad garantizada",
            description:
            "Utilizamos materiales y acabados seleccionados."
        }

    ];


    return(

        <section
            className="
                bg-white
                py-20
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                "
            >

                <div
                    className="
                        text-center
                        mb-14
                    "
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-slate-900
                        "
                    >
                        ¿Por qué elegirnos?
                    </h2>

                    <p
                        className="
                            mt-4
                            text-slate-500
                        "
                    >
                        Diseñamos proyectos pensando en calidad,
                        comodidad e inversión.
                    </p>

                </div>


                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-8
                    "
                >

                    {
                        benefits.map((item,index)=>(

                            <div

                                key={index}

                                className="
                                    bg-slate-50
                                    rounded-2xl
                                    p-8
                                    text-center
                                "

                            >

                                <h3
                                    className="
                                        text-xl
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        text-slate-600
                                    "
                                >
                                    {item.description}
                                </p>


                            </div>

                        ))
                    }


                </div>

            </div>

        </section>

    )

}


export default WhyChooseSection;