import { useState } from "react";
import DepartmentMap from "./DepartmentMap";

function FloorPlan({ project, floor }) {

    const floorImage = project.planos.floorImage;

    const departmentPaths =
        project.planos.departmentPaths;

    const [imageRatio, setImageRatio] = useState(null);

    const handleImageLoad = (event) => {

        const {
            naturalWidth,
            naturalHeight
        } = event.target;

        setImageRatio(
            naturalWidth / naturalHeight
        );
    };

    return (
        <div
            className="
                relative
                w-full
                h-full
                flex
                items-center
                justify-center
                overflow-hidden
            "
        >

            <div
                className="
                    relative
                    max-w-full
                    max-h-full
                "
                style={{
                    aspectRatio: imageRatio || "1 / 1",
                }}
            >

                <img
                    src={floorImage}
                    alt={`Plano del piso ${floor.numero}`}
                    onLoad={handleImageLoad}
                    className="
                        block
                        w-full
                        h-full
                        object-contain
                    "
                />

                <DepartmentMap
                    project={project}
                    floor={floor}
                    departmentPaths={departmentPaths}
                />

            </div>

        </div>
    );
}

export default FloorPlan;