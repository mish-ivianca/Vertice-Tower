const API_URL = import.meta.env.VITE_API_URL;

export async function refreshAccessToken() {
    const refresh = localStorage.getItem("refresh");

    if (!refresh) {
        return false;
    }

    const response = await fetch(
        `${API_URL}/token/refresh/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh,
            }),
        }
    );

    if (!response.ok) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        return false;
    }

    const data = await response.json();

    localStorage.setItem("access", data.access);

    return true;
}