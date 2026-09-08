import Container from "../../../shared/components/container/Container";
import { getNosotros } from "../../../services/api";
import TeamCard from "../components/nosotros/TeamCard";
import TitleCard from "../components/nosotros/titleCard";
import { useState, useEffect } from "react";
import Section from "../../../shared/components/section/Section";
import image1 from "../images/nosotros/1.png";
import image2 from "../images/nosotros/2.png";


function Nosotros() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function cargarNosotros() {
            try {
                const datas = await getNosotros();
                setData(datas);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        cargarNosotros();
    }, []);
    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>Cargando nosotros...</p>
            </main>
        );
    }
    if (!data) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>No se pudo cargar la información de nosotros.</p>
            </main>
        );
    }

    return (
        <main
            className="
                w-full
                bg-slate-50
        ">
            <Container>
                <Section>
                    <TitleCard
                        image={image1}
                        label="Proyecto"
                        title="Espacios para disfrutar"
                        highlight="cada momento"
                    />
                    <section
                        className="
                            mt-10
                            grid
                            gap-5
                            md:grid-cols-2
                        "
                    >

                        {/* MISIÓN */}

                        <article
                            className="
                                p-6
                                md:p-10
                            "
                        >

                            <span
                                className="
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Nuestro propósito
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Misión
                            </h2>

                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    text-sm
                                    leading-relaxed
                                    text-gray-500
                                    md:text-base
                                "
                            >
                                {data.nosotros.mision}
                            </p>

                        </article>


                        {/* VISIÓN */}

                        <article
                            className="
                                p-6
                                md:p-10
                            "
                        >

                            <span
                                className="
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Hacia dónde vamos
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Visión
                            </h2>

                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    text-sm
                                    leading-relaxed
                                    text-gray-500
                                    md:text-base
                                "
                            >
                                {data.nosotros.vision}
                            </p>

                        </article>

                    </section>


                    {/* =====================================
                        EQUIPO
                    ====================================== */}
                    <section className="mt-16 md:mt-20 px-10">

                        <div
                            className="
                                mb-10
                                md:mb-12
                            "
                        >

                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Las personas detrás
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Nuestro equipo
                            </h2>

                        </div>


                        {/* FICHAS */}

                        <div
                            className="
                                grid
                                gap-12
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                            "
                        >

                            {data.equipo.map((person) => (

                                <TeamCard
                                    key={person.id}
                                    person={person}
                                />

                            ))}

                        </div>

                    </section>
                    <TitleCard
                        image={image2}
                        label="Comprometidos"
                        title="PARA BRINDARTE"
                        highlight="UNA EXPERIENCIA INOLVIDABLE"
                    />
                    <section
                        className="
                           my-16 md:my-20 px-10
                        "
                    >

                        <div className="mb-10">

                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-gray-500
                                "
                            >
                                Lo que nos representa
                            </span>

                            <h2
                                className="
                                    mt-2
                                    text-3xl
                                    font-semibold
                                    uppercase
                                    md:text-4xl
                                "
                            >
                                Nuestros valores
                            </h2>

                        </div>


                        <div
                            className="
                                grid
                                gap-12
                                sm:grid-cols-2
                                lg:grid-cols-4
                            "
                        >

                            {[
                                "Calidad",
                                "Innovación",
                                "Compromiso",
                                "Transparencia",
                            ].map((valor) => (

                                <article
                                    key={valor}
                                    className="
                                        border-l
                                        border-black/10
                                        py-5
                                    "
                                >

                                    <h3
                                        className="
                                            text-lg
                                            font-semibold
                                            uppercase
                                            pl-6
                                        "
                                    >
                                        {valor}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-relaxed
                                            text-gray-500
                                            pl-6
                                        "
                                    >
                                        Trabajamos cada detalle con
                                        responsabilidad y dedicación.
                                    </p>

                                </article>

                            ))}
                        </div>
                    </section>
                </Section>
            </Container>
        </main>
    );
}
export default Nosotros;