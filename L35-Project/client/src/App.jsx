import React from "react";
import AuthContext, { AuthProvider } from "./context/authContext";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
};

export default App;
