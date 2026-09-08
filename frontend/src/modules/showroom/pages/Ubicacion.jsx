import Container from "../../../shared/components/container/container";
import { useEffect, useState } from "react";
import { getUbicacion } from "../../../services/api";
import Section from "../../../shared/components/section/section";

function Ubicacion() {

    const [ubicacion, setUbicacion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function cargarUbicacion() {
            try {
                const data = await getUbicacion();
                setUbicacion(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        cargarUbicacion();
    }, []);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>Cargando ubicación...</p>
            </main>
        );
    }

    if (!ubicacion) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>No se pudo cargar la información de ubicación.</p>
            </main>
        );
    }

    return (
<main
    className="
        relative
        min-h-screen
        w-full
        bg-white
        lg:bg-no-repeat
        lg:bg-cover
        bg-[position:calc(100%)_center]
    "
    style={{
        backgroundImage: `url(${ubicacion.imageUbicacion})`,
    }}
>
    <container
        className="
            relative
            z-10
            p-0
            m-0
            h-[100vh]
            lg:px-20
        "
    >
        <section className="p-2 m-0 lg:py-15 lg:px-10">

            <div
                className="
                    w-full
                    mt-15
                    lg:mt-0
                    p-0
                lg:grid
                lg:grid-cols-[1fr_550px]
                lg:gap-5
                "
            >

                {/* MAPA */}
                <div
                    className="
                        block
                        w-full
                        h-[85vh]
                        m-0
                        p-0
                        overflow-hidden

                        lg:w-full
                        lg:mt-15
                        lg:h-[730px]
                        rounded-2xl
                        shadow-xl
                    "
                >
                    <iframe
                        src={ubicacion.iframeUbicacion}
                        className="
                            block
                            w-full
                            h-full
                            m-0
                            p-0
                        "
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación del proyecto"
                    />
                </div>

            </div>

        </section>
    </container>
</main>
    );
}

export default Ubicacion;