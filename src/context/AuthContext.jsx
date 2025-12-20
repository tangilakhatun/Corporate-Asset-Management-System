import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase";
import { api, fetchMe } from "../services/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (fUser) => {
      if (fUser && !user) {
        try {
          // Backend JWT token
          const tokenRes = await api.post("/api/auth/firebase-login", { email: fUser.email });
          localStorage.setItem("token", tokenRes.data.token);

          // Profile fetch
          const profileRes = await fetchMe();
          const data = profileRes.data;
          setUser({ ...data, name: data.employeeName || data.name });
        } catch (err) {
          console.error("Error fetching profile:", err);
          setUser(null);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

 
  const login = async (email, password) => {
    const emailTrim = email.trim();
    const passwordTrim = password.trim();

    // Firebase login
    await signInWithEmailAndPassword(auth, emailTrim, passwordTrim);

    //  Backend JWT token
    const tokenRes = await api.post("/api/auth/firebase-login", { email: emailTrim });
    localStorage.setItem("token", tokenRes.data.token);

    //  Fetch profile
    const profileRes = await fetchMe();
    const data = profileRes.data;
    setUser({ ...data, name: data.employeeName || data.name });
     return { ...data, name: data.employeeName || data.name };
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("token");
  };

  // Register Employee: Firebase + Backend
  const registerEmployee = async (data) => {
    const emailTrim = data.email.trim();
    const passwordTrim = data.password.trim();

    await createUserWithEmailAndPassword(auth, emailTrim, passwordTrim);

   
    await api.post("/api/users/register/employee", { ...data, email: emailTrim, password: passwordTrim });
  };

  // Register HR: Firebase + Backend
  const registerHR = async (data) => {
    const emailTrim = data.email.trim();
    const passwordTrim = data.password.trim();

    await createUserWithEmailAndPassword(auth, emailTrim, passwordTrim);

    await api.post("/api/users/register/hr", { ...data, email: emailTrim, password: passwordTrim });
  };

  const value = { user,setUser, login, logout, registerEmployee, registerHR, loading };

  if (loading) return <div>Loading...</div>;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
