import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { PiToilet } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";

function DepartmentInfo({ project, department, floor}) {
    const whatsappMessage = `Hola, estoy interesada en el departamento ${department.codigo} del piso ${floor.numero}°. Me podria brindar mas información.`;
    const whatsappUrl = `${project.whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`;
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
                z-100

                left-0
                top-0
                right-0
                bottom-0
                w-full
                bg-white/95
                backdrop-blur-sm
                overflow-y-auto
                p-3
                pt-30

                md:right-auto
                md:bottom-0
                md:left-0
                md:h-auto
                md:w-70
                md:p-6
                md:bg-white/95
                md:z-110
                md:flex
                md:flex-col
                md:pt-40
            "
        >

            {/* =========================
                IDENTIFICACIÓN
            ========================= */}
             <div className="p-3 mb-2">
                <h2
                    className="
                        text-xl
                        font-semibold
                        leading-tight
                        text-slate-900
                    "
                >
                    Departamento {department.codigo}
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "
                >
                    {department.tipo}
                </p>

                <p
                    className="
                        mt-1
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
                        mt-3
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
            <div className="my-2 border-t border-slate-200">
                <div className="p-3">
                    <h3
                        className="
                            text-base
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
                                <span className="text-sm text-slate-500">
                                    Superficie total
                                </span>
                            </div>
                            <span className="text-sm text-slate-500">
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
                                <span className="text-slate-700">
                                    <HiOutlineSquare3Stack3D />
                                </span>

                                <span className="text-sm text-slate-500">
                                    Piso
                                </span>
                            </div>
                            <span className="text-sm text-slate-500">
                                {floor.numero}°
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="my-2 border-t border-slate-200">
                <div className="p-3">
                    <h3
                        className="
                            text-base
                            font-semibold
                            text-slate-800
                            mb-2
                        "
                    >
                        Distribución
                    </h3>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-slate-700">
                                    <IoBedOutline />
                                </span>
                                <span className="text-sm text-slate-500">
                                    Dormitorios
                                </span>
                            </div>
                            <span className="text-sm text-slate-500">
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
                                <span className="text-slate-700">
                                    <PiToilet />
                                </span>
                                <span className="text-sm text-slate-500">
                                    Baños
                                </span>
                            </div>
                            <span className="text-sm text-slate-500">
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
                                <span className="text-slate-700">
                                    <MdOutlineKitchen />
                                </span>
                                <span className="text-sm text-slate-500">
                                    Cocina
                                </span>
                            </div>
                            <span className="text-sm text-slate-500">
                                {department.cocina ?? 1}
                            </span>
                        </div>
                    </div>
            </div>
            <div
                className="
                    flex
                    flex-col
                    mt-auto
                    border-slate-200
                "
            >
                <a
                    href={whatsappUrl}
                    className="
                        flex
                        gap-2
                        m-2
                        items-center
                        justify-center
                        rounded-full
                        bg-lime-500
                        p-2
                        text-base
                        text-white
                        transition
                        hover:bg-slate-700
                        animate-pulse
                        shadow-lg
                    "
                >
                    <FaWhatsapp className="size-5"/>Solicitar información
                </a>
                <a
                    href={project.brochure}
                    download="VERTICE TOWER 2026"
                    className="
                        flex
                        gap-2
                        m-2
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        p-2
                        text-base
                        text-white
                        transition
                        hover:bg-slate-700
                        shadow-lg
                    "
                >
                    <VscFilePdf className="size-5" />
                    Descargar PDF
                </a>
            </div>
        </aside>
    );
}
export default DepartmentInfo;