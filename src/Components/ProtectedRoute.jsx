import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/" />;
  }

  return children; // Render the protected component if the user is authenticated
};

export default ProtectedRoute;
