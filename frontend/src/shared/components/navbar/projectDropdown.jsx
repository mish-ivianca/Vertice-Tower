import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import projects from "../../../modules/showroom/data/projects";


function ProjectDropdown(){


    const [openProyecto,setOpenProyecto] = useState(false);

    const [proyectoActivo,setProyectoActivo] = useState(null);

    const dropdownRef = useRef(null);

    useEffect(()=>{


    function handleClickOutside(event){


        if(
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ){

            setOpenProyecto(false);
            setProyectoActivo(null);

        }


    }



    document.addEventListener(
        "mousedown",
        handleClickOutside
    );



    return()=>{


        document.removeEventListener(
            "mousedown",
            handleClickOutside
        );


    }


},[]);

    return(

        <div
            ref={dropdownRef}

            className="
                relative
            "
        >


            <button

                onClick={()=>setOpenProyecto(!openProyecto)}

                className="
                    flex
                    items-center
                    gap-1
                "

            >

                Proyectos

                <span>
                    ▾
                </span>


            </button>



            {
            openProyecto && (

                <div

                    className="
                        absolute
                        top-8
                        left-0
                        w-64
                        bg-white
                        rounded-xl
                        shadow-lg
                        border
                        border-slate-100
                        p-3
                        z-50
                    "

                >



                    {
                    projects.map((proyecto)=>(


                        <div
                            key={proyecto.id}
                        >



                            <button

                                onClick={()=>{

                                    if(
                                        proyectoActivo === proyecto.id
                                    ){

                                        setProyectoActivo(null);

                                    }
                                    else{

                                        setProyectoActivo(proyecto.id);

                                    }

                                }}

                                className="
                                    w-full
                                    text-left
                                    px-4
                                    py-2
                                    rounded-lg
                                    hover:bg-slate-100
                                    flex
                                    justify-between
                                "

                            >

                                {proyecto.nombre}


                                <span>
                                    ›
                                </span>


                            </button>



                            {
                            proyectoActivo === proyecto.id && (


                                <div
                                    className="
                                        ml-4
                                        border-l
                                        border-slate-200
                                        pl-3
                                    "
                                >


                                    {
                                    proyecto.opciones.map((opcion)=>(

                                        <Link

                                            key={opcion.nombre}

                                            to={opcion.ruta}

                                            className="
                                                block
                                                px-3
                                                py-2
                                                text-sm
                                                rounded-lg
                                                hover:bg-slate-100
                                            "

                                        >

                                            {opcion.nombre}

                                        </Link>


                                    ))

                                    }


                                </div>


                            )

                            }



                        </div>


                    ))

                    }



                </div>


            )

            }



        </div>


    )

}


export default ProjectDropdown;