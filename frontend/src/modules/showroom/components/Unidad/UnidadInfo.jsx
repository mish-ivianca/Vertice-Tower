import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { PiToilet } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import UnidadCaracteristica from "../../components/Unidad/UnidadCaracteristica";
import { MdOutlineChair } from "react-icons/md";
import { PiWashingMachine } from "react-icons/pi";
import { TbPicnicTable } from "react-icons/tb";

function UnidadInfo({ project, unidad, floor }) {

    const tipoUnidad = unidad.tipoUnidad;

    const getStatus = (estado) => {

        switch (estado) {

            case 1:
                return {
                    nombre: "Disponible",
                    style: "bg-green-100 text-green-700",
                };

            case 2:
                return {
                    nombre: "Vendido",
                    style: "bg-red-100 text-red-700",
                };

            default:
                return {
                    nombre: "No disponible",
                    style: "bg-slate-100 text-slate-600",
                };
        }
    };

    const status = getStatus(unidad.estado);

    const whatsappMessage =
        `Hola, estoy interesada en el departamento ${tipoUnidad?.codigo} del piso ${floor.numero}°. Me podría brindar más información.`;

    const whatsappUrl =
        `${project.contacto?.whatsappLink}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

    const caracteristicas = [
        {
            icon: <IoBedOutline />,
            label: "Dormitorios",
            value: tipoUnidad?.dormitorios,
        },
        {
            icon: <PiToilet />,
            label: "Baños",
            value: tipoUnidad?.banos,
        },
        {
            icon: <MdOutlineChair />,
            label: "Sala",
            value: tipoUnidad?.sala,
        },
        {
            icon: <PiWashingMachine />,
            label: "Lavanderia",
            value: tipoUnidad?.lavanderia,
        },
        {
            icon: <MdOutlineKitchen />,
            label: "Cocina",
            value: tipoUnidad?.cocina,
        },
        {
            icon: <TbPicnicTable />,
            label: "Comedor",
            value: tipoUnidad?.comedor,
        },
    ];

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
                INFORMACIÓN PRINCIPAL
            ========================= */}

            <div className="p-3 mb-2 pt-1">

                <h2
                    className="
                        text-xl
                        font-semibold
                        leading-tight
                        text-slate-900
                    "
                >
                    {tipoUnidad?.nombre}
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-500
                        uppercase
                    "
                >
                    {tipoUnidad?.tipo}
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
                    {unidad.precio != null
                        ? Number(unidad.precio).toLocaleString("es-BO")
                        : "Consultar"
                    }

                    {unidad.precio != null && (
                        <> {unidad.tipoMoneda}</>
                    )}
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
                        ${status.style}
                    `}
                >
                    {status.nombre}
                </span>

            </div>


            {/* =========================
                SUPERFICIE
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

                    {tipoUnidad?.superficie != null && (
                        <UnidadCaracteristica
                            icon={<LiaRulerCombinedSolid />}
                            label="Superficie total"
                            value={`${tipoUnidad.superficie} m²`}
                        />
                    )}

                    <UnidadCaracteristica
                        icon={<HiOutlineSquare3Stack3D />}
                        label="Piso"
                        value={`${floor.numero}°`}
                    />

                </div>

            </div>


            {/* =========================
                DISTRIBUCIÓN
            ========================= */}

            {tipoUnidad?.categoriaNombre === "DEPARTAMENTO" && (

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

                        <div>

                            {caracteristicas
                                .filter(
                                    item =>
                                        item.value != null &&
                                        item.value != 0
                                )
                                .map((item) => (

                                    <UnidadCaracteristica
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        value={item.value}
                                    />

                                ))}

                        </div>

                    </div>

                </div>
            )}


            {/* =========================
                ACCIONES
            ========================= */}

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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            gap-2
                            m-2
                            items-center
                            justify-center
                            rounded-full
                            bg-lime-500
                            p-2
                            text-sm
                            text-white
                            transition
                            hover:bg-slate-700
                            animate-pulse
                            shadow-lg
                        "
                    >

                        <FaWhatsapp className="size-5" />

                        Solicitar información

                    </a>

                    <a
                        href={project.brochure}
                        download
                        className="
                            flex
                            gap-2
                            m-2
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            p-2
                            text-sm
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

export default UnidadInfo;