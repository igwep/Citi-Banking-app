import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Assuming your AuthContext is in the 'context' folder

const AdminRoute = ({ children }) => {
  const { currentUser, userRole } = useAuth();

  // Check if the user is authenticated and has the 'admin' role
  if (!currentUser || userRole !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
