import { createContext, useContext, useEffect, useState } from "react";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import app from "../firebase/Firebase";
import { api } from "../services/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Firebase onAuthStateChanged
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (fUser) => {
            if (fUser) {
                try {
                    // get JWT from backend
                    const tokenRes = await api.post("/api/auth/firebase-login", { email: fUser.email });
                    localStorage.setItem("token", tokenRes.data.token);

                    // fetch user profile
                    const profileRes = await api.get("/api/users/me");
                    setUser(profileRes.data);
                } catch (err) {
                    console.error("Error fetching user profile:", err);
                    setUser(null);
                    localStorage.removeItem("token");
                }
            } else {
                setUser(null);
                localStorage.removeItem("token");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Login
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            // Firebase error codes mapping
            const errorMap = {
                "auth/user-not-found": "User not found",
                "auth/wrong-password": "Incorrect password",
                "auth/invalid-email": "Invalid email address",
            };
            throw new Error(errorMap[err.code] || "Something went wrong. Try again.");
        }
    };

    // Logout
    const logout = () => signOut(auth);

    // Register HR
    const registerHR = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            await api.post("/api/users/register/hr", data);
        } catch (err) {
            if (err.code) {
                // Firebase errors
                const errorMap = {
                    "auth/email-already-in-use": "This email is already registered",
                    "auth/invalid-email": "Invalid email address",
                    "auth/weak-password": "Password is too weak (min 6 characters)",
                };
                throw new Error(errorMap[err.code] || "Something went wrong. Try again.");
            }
            // API errors
            throw new Error(err.response?.data?.message || "Something went wrong. Try again.");
        }
    };

    // Register Employee
    const registerEmployee = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            await api.post("/api/users/register/employee", data);
        } catch (err) {
            if (err.code) {
                const errorMap = {
                    "auth/email-already-in-use": "This email is already registered",
                    "auth/invalid-email": "Invalid email address",
                    "auth/weak-password": "Password is too weak (min 6 characters)",
                };
                throw new Error(errorMap[err.code] || "Something went wrong. Try again.");
            }
            throw new Error(err.response?.data?.message || "Something went wrong. Try again.");
        }
    };

    const value = { user, login, logout, registerHR, registerEmployee, loading };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
