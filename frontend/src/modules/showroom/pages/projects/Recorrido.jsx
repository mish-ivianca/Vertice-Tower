import { useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../../data/projectsData";
import FloorPlan from "../../components/project/Recorrido/FloorPlan";
import { MdKeyboardArrowDown } from "react-icons/md";


function Recorrido() {
    const { slug} = useParams();

    const project = projects.find(
        project => project.slug === slug
    )
    if (!project) {

        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Proyecto no encontrado
                </h1>

            </main>
        );

    }
    const [selectedFloor, setSelectedFloor] = useState(
        project.pisos[0]
    );
    const [showFloors, setShowFloors] = useState(false);
    return (
        <main
            className="
                relative
                h-[100vh]
                w-full
                overflow-hidden
                bg-zinc-100
            "
        >
            <div
                className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                "
            >

                {/* BOTÓN PISOS */}

                <div
                    className="
                        absolute
                        right-1
                        z-30
                        mt-15
                        lg:right-20
                    "
                >

                    <button
                        onClick={() =>
                            setShowFloors(!showFloors)
                        }
                        className="
                            flex
                            w-20
                            items-center
                            justify-center
                            gap-1
                            rounded-lg
                            bg-white
                            p-1.5
                            text-base
                            text-slate-800
                            shadow-xl
                            transition
                            hover:bg-slate-50
                            md:px-2
                            md:py-2
                        "
                    >
                        <span>
                            PISOS
                        </span>

                        <span
                            className={`
                                transition-transform
                                duration-200
                                ${
                                    showFloors
                                        ? "rotate-180"
                                        : ""
                                }
                            `}
                        >
                            <MdKeyboardArrowDown />
                        </span>
                    </button>


                    {/* LISTA DE PISOS */}

                    {showFloors && (
                        <div
                            className="
                                absolute
                                right-0
                                mt-2
                                w-15
                                rounded-lg
                                border
                                border-slate-100
                                bg-white
                                p-1
                                shadow-2xl
                            "
                        >

                            {project.pisos.map((piso) => (

                                <button
                                    key={piso.id}
                                    onClick={() => {
                                        setSelectedFloor(piso);
                                        setShowFloors(false);
                                    }}
                                    className={`
                                        w-full
                                        rounded-lg
                                        px-1
                                        py-1
                                        text-center
                                        text-base
                                        transition
                                        ${
                                            selectedFloor.id === piso.id
                                                ? "bg-slate-900 text-white"
                                                : "hover:bg-slate-100"
                                        }
                                    `}
                                >
                                    {piso.numero}
                                </button>

                            ))}

                        </div>
                    )}

                </div>


                {/* PLANO */}

                <section
                    className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                    "
                >

                    <FloorPlan
                        project={project}
                        floor={selectedFloor}
                    />

                </section>

            </div>

        </main>

    );

}

export default Recorrido;