import React, { useContext } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import AdminDashboard from "./components/AdminDashboard";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { companyToken } = useContext(AppContext);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminSignup />} />
        <Route path="/login" element={<AdminLogin />} />
        {companyToken ? (
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        ) : (
          <Route
            path="/adminDashboard"
            element={<div>Please log in to access the dashboard</div>}
          />
        )}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
