import { useEffect, useMemo, useState } from "react";
import { apiFetch } from "../services/api";
import { useOutletContext } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";

function Dashboard() {
    const { proyecto, usuario } = useOutletContext();
    const [unidades, setUnidades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtroEstado, setFiltroEstado] = useState("todos");
    const [filtroPiso, setFiltroPiso] = useState("todos");
    const [unidadSeleccionada, setUnidadSeleccionada] = useState(null);
    const [modal, setModal] = useState(null);
    const [nuevoPrecio, setNuevoPrecio] = useState("");

    const cargarUnidades = async () => {
        try {
            const response = await apiFetch(
                "/proyectos/unidades/"
            );

            if (!response.ok) {
                throw new Error("No se pudieron cargar las unidades");
            }

            const data = await response.json();

            const unidadesVenta = data.filter(
                unidad =>
                    unidad.tipoUnidad?.categoriaNombre !== "AREA COMUN"
            );

            setUnidades(unidadesVenta);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarUnidades();
    }, []);

    const cambiarEstado = async (unidad, nuevoEstado) => {
        try {
            const response = await apiFetch(
                `/proyectos/unidades/${unidad.id}/estado/`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        estado: nuevoEstado,
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("No se pudo cambiar el estado");
            }
            await cargarUnidades();
            setModal(null);
            setUnidadSeleccionada(null);
        } catch (error) {
            console.error(error);
        }
    };

    const cambiarPrecio = async (unidad, nuevoPrecio) => {

        const precioNumerico = Number(nuevoPrecio);

        if (
            !Number.isFinite(precioNumerico) ||
            precioNumerico < 0
        ) {
            return;
        }

        try {
            const response = await apiFetch(
                `/proyectos/unidades/${unidad.id}/precio/`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        precio: precioNumerico,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("No se pudo cambiar el precio");
            }

            await cargarUnidades();

            setModal(null);
            setUnidadSeleccionada(null);
            setNuevoPrecio("");

        } catch (error) {
            console.error(error);
        }
    };

    const pisos = useMemo(() => {
        return [...new Set(
            unidades.map((unidad) => unidad.numeroPiso)
        )];
    }, [unidades]);

    const unidadesFiltradas = useMemo(() => {
        return unidades.filter((unidad) => {

            const coincideEstado =
                filtroEstado === "todos" ||
                unidad.estado === Number(filtroEstado);

            const coincidePiso =
                filtroPiso === "todos" ||
                unidad.numeroPiso === Number(filtroPiso);

            return coincideEstado && coincidePiso;
        });
    }, [unidades, filtroEstado, filtroPiso]);

    const total = unidades.length;

    const disponibles = unidades.filter(
        (unidad) => unidad.estado === 1
    ).length;

    const vendidas = unidades.filter(
        (unidad) => unidad.estado === 2
    ).length;
    const resumen = [
        {
            label: "Total",
            value: total,
        },
        {
            label: "Disponibles",
            value: disponibles,
            valueClass: "text-green-600",
        },
        {
            label: "Vendidas",
            value: vendidas,
            valueClass: "text-red-600",
        },
    ];

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>Cargando unidades...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white pt-25">
            <header className="
                px-6
                py-5
            ">
                <div className="
                    mx-auto
                    max-w-7xl
                ">
                    <h1 className="
                        text-3xl
                        font-semibold
                        uppercase
                    ">
                        {proyecto?.nombreProyecto}
                    </h1>

                    <p className="
                        mt-1
                        text-base
                        md:text-lg
                        text-gray-500
                    ">
                        Gestión de unidades
                    </p>
                </div>
            </header>

            <div className="
                mx-auto
                max-w-7xl
                p-6
            ">
                {/* RESUMEN */}

                <div className="
                    grid
                    gap-4
                    md:grid-cols-3
                ">
                    {resumen.map((item) => (
                        <div
                            key={item.label}
                            className="
                                rounded-2xl
                                bg-stone-50
                                p-5
                                shadow-md
                            "
                        >
                            <span className="
                                text-sm
                                uppercase
                                tracking-widest
                                text-gray-500
                            ">
                                {item.label}
                            </span>

                            <p
                                className={`
                                    mt-2
                                    text-xl
                                    lg:text-3xl
                                    font-semibold
                                    ${item.valueClass ?? ""}
                                `}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FILTROS */}

                <div className="
                    mt-8
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    bg-white
                    p-5
                    shadow-sm
                    md:flex-row
                ">

                    <div className="flex-1">
                        <label className="
                            mb-2
                            block
                            text-xs
                            uppercase
                            tracking-widest
                            text-gray-500
                        ">
                            Estado
                        </label>

                        <select
                            value={filtroEstado}
                            onChange={(event) =>
                                setFiltroEstado(event.target.value)
                            }
                            className="
                                w-full
                                rounded-lg
                                border
                                border-black/10
                                bg-zinc-50
                                px-4
                                py-3
                                text-sm
                                outline-none
                            "
                        >
                            <option value="todos">
                                Todos
                            </option>

                            <option value="1">
                                Disponible
                            </option>

                            <option value="2">
                                Vendido
                            </option>
                        </select>
                    </div>


                    <div className="flex-1">
                        <label className="
                            mb-2
                            block
                            text-xs
                            uppercase
                            tracking-widest
                            text-gray-500
                        ">
                            Piso
                        </label>

                        <select
                            value={filtroPiso}
                            onChange={(event) =>
                                setFiltroPiso(event.target.value)
                            }
                            className="
                                w-full
                                rounded-lg
                                border
                                border-black/10
                                bg-zinc-50
                                px-4
                                py-3
                                text-sm
                                outline-none
                            "
                        >
                            <option value="todos">
                                Todos los pisos
                            </option>

                            {[...pisos]
                            .sort((a, b) => a - b)
                            .map((piso) => (
                                <option
                                    key={piso}
                                    value={piso}
                                >
                                    {piso}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className="
                    mt-6
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-sm
                ">

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead className="bg-[var(--color-naranja)]/80 text-stone-50 text-center">
                                <tr>
                                    <th className="table-header">
                                        Piso
                                    </th>
                                    <th className="table-header">
                                        Departamento
                                    </th>
                                    <th className="table-header">
                                        Tipo
                                    </th>
                                    <th className="table-header">
                                        Precio
                                    </th>
                                    <th className="table-header">
                                        Estado
                                    </th>
                                    <th className="table-header">
                                        Acción
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/10">
                                {[...unidadesFiltradas]
                                    .sort((a, b) => {
                                        if (a.numeroPiso !== b.numeroPiso) {
                                            return a.numeroPiso - b.numeroPiso;
                                        }
                                        return a.tipoUnidad.codigo.localeCompare(
                                            b.tipoUnidad.codigo
                                        );
                                    })
                                    .map((unidad) => (
                                    <tr
                                        key={unidad.id}
                                        className="transition hover:bg-zinc-50 text-center"
                                    >
                                        <td className="table-body">
                                            {unidad.numeroPiso}
                                        </td>

                                        <td className="table-body">
                                            {unidad.tipoUnidad.nombre}
                                        </td>

                                        <td className="table-body">
                                            {unidad.tipoUnidad.tipo}
                                        </td>
                                        <td className="table-body">
                                            {unidad.precio
                                                ? `${Number(unidad.precio).toLocaleString("es-BO", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })} ${unidad.tipoMoneda}`
                                                : "—"
                                            }
                                        </td>
                                        <td className="table-body">
                                            <span className={`
                                                inline-flex
                                                rounded-full
                                                px-3
                                                py-1
                                                text-xs
                                                font-medium
                                                ${
                                                    unidad.estado === 1
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }
                                            `}>
                                                {unidad.estado === 1
                                                    ? "Disponible"
                                                    : "Vendido"
                                                }
                                            </span>

                                        </td>
                                        <td className="table-body">
                                            <div className="
                                                flex
                                                justify-center
                                                gap-2
                                            ">
                                                <button
                                                    onClick={() => {
                                                        setUnidadSeleccionada(unidad);
                                                        setModal("estado");
                                                    }}
                                                    className="
                                                        flex
                                                        gap-1
                                                        items-center
                                                        rounded-full
                                                        border
                                                        bg-blue-500
                                                        text-slate-100
                                                        px-4
                                                        py-2
                                                        text-xs
                                                        font-medium
                                                        tracking-wide
                                                        transition
                                                        hover:bg-slate-900
                                                    "
                                                >
                                                    <CiEdit className="size-4"/> Editar estado
                                                </button>
                                                {usuario?.groups?.includes("ADMINISTRADOR") && (
                                                    <button
                                                        onClick={() => {
                                                            setUnidadSeleccionada(unidad);
                                                            setNuevoPrecio(unidad.precio ?? "");
                                                            setModal("precio");
                                                        }}
                                                        className="
                                                            flex
                                                            gap-1
                                                            items-center
                                                            rounded-full
                                                            border
                                                            bg-green-600
                                                            text-slate-100
                                                            px-4
                                                            py-2
                                                            text-xs
                                                            font-medium
                                                            tracking-wide
                                                            transition
                                                            hover:bg-slate-900
                                                        "
                                                    >
                                                        <MdOutlineAttachMoney className="size-4"/> Editar precio
                                                    </button>
                                                )}
                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
            {modal && unidadSeleccionada && (
                <div className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-black/40
                    backdrop-blur-sm
                    px-4
                ">
                    <div className="
                        w-full
                        max-w-md
                        rounded-2xl
                        bg-white
                        p-6
                        shadow-2xl
                    ">

                        {/* ESTADO */}

                        {modal === "estado" && (
                            <>
                                <h2 className="text-xl font-semibold">
                                    Editar estado
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {unidadSeleccionada.tipoUnidad.nombre}
                                </p>

                                <div className="
                                    mt-6
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">
                                    <button
                                        onClick={() =>
                                            cambiarEstado(
                                                unidadSeleccionada,
                                                1
                                            )
                                        }
                                        className="
                                            rounded-xl
                                            border
                                            border-green-200
                                            bg-green-50
                                            px-4
                                            py-4
                                            text-sm
                                            font-medium
                                            text-green-700
                                            transition
                                            hover:bg-green-100
                                        "
                                    >
                                        Disponible
                                    </button>

                                    <button
                                        onClick={() =>
                                            cambiarEstado(
                                                unidadSeleccionada,
                                                2
                                            )
                                        }
                                        className="
                                            rounded-xl
                                            border
                                            border-red-200
                                            bg-red-50
                                            px-4
                                            py-4
                                            text-sm
                                            font-medium
                                            text-red-700
                                            transition
                                            hover:bg-red-100
                                        "
                                    >
                                        Vendido
                                    </button>
                                </div>
                            </>
                        )}

                        {/* PRECIO */}

                        {modal === "precio" && (
                            <>
                                <h2 className="text-xl font-semibold">
                                    Editar precio
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {unidadSeleccionada.tipoUnidad.nombre}
                                </p>

                                <div className="mt-6">

                                    <label className="
                                        mb-2
                                        block
                                        text-xs
                                        uppercase
                                        tracking-widest
                                        text-gray-500
                                    ">
                                        Nuevo precio
                                    </label>

                                    <div className="
                                        flex
                                        items-center
                                        rounded-xl
                                        border
                                        border-black/10
                                        bg-zinc-50
                                        px-4
                                    ">
                                        <span className="text-sm text-gray-400">
                                            {unidadSeleccionada.tipoMoneda}
                                        </span>

                                        <input
                                            type="number"
                                            min="0"
                                            value={nuevoPrecio}
                                            onChange={(event) =>
                                                setNuevoPrecio(event.target.value)
                                            }
                                            className="
                                                w-full
                                                bg-transparent
                                                px-3
                                                py-3
                                                outline-none
                                            "
                                        />
                                    </div>

                                </div>

                                <div className="
                                    mt-6
                                    flex
                                    justify-end
                                    gap-3
                                ">
                                    <button
                                        onClick={() => {
                                            setModal(null);
                                            setUnidadSeleccionada(null);
                                        }}
                                        className="
                                            rounded-full
                                            bg-gray-100
                                            px-5
                                            py-2
                                            text-sm
                                            hover:bg-gray-200
                                        "
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        onClick={() => {
                                            cambiarPrecio(
                                                unidadSeleccionada,
                                                nuevoPrecio
                                            );
                                        }}
                                        className="
                                            rounded-full
                                            bg-green-600
                                            px-5
                                            py-2
                                            text-sm
                                            font-medium
                                            text-white
                                            hover:bg-green-700
                                        "
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

        </main>
    );
}

export default Dashboard;