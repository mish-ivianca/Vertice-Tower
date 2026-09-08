import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const token = localStorage.getItem("access");

    return token
        ? <Outlet />
        : <Navigate to="/admin/login" replace />;
}

export default ProtectedRoute;