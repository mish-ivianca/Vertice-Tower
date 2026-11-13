
import { lazy, Suspense, useEffect, useState } from "react";
import { useOutletContext, } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getProyectoHero } from "../../../services/api";
import ProjectLoader from "../../../shared/components/loaders/ProjectLoader";

const HeroSequenceCanvas = lazy(() => import("../components/hero/HeroSequenceCanvas"));

function HomeProject() {
  const { project: projectBase, setHideFooter } = useOutletContext();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function cargarHero() {
      try {
        const data = await getProyectoHero();
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    }
    cargarHero();
  }, []);

  useEffect(() => {
    setHideFooter(true);

    return () => setHideFooter(false);
  }, [setHideFooter]);

  if (!project) {
    return <ProjectLoader text="PREPARANDO HOME" />;
  }

  return (
    <>
      <Helmet>
        <title>Vertice Tower | Madero SRL</title>
        <meta
          name="description"
          content="Descubre Vértice Tower, sus departamentos, amenidades, recorridos virtuales y ubicación."
        />
        <link
          rel="canonical"
          href="https://maderosrl.com/"
        />
      </Helmet>

      <Suspense fallback={<ProjectLoader text="PREPARANDO SECUENCIA"/>}>
        <HeroSequenceCanvas project={project} />
      </Suspense>
    </>
  );
}

export default HomeProject;
