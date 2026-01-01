import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; // Eye icon import
import toast from "react-hot-toast";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.success("Login successful!");
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role === "hr") navigate("/dashboard/hr", { replace: true });
      else navigate("/dashboard/employee", { replace: true });
    }
  }, [user, navigate]);

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
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4 relative">
          <Lock size={18} />
          <input
            type={showPassword ? "text" : "password"} // Toggle password type
            placeholder="Password"
            className="grow pr-10" // Give space for the eye icon
            required
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <span
            className="absolute right-3 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button
          type="submit"
          className="btn w-full text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
