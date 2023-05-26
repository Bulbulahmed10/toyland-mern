import React, { useContext } from "react";
import { AuthContextProvider } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import ToastContainer from "../components/toastContainer/ToastContainer";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextProvider);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <progress className="progress w-56"></progress>;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <>
      <ToastContainer />
      <Navigate to="/login" state={{ from: location }} replace={true} />
    </>
  );
};

export default ProtectedRoute;
