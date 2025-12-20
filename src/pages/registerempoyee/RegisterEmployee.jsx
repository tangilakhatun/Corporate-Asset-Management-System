import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { User, Mail, Lock, Calendar } from "lucide-react";
import toast from "react-hot-toast";
import { api } from "../../services/api";

export default function RegisterEmployee() {
  const { registerEmployee } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    role: "employee",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(form.password)) {
    toast.error(
      "Password must be 8+ chars, include uppercase, lowercase & number."
    );
    return;
  }

  try {
    
    await registerEmployee(form);

    toast.success("Employee registered successfully! Please login."); 
    navigate("/login");
  } catch (err) {
    const message =
      err.message || "Registration failed. Please try again.";
    toast.error(message);
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="card bg-white shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Join as Employee
        </h2>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <User size={18} />
          <input
            placeholder="Full Name"
            className="grow"
            required
             value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            className="grow"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Lock size={18} />
          <input
            type="password"
            placeholder="Password"
            className="grow"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <Calendar size={18} />
          <input
            type="date"
            className="grow"
            required
            onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
          />
        </div>

        <button className="btn w-full text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400">
          Register
        </button>
      </form>
    </div>
  );
}
