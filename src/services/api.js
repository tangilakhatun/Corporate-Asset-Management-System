import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = axios.create({
    baseURL: BASE_URL,
});

// Add JWT token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


// Users
export const fetchMe = () => api.get("/api/users/me");
export const updateMe = (data) => api.put("/api/users/me", data);


export default api;
