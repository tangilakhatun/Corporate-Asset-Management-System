import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { User, Mail, Lock, Building, Image, Calendar } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterHR() {
  const { registerHR } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    companyName: "",
    companyLogo: "",
    email: "",
    password: "",
    dateOfBirth: "",
    role: "hr",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(form.password)) {
      toast.error("Password must be 8+ chars, include uppercase, lowercase & number.");
      return;
    }

    try {
      await registerHR(form);
      toast.success("HR registered successfully!");
      navigate("/login");
    } catch (err) {
      const errorMap = {
        "auth/email-already-in-use": "This email is already registered.",
        "auth/invalid-email": "Invalid email format.",
      };
      toast.error(errorMap[err.code] || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card bg-white shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Join as HR Manager</h2>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <User size={18} />
          <input
            placeholder="Full Name"
            className="grow"
            required
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Building size={18} />
          <input
            placeholder="Company Name"
            className="grow"
            required
            onChange={e => setForm({ ...form, companyName: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Image size={18} />
          <input
            placeholder="Company Logo URL"
            className="grow"
            onChange={e => setForm({ ...form, companyLogo: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-3">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            className="grow"
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <Lock size={18} />
          <input
            type="password"
            placeholder="Password"
            className="grow"
            required
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <Calendar size={18} />
          <input
            type="date"
            className="grow"
            required
            onChange={e => setForm({ ...form, dateOfBirth: e.target.value })}
          />
        </div>

        <button className="btn w-full text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400">
          Register
        </button>
      </form>
    </div>
  );
}
