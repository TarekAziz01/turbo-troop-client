import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import {  toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  toast("you have to login first")
  

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
