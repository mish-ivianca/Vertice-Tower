import Container from "../../../../shared/components/container/container";
import projects from "../../data/projectsData";
import AvanceMes from "../../components/project/avances/AvanceMes";
import { MdConstruction } from "react-icons/md";
import PageHeader from "../../components/project/pageHeader/PageHeader";
import { useParams } from "react-router-dom";

function Avances() {
    const { slug} = useParams();

    const project = projects.find(
        project => project.slug === slug
    )
    return (
        <main
            className="
                w-full
                bg-gradient-to-bl
                from-zinc-100
                to-zinc-50
            "
        >

            <Container>

                <div className="py-12 md:py-16">

                    {/* ENCABEZADO */}
                    <PageHeader
                        icon={MdConstruction}
                        title="Avances de obra"
                        subtitle="Así crece nuestro proyecto"
                    />

                    {/* AVANCES */}
                    <div className="mt-12 space-y-16 md:space-y-20">

                        {project.avances.map((avance) => (
                            <AvanceMes
                                key={`${avance.mes}-${avance.anio}`}
                                avance={avance}
                            />
                        ))}

                    </div>

                </div>

            </Container>

        </main>
    );
}

export default Avances;