import { NavLink } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Sun, Moon, Menu, X, LayoutDashboard, Home, Info, HelpCircle } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Support", path: "/support", icon: <HelpCircle size={18} /> },
  ];

  const activeClass = "border-b-2 font-bold  bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent border-cyan-400"; 
  return (
    <nav className="shadow-xl bg-base-200 w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-opacity-70 border-b border-base-300 px-4 md:px-16 lg:px-60 py-4 flex justify-between items-center">

      {/* Logo */}
      <NavLink to="/" className="font-bold  bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent text-2xl">AssetVerse</NavLink>

      {/* Center Links Desktop */}
      <div className="hidden md:flex items-center gap-6 font-semibold text-lg">
  {links.map(link => (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) => {
        const activeBase = isActive
          ? "border-b-2 border-cyan-400 font-bold"
          : "";

        const iconClass = isActive ? "text-cyan-400" : "";
        const textClass = isActive
          ? "bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
          : "";

        return `flex items-center gap-1 px-4 py-2 transition-all duration-200 ${activeBase}`;
      }}
    >
      {({ isActive }) => (
        <>
          {/* Icon */}
          <span className={isActive ? "text-cyan-400" : ""}>
            {link.icon}
          </span>

          {/* Label */}
          <span
            className={
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
                : ""
            }
          >
            {link.name}
          </span>
        </>
      )}
    </NavLink>
  ))}
</div>


      {/* Right Section Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <button onClick={toggleTheme} className="btn btn-sm rounded-full border-none">
          {theme === "light" ? <Sun size={18} className="text-black" /> : <Moon size={18} className="text-white" />}
        </button>

        {!user && (
          <div className="flex items-center gap-3">
            <NavLink to="/login" className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white border-none shadow-md hover:shadow-xl transition-all duration-300">Login</NavLink>
            <NavLink to="/register/employee" className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white border-none shadow-md hover:shadow-xl transition-all duration-300">Join Employee</NavLink>
            <NavLink to="/register/hr" className="btn btn-sm bg-gradient-to-r from-indigo-500 to-cyan-400 text-white border-none shadow-md hover:shadow-xl transition-all duration-300">Join HR</NavLink>
          </div>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end">
    <label
      tabIndex={0}
      className="btn btn-sm bg-transparent border-none text-black flex items-center gap-2 hover:bg-base-200"
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-black">
        {user.name?.charAt(0).toUpperCase()}
      </div>

      {/* Name */}
      <span className="text-black">{user.name}</span>
    </label>
  </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white text-black rounded w-52 mt-2" onClick={(e)=>e.stopPropagation()}>
              {user.role === "hr" ? (
                <li><NavLink to="/dashboard/hr"> <LayoutDashboard size={18} /> Dashboard</NavLink></li>
              ) : (
                <li><NavLink to="/dashboard/employee"> <LayoutDashboard size={18} /> Dashboard</NavLink></li>
              )}
              <li><button onClick={logout} className="btn btn-sm btn-outline w-full text-left">Logout</button></li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-200 p-2 md:p-4 flex flex-col gap-2 md:gap-4 shadow-lg md:hidden">
          {links.map(link => (
            <NavLink key={link.name} to={link.path} onClick={() => setMenuOpen(false)}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-2 px-2 py-2 transition-all duration-200 ${
            isActive ? "border-b-2 border-cyan-400 font-bold" : "hover:text-teal-500"
          }`}
        >
          <span className={isActive ? "text-cyan-400" : ""}>{link.icon}</span>

          <span
            className={
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
                : ""
            }
          >
            {link.name}
          </span>
        </div>
      )}
    </NavLink>
          ))}

          <button onClick={toggleTheme} className="btn btn-sm bg-gradient-to-r from-indigo-500  to-cyan-400 text-white border-none shadow-md hover:shadow-xl transition-all duration-300 w-24">
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {!user && (
            <>
              <NavLink to="/login" className="btn bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-none" onClick={() => setMenuOpen(false)}>Login</NavLink>
              <NavLink to="/register/employee" className="btn bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-none" onClick={() => setMenuOpen(false)}>Join Employee</NavLink>
              <NavLink to="/register/hr" className="btn bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-none" onClick={() => setMenuOpen(false)}>Join HR</NavLink>
            </>
          )}

          {user && (
            <>
              {user.role === "hr" ? (
                <NavLink to="/dashboard/hr" className="btn bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-none" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
              ) : (
                <NavLink to="/dashboard/employee" className="btn bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-none" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
              )}
              <button onClick={logout} className="btn btn-outline">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
