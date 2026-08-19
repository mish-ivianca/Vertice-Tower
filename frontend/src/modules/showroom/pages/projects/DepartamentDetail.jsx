import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../../data/projectsData";
import DepartmentInfo from "../../components/project/Departament/DepartamentInfo";
import DepartmentViewSelector from "../../components/project/Departament/DepartamentViewSelector";
import DepartmentViewer from "../../components/project/Departament/departamentViewer";
import { BsDoorClosed } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";

function DepartmentDetail() {
    const navigate = useNavigate();
    const { slug, codigo } = useParams();
    const [view, setView] = useState("3d");
    const [showInfo, setShowInfo] = useState(true);
    const project = projects.find(
        item => item.slug === slug
    );

    if (!project) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        Proyecto no encontrado
                    </h1>
                </div>
            </main>
        );
    }

    const floor = project.pisos.find(
        piso =>
            piso.departamentos.some(
                departamento =>
                    departamento.codigo === codigo
            )
    );

    const department = project.pisos
        .flatMap(
            piso => piso.departamentos
        )
        .find(
            departamento =>
                departamento.codigo === codigo
        );
        
    if (!department) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        Departamento no encontrado
                    </h1>
                    <p className="mt-3 text-slate-500">
                        El departamento {codigo} no existe.
                    </p>
                </div>
            </main>
        );
    }
    return (
        <main
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-slate-50
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
                        relative
                        w-full
                        h-full
                        overflow-hidden
                    "
                >
                    <button
                        onClick={() => navigate(`/portal-comercial/${slug}/recorrido`)}
                        className="
                            group
                            fixed
                            right-4
                            bottom-4
                            z-30
                            w-60
                            h-auto
                            rounded-lg
                            overflow-hidden
                            shadow-2xl
                            transition-transform
                            duration-300
                            origin-bottom-right
                            hover:scale-180
                        "
                    >
                        <img 
                            src={department.frame}
                            alt="Abrir"
                            className="
                                w-full 
                                h-full
                                object-cover
                            " 
                        />
                        <span className="
                            absolute
                            bottom-0
                            left-0
                            w-full
                            bg-black/80
                            px-2
                            py-1
                            text-sm
                            text-white
                            text-center
                            transition-opacity
                            duration-300
                            group-hover:opacity-0
                        ">Ubicación en Piso</span>
                    </button>
                    <div
                        className={`
                            absolute
                            left-0
                            top-0
                            w-[280px]
                            h-full
                            z-10

                            shadow-[8px_0_18px_-10px_rgba(0,0,0,0.35)]

                            transition-all
                            duration-500
                            ease-out

                            ${
                                showInfo
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                            }
                        `}
                    >
                        <DepartmentInfo
                            department={department}
                            floor={floor}
                        />
                    </div>

                    <section
                        className={`
                        relative
                        h-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        transition-[margin]
                        duration-500
                        ease-out
                        ${
                            showInfo
                                ? "ml-[280px]"
                                : "ml-0"
                        }
                    `}
                    >
                        <DepartmentViewer
                            view={view}
                            department={department}
                        />
                        <DepartmentViewSelector
                            view={view}
                            setView={setView}
                        />
                    </section>

                </div>

                <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="
                        fixed
                        left-6
                        top-21
                        z-30
                        h-8
                        w-8
                        p-1
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-teal-500
                        text-white
                        shadow-xl
                        hover:bg-slate-700
                        transition
                    "
                >
                    {showInfo ? <BsDoorClosed /> : <BsDoorOpen />}
                </button>
            </div>
        </main>

    );
}

export default DepartmentDetail;