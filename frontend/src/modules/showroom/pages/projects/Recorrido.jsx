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
            style={{
                backgroundColor: selectedFloor.colorFondo,
            }}
            className="
                relative
                w-full
                h-[100vh]
                overflow-hidden
            "
        >
            <div
                className="
                    relative
                    w-full
                    h-full
                    overflow-hidden
                "
            >
                <div
                    className="
                        absolute
                        right-1
                        lg:right-20
                        z-30
                        mt-15
                    "
                >
                    <button
                        onClick={() =>
                            setShowFloors(!showFloors)
                        }

                        className="
                            flex
                            items-center
                            justify-center
                            w-20
                            gap-1
                            rounded-lg
                            bg-white
                            p-1.5
                            md:px-2
                            md:py-2
                            shadow-xl
                            text-slate-800
                            hover:bg-slate-50
                            transition
                            text-base
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
                    {showFloors && (
                        <div
                            className="
                                absolute
                                right-0
                                mt-2
                                w-15
                                rounded-lg
                                bg-white
                                p-1
                                shadow-2xl
                                border
                                border-slate-100
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
                                        transition
                                        text-base
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
                <section
                    className="
                        w-full
                        h-full
                        flex
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