import { useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../../../shared/components/container/container";
import PageHeader from "../../components/project/pageHeader/PageHeader";
import AmenityCard from "../../components/project/amenidades/AmenityCard";

import projects from "../../data/projectsData";
import { PiWarehouse } from "react-icons/pi";

function Amenidades() {

    const { slug } = useParams();

    const project = projects.find(
        (project) => project.slug === slug
    );

    // PROYECTO NO ENCONTRADO

    if (!project) {
        return (
            <main
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                "
            >
                <h1 className="text-3xl font-bold">
                    Proyecto no encontrado
                </h1>
            </main>
        );
    }

    const amenidades = project.amenidades;

    // SIN AMENIDADES

    if (!amenidades || amenidades.length === 0) {
        return (
            <main
                className="
                    w-full
                    bg-gradient-to-bl
                    from-zinc-300
                    to-zinc-50
                "
            >
                <Container>

                    <div className="py-12 md:py-16">

                        <h1
                            className="
                                text-3xl
                                font-semibold
                                uppercase
                                md:text-5xl
                            "
                        >
                            Amenidades
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Este proyecto todavía no tiene amenidades
                            registradas.
                        </p>

                    </div>

                </Container>
            </main>
        );
    }

    return (
        <main
            className="
                w-full
                bg-gradient-to-bl
                from-zinc-300
                to-zinc-50
            "
        >

            <Container>

                <div className="py-12 md:py-16">

                    {/* ENCABEZADO */}

                    <PageHeader
                        icon={PiWarehouse}
                        title="Amenidades"
                        subtitle="Espacios para disfrutar"
                        description="
                            Descubre los espacios diseñados para complementar
                            tu experiencia y disfrutar cada momento dentro
                            del proyecto.
                        "
                    />
                    <div className="mt-10 space-y-12 md:mt-15 md:space-y-20">

                        {amenidades.map((amenity, index) => (

                            <AmenityCard
                                key={amenity.id}
                                amenity={amenity}
                                reverse={index % 2 !== 0}
                            />

                        ))}

                    </div>

                </div>

            </Container>

        </main>
    );
}

export default Amenidades;