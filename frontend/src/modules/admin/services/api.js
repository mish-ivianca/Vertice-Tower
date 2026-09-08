import { refreshAccessToken } from "./auth";

const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint, options = {}) {
    let token = localStorage.getItem("access");

    let response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (response.status === 401) {
        const renovado = await refreshAccessToken();

        if (!renovado) {
            window.location.href = "/admin/login";
            return response;
        }

        token = localStorage.getItem("access");

        response = await fetch(
            `${API_URL}${endpoint}`,
            {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    }

    return response;
}