import React, { createContext, useContext, useState } from "react";
import { authApi } from "../api/authApi";
import auth from "../lib/auth";

const context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth.user || null);
  const [loading, setLoading] = useState(false);

  async function signin({ email, password }) {
    const { user, token } = await authApi.signin({ email, password });
    setUser(user);
    return { user, token };
  }

  async function signup({ name, email, password }) {
    const { user, token } = await authApi.signup({ name, email, password });
    // console.log(user, token);
    setUser(user);
    return { user, token };
  }

  function logout() {
    auth.logout();
    setUser(null);
  }

  return (
    <context.Provider
      value={{
        user,
        // token,
        signin,
        signup,
        isLoggedIn: user ? true : false,
        logout,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default function useAuth() {
  return useContext(context);
}
