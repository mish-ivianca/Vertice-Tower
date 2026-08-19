function CompaniesSection(){

    const companies = [

        {
            nombre:"Constructora Aurora"
        },

        {
            nombre:"Grupo Inmobiliario Vista"
        },

        {
            nombre:"Desarrollos Urbanos"
        }

    ];


    return(

        <section
            className="
                py-20
                bg-slate-50
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
                        Empresas
                    </h2>


                    <p
                        className="
                            mt-4
                            text-slate-500
                        "
                    >
                        Conoce las empresas que hacen posible
                        nuestros proyectos inmobiliarios.
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

                        companies.map((company,index)=>(


                            <div

                                key={index}

                                className="
                                    bg-white
                                    rounded-2xl
                                    h-40
                                    flex
                                    items-center
                                    justify-center
                                    shadow-sm
                                    border
                                    border-slate-100
                                "

                            >

                                <span
                                    className="
                                        text-lg
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    {company.nombre}
                                </span>


                            </div>


                        ))

                    }


                </div>


            </div>


        </section>

    )

}


export default CompaniesSection;