import { useState } from "react";
import DepartmentMap from "./DepartmentMap";

function FloorPlan({ project, floor }) {

    // IMAGEN CORRESPONDIENTE AL PISO SELECCIONADO
    const floorImage = floor.imagePiso;

    const departmentPaths =
        project.planos.departmentPaths;

    const [imageRatio, setImageRatio] = useState(null);

    const handleImageLoad = (event) => {

        const {
            naturalWidth,
            naturalHeight,
        } = event.target;

        setImageRatio(
            naturalWidth / naturalHeight
        );
    };

    return (
        <div
            className="
                relative
                h-full
                w-full
                overflow-x-auto
                overflow-y-hidden
            "
        >

            <div
                className="
                    relative
                    flex
                    h-full
                    min-w-full
                    w-max
                    items-center
                    justify-center
                "
            >

                <div
                    className="
                        relative
                        h-full
                        w-auto
                        shrink-0
                    "
                    style={{
                        aspectRatio: imageRatio || "1 / 1",
                    }}
                >

                    {/* PLANO DEL PISO */}

                    <img
                        src={floorImage}
                        alt={`Plano del piso ${floor.numero}`}
                        onLoad={handleImageLoad}
                        className="
                            block
                            h-full
                            w-auto
                            max-w-none
                        "
                    />


                    {/* DEPARTAMENTOS */}

                    <DepartmentMap
                        project={project}
                        floor={floor}
                        departmentPaths={departmentPaths}
                    />

                </div>

            </div>

        </div>
    );
}

export default FloorPlan;