import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      const errorMap = {
        "auth/user-not-found": "User not found. Please register first.",
        "auth/wrong-password": "Incorrect password. Try again.",
        "auth/invalid-email": "Invalid email format.",
      };
      toast.error(errorMap[err.code] || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form onSubmit={handleLogin} className="card bg-white shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            className="grow"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <Lock size={18} />
          <input
            type="password"
            placeholder="Password"
            className="grow"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="btn w-full text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400">
          Login
        </button>
      </form>
    </div>
  );
}
