import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Menu, X, LayoutDashboard, User, Users, Plus, CreditCard, Home, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const DashboardHR = () => {
  const { user, logout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  if (loading)
    return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Asset List", path: "assets", icon: <LayoutDashboard size={18} /> },
    { name: "Add Asset", path: "add-assets", icon: <Plus size={18} /> },
    { name: "All Requests", path: "requests", icon: <Users size={18} /> },
    { name: "My Employees", path: "employees", icon: <User size={18} /> },
    { name: "Upgrade Package", path: "upgrade-package", icon: <CreditCard size={18} /> },
    { name: "My Profile", path: "profile", icon: <User size={18} /> },
  ];

  return (
    <div className="flex w-full h-screen bg-base-200">
      {/* Sidebar */}
      <div
        className={`bg-base-100 shadow-lg w-64 p-3  space-y-4 transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 fixed md:relative z-20`}
      >
        {/* Logo / Home link */}
        <h1
          className="text-2xl font-bold mb-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            AssetVerse HR
          </span>
        </h1>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition
                ${isActive ? "border-b-2 border-indigo-500 text-indigo-500 font-semibold" : ""}`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 md:ml-64">
        {/* Top Navbar */}
        <div className="flex items-center justify-between p-3 bg-base-100 shadow">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden btn btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="ml-auto flex items-center gap-3">
            <span className="font-semibold">{user?.name || "HR Manager"}</span>
            <img
              src={user?.profileImage || "https://i.ibb.co/default.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button
            onClick={logout}
            className="btn btn-sm text-white border-none 
            bg-gradient-to-r from-indigo-500 to-cyan-400"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </button>
          </div>
        </div>

        {/* Dynamic content */}
        <div className="flex-1 overflow-auto p-4 bg-base-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardHR;
