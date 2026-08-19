import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { PiToilet } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";
import projects from "../../../data/projectsData";
import { FaWhatsapp } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";

function DepartmentInfo({ department, floor}) {
    const getStatusStyle = (estado) => {
        switch (estado) {
            case "Disponible":
                return "bg-green-100 text-green-700";
            case "Reservado":
                return "bg-yellow-100 text-yellow-700";
            case "Vendido":
                return "bg-red-100 text-red-700";
            default:
                return "bg-slate-100 text-slate-600";
        }
    };
    return (
        <aside
            className="
                absolute
                top-10
                w-70
                h-auto
                p-6
                z-20
            "
        >

            {/* =========================
                IDENTIFICACIÓN
            ========================= */}
             <div className="px-3 pt-2 mb-6">
                <h2
                    className="
                        text-lg
                        font-semibold
                        leading-tight
                        text-slate-900
                    "
                >
                    Departamento {department.codigo}
                </h2>

                <p
                    className="
                        mt-0.5
                        text-xs
                        text-slate-500
                    "
                >
                    {department.tipo}
                </p>

                <p
                    className="
                        mt-0.5
                        text-2xl
                        font-bold
                        leading-tight
                        text-slate-900
                    "
                >
                    {department.precio?.toLocaleString("es-BO")} BOB.
                </p>
                <span
                    className={`
                        inline-block
                        rounded-full
                        px-4
                        py-1
                        mt-2
                        text-sm
                        font-medium
                        ${getStatusStyle(
                            department.estado
                        )}
                    `}
                >
                    {department.estado}
                </span>

            </div>

                  

            {/* =========================
                INFORMACIÓN
            ========================= */}
            <div className="mt-2 border-t border-slate-200">

                <div className="p-3">

                    <h3
                        className="
                            text-xs
                            font-semibold
                            text-slate-800
                            mb-2
                        "
                    >
                        Superficie
                    </h3>      
                    <div
                        className="
                            mt-1
                            divide-y
                            divide-slate-100
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-700">
                                    <LiaRulerCombinedSolid />
                                </span>
                                <span className="text-xs text-slate-500">
                                    Superficie total
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                {department.superficie} m²
                            </span>
                        </div>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-700">
                                    <HiOutlineSquare3Stack3D />
                                </span>

                                <span className="text-xs text-slate-500">
                                    Piso
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                {floor.numero}°
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-slate-200">
                <div className="p-3">
                    <h3
                        className="
                            text-xs
                            font-semibold
                            text-slate-800
                            mb-2
                        "
                    >
                        Distribución
                    </h3>
                    <div className="divide-y divide-slate-100">
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-700">
                                    <IoBedOutline />
                                </span>
                                <span className="text-xs text-slate-500">
                                    Dormitorios
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                {department.dormitorios}
                            </span>
                        </div>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-700">
                                    <PiToilet />
                                </span>
                                <span className="text-xs text-slate-500">
                                    Baños
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                {department.banos}
                            </span>
                        </div>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-700">
                                    <MdOutlineKitchen />
                                </span>
                                <span className="text-xs text-slate-500">
                                    Cocina
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                {department.cocina ?? 1}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    flex
                    flex-col
                    border-t
                    border-slate-200
                    py-3
                "
            >
                <button
                    className="
                        flex
                        gap-2
                        my-2
                        items-center
                        justify-center
                        rounded-full
                        bg-lime-500
                        p-2
                        text-[10px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-slate-700
                        animate-pulse
                    "
                >
                    <FaWhatsapp className="size-4"/>Solicitar información
                </button>
                <button
                    className="
                        flex
                        gap-2
                        my-2
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        p-2
                        text-[10px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-slate-700
                    "
                >
                    <VscFilePdf className="size-4"/>Descargar PDF
                </button>
            </div>
        </aside>
    );
}
export default DepartmentInfo;