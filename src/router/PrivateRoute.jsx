
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Loader from "../component/loadingSpiner/Loader";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div><Loader></Loader></div>;

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
