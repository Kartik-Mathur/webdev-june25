import React, { createContext, useContext, useState } from "react";
import { authApi } from "../api/authApi";

const context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //   function signin({email, password}) {
  //     const {user, token} = authApi.signin({email, password});
  //   }

  async function signup({ name, email, password }) {
    const { user, token } = await authApi.signup({ name, email, password });
    // console.log(user, token);
    setUser(user);
    return { user, token };
  }

  //   function logout() {

  //   }

  return (
    <context.Provider
      value={{
        user,
        // token,
        // signin,
        signup,
        isLoggedIn: user ? true: false,
        // logout,

      }}
    >
      {children}
    </context.Provider>
  );
};

export default function useAuth() {
  return useContext(context);
}
