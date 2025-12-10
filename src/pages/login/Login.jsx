import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <form onSubmit={handleLogin} className="shadow p-6 rounded bg-white w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="input input-bordered w-full mb-2" />
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="input input-bordered w-full mb-2" />
                <button type="submit" className="btn bg-teal-400 w-full">Login</button>
            </form>
        </div>
    );
}
