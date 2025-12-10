import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Navbar =()=> {
    const { user } = useAuth();

    return (
        <nav className="shadow-xl text-white p-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-teal-400 text-2xl">AssetVerse</Link>
            <div className="flex items-center gap-4">
                {!user && (
                    <>
                        <Link to="/login" className="btn btn-sm bg-teal-400   text-white">Login</Link>
                        <Link to="/register/employee" className="btn bg-teal-400 btn-sm  text-white">Join as Employee</Link>
                        <Link to="/register/hr" className="btn btn-sm bg-teal-400 text-white ">Join as HR</Link>
                    </>
                )}
                {user && (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-outline bg-teal-400 rounded-full">{user.email}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white text-black rounded w-52 mt-2">
                            {user.role === "hr" ? (
                                <>
                                    <li><Link to="/dashboard/hr/assets">Assets</Link></li>
                                    <li><Link to="/dashboard/hr/requests">Requests</Link></li>
                                    <li><Link to="/dashboard/hr/employees">Employees</Link></li>
                                    <li><Link to="/dashboard/hr/upgrade-package">Upgrade Package</Link></li>
                                    <li><Link to="/dashboard/hr/profile">Profile</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/dashboard/employee/my-assets">My Assets</Link></li>
                                    <li><Link to="/dashboard/employee/request-asset">Request Asset</Link></li>
                                    <li><Link to="/dashboard/employee/my-team">My Team</Link></li>
                                    <li><Link to="/dashboard/employee/profile">Profile</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbar;