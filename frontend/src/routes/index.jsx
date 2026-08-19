import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import PublicLayout from "../layouts/ShowroomLayout/PublicLayout";
import ProjectLayout from "../layouts/ShowroomLayout/ProjectLayout";
import ProjectFullLayout from "../layouts/ShowroomLayout/ProjectFullLayout";

// Sitio institucional
import Home from "../modules/showroom/pages/Home";
import Nosotros from "../modules/showroom/pages/Nosotros";
import Portafolio from "../modules/showroom/pages/Portafolio";
import Projects from "../modules/showroom/pages/Projects";
import Contacto from "../modules/showroom/pages/Contacto";

// Proyecto
import HomeProject from "../modules/showroom/pages/projects/HomeProject";
import Recorrido from "../modules/showroom/pages/projects/Recorrido";
import DepartamentDetail from "../modules/showroom/pages/projects/DepartamentDetail";

// Las iremos creando después
// import NosotrosProject from "../modules/showroom/pages/projects/Nosotros";
// import Amenidades from "../modules/showroom/pages/projects/Amenidades";
// import Avances from "../modules/showroom/pages/projects/Avances";
// import Ubicacion from "../modules/showroom/pages/projects/Ubicacion";
// import ContactoProyecto from "../modules/showroom/pages/projects/Contacto";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<PublicLayout />}
                >
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/nosotros"
                        element={<Nosotros />}
                    />
                    <Route
                        path="/portafolio"
                        element={<Portafolio />}
                    />

                    <Route
                        path="/portal-comercial"
                        element={<Projects />}
                    />

                    <Route
                        path="/contacto"
                        element={<Contacto />}
                    />

                </Route>

                {/* ==========================
                    MICROSITIO DEL PROYECTO
                ========================== */}

                <Route
                    element={<ProjectLayout />}
                >

                    <Route
                        path="/portal-comercial/:slug"
                        element={<HomeProject />}
                    />

                </Route>
                <Route
                    element={<ProjectFullLayout />}
                >
                    <Route
                        path="/portal-comercial/:slug/recorrido"
                        element={<Recorrido />}
                    />
                    <Route
                        path="/portal-comercial/:slug/recorrido/:codigo"
                        element={<DepartamentDetail />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;