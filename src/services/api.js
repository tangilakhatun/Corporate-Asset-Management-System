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

// Assets
export const getAssets = () => api.get("/api/assets");
export const addAsset = (data) => api.post("/api/assets", data);
export const updateAsset = (id, data) => api.put(`/api/assets/${id}`, data);
export const deleteAsset = (id) => api.delete(`/api/assets/${id}`);

// Requests
export const getRequests = () => api.get("/api/requests");
export const approveRequest = (id) => api.put(`/api/requests/${id}/approve`);
export const rejectRequest = (id) => api.put(`/api/requests/${id}/reject`);

// Employees
export const getEmployees = () => api.get("/api/employees");
export const removeEmployee = (email) => api.delete(`/api/employees/${email}`);

// Packages & Payments
export const getPackages = () => api.get("/api/packages");
export const upgradePackage = (data) => api.post("/api/packages/upgrade", data);

// Employee Requests / My Assets
export const requestAsset = (assetId, note) => api.post("/api/requests", { assetId, note });
export const returnAsset = (assignedId) => api.put(`/api/assigned/${assignedId}/return`);
export const getMyAssets = () => api.get("/api/assigned/my-assets");

// Assets API
export const getTopRequestedAssets = () => api.get("/api/assets/top-requested");

// Get Employee
export const getMyTeam = () => api.get("/api/employee/my-team");


export default api;
