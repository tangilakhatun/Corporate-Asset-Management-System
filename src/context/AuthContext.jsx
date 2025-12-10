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

    // firebase onauthstatechanged
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (fUser) => {
            if (fUser) {
                // get jwt from backend
                const tokenRes = await api.post("/api/auth/firebase-login", { email: fUser.email });
                localStorage.setItem("token", tokenRes.data.token);

                // fetch user profile
                const profileRes = await api.get("/api/users/me");
                setUser(profileRes.data);
            } else {
                setUser(null);
                localStorage.removeItem("token");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => signOut(auth);

    // Register hr
    const registerHR = async (data) => {
        const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await api.post("/api/users/register/hr", data);
    };

    // Register employee
    const registerEmployee = async (data) => {
        const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await api.post("/api/users/register/employee", data);
    };

    const value = { user, login, logout, registerHR, registerEmployee }; 

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
