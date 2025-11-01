import React from "react";
import AuthContext, { AuthProvider } from "./context/authContext";
import Signup from "./Pages/Signup";
import { Navigate, Route, Routes } from "react-router";
import useAuth from "./context/authContext";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";

const App = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn)
  return (
    <Routes>
      <Route
        path="/signup"
        element={!isLoggedIn ? <Signup /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/signin" />}
      />
      <Route
        path="/signin"
        element={!isLoggedIn ? <Signin /> : <Navigate to="/dashboard" />}
      />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
};

export default App;
