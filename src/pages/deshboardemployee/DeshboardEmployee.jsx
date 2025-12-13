import { NavLink, Outlet, Link } from "react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Laptop,
  PlusCircle,
  Users,
  User,
  LogOut,
  Home,
  Sparkles,
  Building2,
  RotateCcw,
  Clock
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const DeshboardEmployee = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link
            to="/"
            className="text-2xl font-bold 
            bg-gradient-to-r from-indigo-500 to-cyan-400 
            bg-clip-text text-transparent"
          >
            AssetVerse
          </Link>

         
        </div>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden md:block font-medium">{user?.name}</span>

          <div className="avatar">
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                alt="profile"
              />
            </div>
          </div>

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

      {/* BODY */}
      <div className="flex">
        {/* SIDEBAR */}
        <aside
          className={`
            fixed md:static top-0 left-0 z-40
            w-64 min-h-screen bg-base-100 border-r
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          {/* MOBILE CLOSE */}
          <div className="flex md:hidden justify-between items-center p-4 border-b">
            <h3 className="font-bold text-lg">Menu</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <ul className="menu p-4 gap-1">
            <li>
              <Link to="/" className="gap-2">
                <Home className="w-5 h-5" />
                Home
              </Link>
            </li>

            <li>
              <NavLink
                to="my-assets"
                onClick={() => setOpen(false)}
                className="gap-2"
              >
                <Laptop className="w-5 h-5" />
                My Assets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="request-asset"
                onClick={() => setOpen(false)}
                className="gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                Request Asset
              </NavLink>
            </li>

            <li>
              <NavLink
                to="my-team"
                onClick={() => setOpen(false)}
                className="gap-2"
              >
                <Users className="w-5 h-5" />
                My Team
              </NavLink>
            </li>

            <li>
              <NavLink
                to="profile"
                onClick={() => setOpen(false)}
                className="gap-2"
              >
                <User className="w-5 h-5" />
                Profile
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* OVERLAY (mobile) */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 md:p-6 md:ml-64">
          {/* Employee Dashboard Heading */}
          <div className="flex items-center gap-3 mb-6">
            <Sparkles
              className="w-7 h-7 
                bg-gradient-to-r from-indigo-500 to-cyan-400 
                bg-clip-text text-transparent"
            />
            <h1
              className="text-3xl font-bold 
                bg-gradient-to-r from-indigo-500 to-cyan-400 
                bg-clip-text text-transparent"
            >
              Employee Dashboard
            </h1>
          </div>

          {/* RENDER CHILD PAGES */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DeshboardEmployee;
