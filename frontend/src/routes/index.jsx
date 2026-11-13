
import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route,} from "react-router-dom";

// HOME: carga prioritaria
import ProjectLayout from "../layouts/ProjectLayout";
import HomeProject from "../modules/showroom/pages/HomeProject";

// Protección de rutas
import ProtectedRoute from "../modules/admin/components/ProtectedRoute";

// SHOWROOM: carga bajo demanda
const Recorrido = lazy(() => import("../modules/showroom/pages/Recorrido"));
const DepartamentDetail = lazy(() => import("../modules/showroom/pages/DepartamentDetail"));
const Amenidades = lazy(() => import("../modules/showroom/pages/Amenidades"));
const Ubicacion = lazy(() => import("../modules/showroom/pages/Ubicacion"));
const ContactoProject = lazy(() => import("../modules/showroom/pages/ContactoProject"));

// ADMINISTRADOR: carga bajo demanda
const Login = lazy(() => import("../modules/admin/pages/Login"));
const AdminLayout = lazy(() => import("../modules/admin/components/AdminLayout"));
const Dashboard = lazy(() => import("../modules/admin/pages/Dashboard"));
const Historial = lazy(() => import("../modules/admin/pages/Historial"));
const Usuarios = lazy(() => import("../modules/admin/pages/Usuario"));

// Ruta de prueba solo para desarrollo
const HeroSequenceCanvas = import.meta.env.DEV
  ? lazy(() =>
      import("../modules/showroom/components/hero/HeroSequenceCanvas")
    )
  : null;

function RouteLoader() {
  return (
    <div
      role="status"
      className="flex min-h-screen items-center justify-center"
    >
      <span className="text-sm text-neutral-500">
        Cargando...
      </span>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>

          {/* ADMIN */}
          <Route
            path="/admin/login"
            element={<Login />}
          />

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route
                path="/admin"
                element={<Dashboard />}
              />
              <Route
                path="/admin/historial"
                element={<Historial />}
              />
              <Route
                path="/admin/usuarios"
                element={<Usuarios />}
              />
            </Route>
          </Route>

          {/* SHOWROOM */}
          <Route element={<ProjectLayout />}>
            <Route
              path="/"
              element={<HomeProject />}
            />

            <Route
              path="/recorrido"
              element={<Recorrido />}
            />

            <Route
              path="/recorrido/:floorId/:codigo"
              element={<DepartamentDetail />}
            />

            <Route
              path="/amenidades"
              element={<Amenidades />}
            />

            <Route
              path="/ubicacion"
              element={<Ubicacion />}
            />

            <Route
              path="/contacto"
              element={<ContactoProject />}
            />

            {HeroSequenceCanvas && (
              <Route
                path="/prueba-frames"
                element={<HeroSequenceCanvas />}
              />
            )}
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
