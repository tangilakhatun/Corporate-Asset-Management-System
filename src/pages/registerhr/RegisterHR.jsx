import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

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
        role: "hr"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerHR(form);
            alert("Registered successfully!");
            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <form onSubmit={handleSubmit} className="shadow p-6 rounded bg-white w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Register as HR</h2>

                <input placeholder="Full Name" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="input input-bordered w-full mb-2" required />

                <input placeholder="Company Name" value={form.companyName}
                    onChange={e => setForm({ ...form, companyName: e.target.value })}
                    className="input input-bordered w-full mb-2" required />

                <input placeholder="Company Logo URL" value={form.companyLogo}
                    onChange={e => setForm({ ...form, companyLogo: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <input type="email" placeholder="Email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="input input-bordered w-full mb-2" required />

                <input type="password" placeholder="Password" value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    className="input input-bordered w-full mb-2" required />

                <input type="date" value={form.dateOfBirth}
                    onChange={e => setForm({ ...form, dateOfBirth: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <button type="submit" className="btn bg-teal-400 w-full mt-2">Register</button>
            </form>
        </div>
    );
}
