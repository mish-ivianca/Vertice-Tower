import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DepartmentMap({
    floor,
    project,
    departmentPaths = [],
}) {

    const mapPosition = project.planos?.departmentMap;
    const navigate = useNavigate();
    const [hoveredDepartment, setHoveredDepartment] = useState(null);

    const getDepartment = (codigo) => {

        return floor.departamentos.find(
            department =>
                department.codigo === codigo
        );

    };


    const getDepartmentColor = (estado) => {

        switch (estado) {

            case "Disponible":
                return "#22c55e";

            case "Reservado":
                return "#eab308";

            case "Vendido":
                return "#ef4444";

            default:
                return "transparent";

        }

    };


    const handleDepartmentClick = (department) => {

        if (!department) {
            return;
        }

        navigate(
            `/portal-comercial/${project.slug}/recorrido/${department.codigo}`
        );

    };

    return (

        <svg
            viewBox={mapPosition.viewBox}
            className="absolute"     
            style={{
                left: mapPosition.left,
                top: mapPosition.top,
                width: mapPosition.width,
                height: "auto",
        }}
        >

            {departmentPaths.map((item) => {

                const department =
                    getDepartment(item.codigo);

                return (
                    <path
                        key={item.codigo}
                        d={item.path}

                        fill={
                            hoveredDepartment === item.codigo
                                ? getDepartmentColor(
                                    department?.estado
                                )
                                : "transparent"
                        }

                        fillOpacity={
                            hoveredDepartment === item.codigo
                                ? "0.65"
                                : "0"
                        }

                        stroke="black"

                        className="
                            cursor-pointer
                            transition-all
                            duration-200
                        "

                        onMouseEnter={() =>
                            setHoveredDepartment(item.codigo)
                        }

                        onMouseLeave={() =>
                            setHoveredDepartment(null)
                        }

                        onClick={() =>
                            handleDepartmentClick(
                                department
                            )
                        }
                    />
                );

            })}

        </svg>

    );

}

export default DepartmentMap;