import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import the ProtectedRoute component
import AdminRoute from "./Components/AdminRoute"; // Import the AdminRoute component
import AccountsPage from "./pages/Accounts";
import TransfersPage from "./pages/TransfersPage";
import PaymentsPage from "./pages/Payments";
import TransactionsHistoryPage from "./pages/Transaction";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Define the route for the login page */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected Route for Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accounts"
            element={
              <ProtectedRoute>
                <AccountsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transfers"
            element={
              <ProtectedRoute>
                <TransfersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <PaymentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <TransactionsHistoryPage />
              </ProtectedRoute>
            }
          />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
             
                <AdminPage />
              
            }
          />

          <Route path="/signin" element={<SignIn />} />

          {/* Default Route */}
          

          {/* 404 Page Not Found */}
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl text-gray-700">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
