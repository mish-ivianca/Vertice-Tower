import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

function Historial() {
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sinPermiso, setSinPermiso] = useState(false);

    const cargarHistorial = async () => {
        try {
            const response = await apiFetch(
                "/proyectos/historial/"
            );

            if (response.status === 403) {
                setSinPermiso(true);
                return;
            }

            if (!response.ok) {
                throw new Error(
                    "No se pudo cargar el historial"
                );
            }

            const data = await response.json();
            setHistorial(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarHistorial();
    }, []);

    if (sinPermiso) {
        return (
            <main className="
                flex
                min-h-screen
                flex-col
                items-center
                justify-center
                gap-2
            ">
                <h1 className="text-2xl font-semibold">
                    Acceso denegado
                </h1>

                <p className="text-gray-500">
                    No tienes permisos para acceder al historial.
                </p>
            </main>
        );
    }

    if (loading) {
        return (
            <main className="
                flex
                min-h-screen
                items-center
                justify-center
            ">
                <p>Cargando historial...</p>
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
                        Historial
                    </h1>

                    <p className="
                        mt-1
                        text-base
                        md:text-lg
                        text-gray-500
                    ">
                        Registro de cambios de estados y precios
                    </p>
                </div>
            </header>

            {/* TABLA */}

            <div className="
                mx-auto
                max-w-7xl
                p-6
            ">
                <div className="
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-sm
                ">
                    <div className="overflow-x-auto">

                        <table className="
                            w-full
                            min-w-[800px]
                        ">

                            <thead className="
                                bg-[var(--color-naranja)]/80
                                text-stone-50
                                text-center
                            ">
                                <tr>

                                    <th className="table-header">
                                        Departamento
                                    </th>

                                    <th className="table-header">
                                        Piso
                                    </th>

                                    <th className="table-header">
                                        Tipo de cambio
                                    </th>

                                    <th className="table-header">
                                        Cambio
                                    </th>

                                    <th className="table-header">
                                        Usuario
                                    </th>

                                    <th className="table-header">
                                        Fecha
                                    </th>

                                </tr>
                            </thead>

                            <tbody className="
                                divide-y
                                divide-black/10
                            ">

                                {historial.map((registro) => (

                                    <tr
                                        key={`${registro.tipo}-${registro.id}`}
                                        className="
                                            text-center
                                            transition
                                            hover:bg-zinc-50
                                        "
                                    >

                                        {/* DEPARTAMENTO */}

                                        <td className="table-body">
                                            {registro.unidad_codigo}
                                        </td>

                                        {/* PISO */}

                                        <td className="table-body">
                                            {registro.numero_piso}°
                                        </td>

                                        {/* TIPO */}

                                        <td className="table-body">

                                            {registro.tipo === "estado" ? (
                                                <span className="
                                                    rounded-full
                                                    bg-blue-100
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-medium
                                                    text-blue-700
                                                ">
                                                    Estado
                                                </span>
                                            ) : (
                                                <span className="
                                                    rounded-full
                                                    bg-amber-100
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-medium
                                                    text-amber-700
                                                ">
                                                    Precio
                                                </span>
                                            )}

                                        </td>

                                        {/* CAMBIO */}

                                        <td className="table-body">

                                            {registro.tipo === "estado" ? (

                                                <div className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                ">

                                                    <span className="
                                                        rounded-full
                                                        bg-zinc-100
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        font-medium
                                                        text-gray-600
                                                    ">
                                                        {
                                                            registro.estado_anterior_nombre
                                                        }
                                                    </span>

                                                    <span className="
                                                        text-gray-400
                                                    ">
                                                        →
                                                    </span>

                                                    <span
                                                        className={`
                                                            rounded-full
                                                            px-3
                                                            py-1
                                                            text-xs
                                                            font-medium
                                                            ${
                                                                registro.estado_nuevo_nombre ===
                                                                "Disponible"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-red-100 text-red-700"
                                                            }
                                                        `}
                                                    >
                                                        {
                                                            registro.estado_nuevo_nombre
                                                        }
                                                    </span>

                                                </div>

                                            ) : (

                                                <div className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                ">

                                                    <span className="
                                                        text-gray-500
                                                    ">
                                                        {Number(
                                                            registro.precio_anterior
                                                        ).toLocaleString(
                                                            "es-BO",
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </span>

                                                    <span className="
                                                        text-gray-400
                                                    ">
                                                        →
                                                    </span>

                                                    <span className="
                                                        font-medium
                                                    ">
                                                        {Number(
                                                            registro.precio_nuevo
                                                        ).toLocaleString(
                                                            "es-BO",
                                                            {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </span>

                                                </div>

                                            )}

                                        </td>

                                        {/* USUARIO */}

                                        <td className="table-body">
                                            {registro.usuario_nombre}
                                        </td>

                                        {/* FECHA */}

                                        <td className="table-body">
                                            {new Date(
                                                registro.fecha
                                            ).toLocaleString(
                                                "es-BO"
                                            )}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        </main>
    );
}

export default Historial;
