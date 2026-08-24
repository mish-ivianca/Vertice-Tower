import Container from "../../../../shared/components/container/Container";
import avances from "../../../../projects/aurora/avances";
import AvanceMes from "../../components/project/avances/AvanceMes";
import { MdConstruction } from "react-icons/md";
import PageHeader from "../../components/project/pageHeader/PageHeader";

function Avances() {
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

                        {avances.map((avance) => (
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