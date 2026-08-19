import { useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../../data/projectsData";
import FloorPlan from "../../components/project/Recorrido/FloorPlan";

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
                h-full
                overflow-hidden
                p-2
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
                        top-2
                        right-2
                        z-30
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
                            w-24
                            gap-2
                            rounded-full
                            bg-white
                            px-2
                            py-2
                            shadow-xl
                            font-medium
                            text-slate-800
                            hover:bg-slate-50
                            transition
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
                            ↓
                        </span>

                    </button>
                    {showFloors && (

                        <div
                            className="
                                absolute
                                right-0
                                mt-2
                                w-15
                                rounded-2xl
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
                                        rounded-xl
                                        px-1
                                        py-1
                                        text-center
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