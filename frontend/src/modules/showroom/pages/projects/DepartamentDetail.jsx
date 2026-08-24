import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import projects from "../../data/projectsData";
import DepartmentInfo from "../../components/project/Departament/DepartamentInfo";
import DepartmentViewSelector from "../../components/project/Departament/DepartamentViewSelector";
import DepartmentViewer from "../../components/project/Departament/departamentViewer";
import { LuPanelLeftOpen } from "react-icons/lu";
import { LuPanelRightOpen } from "react-icons/lu";

function DepartmentDetail() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    const dragging = useRef(false);
    const startTouch = useRef({
        x: 0,
        y: 0
    });
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        dragging.current = true;
        startTouch.current = {
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        };
    };
    const handleTouchMove = (e) => {
        if (!dragging.current) return;
        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - startTouch.current.x,
            y: touch.clientY - startTouch.current.y
        });
    };
    const handleTouchEnd = () => {
        dragging.current = false;
};
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
                h-[100vh]
                overflow-hidden
            "
        >
            <div
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
                    <button
                        onClick={() =>
                            navigate(`/portal-comercial/${slug}/recorrido`)
                        }

                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}

                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`
                        }}

                        className="
                            group
                            fixed
                            right-4
                            bottom-20
                            md:bottom-4
                            z-80
                            w-40
                            h-auto
                            rounded-lg
                            overflow-hidden
                            shadow-2xl
                            transition-none
                            md:transition-transform
                            md:duration-300
                            origin-bottom-right

                            md:w-60
                            md:hover:scale-180

                            touch-none
                            cursor-grab
                            active:cursor-grabbing
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
                            text-xs
                            text-white
                            text-center
                            transition-opacity
                            duration-300
                            group-hover:opacity-0
                            md:text-sm
                        ">Ubicación en Piso</span>
                    </button>
                    <div
                        className={`
                            absolute
                            left-0
                            top-0
                            w-[280px]
                            h-full
                            z-100

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
                            project={project}
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
                        left-0
                        top-15
                        z-130
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-r-full
                        bg-teal-500
                        text-white
                        shadow-xl
                        transition
                        hover:bg-slate-700

                        md:left-9
                        md:top-18
                        md:h-12
                        md:w-12
                        md:rounded-full
                    "
                >
                    {showInfo ? <LuPanelRightOpen className="size-6"/> : <LuPanelLeftOpen className="size-6"/>}
                </button>
            </div>
        </main>

    );
}

export default DepartmentDetail;