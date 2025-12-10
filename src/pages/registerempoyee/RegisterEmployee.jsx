import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export default function RegisterEmployee() {
    const { registerEmployee } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        dateOfBirth: "",
        role: "employee"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerEmployee(form);
            alert("Registered successfully!");
            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <form onSubmit={handleSubmit} className="shadow p-6 rounded bg-white w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Register as Employee</h2>

                <input placeholder="Full Name" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <input type="email" placeholder="Email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <input type="password" placeholder="Password" required
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <input type="date" required
                    value={form.dateOfBirth}
                    onChange={e => setForm({ ...form, dateOfBirth: e.target.value })}
                    className="input input-bordered w-full mb-2" />

                <button type="submit" className="btn bg-teal-400 w-full mt-2">
                    Register
                </button>
            </form>
        </div>
    );
}
