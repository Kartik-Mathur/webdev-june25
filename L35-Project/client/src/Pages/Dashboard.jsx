import React from "react";
import useAuth from "../context/authContext";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import auth from "../lib/auth";

const Dashboard = () => {
  const { logout } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:4444", {
      auth: {
        token: `${auth.token}`,
      },
    });
    console.log(socket);
    setSocket(socket);
  }, []);

  return (
    <div>
      Welcome To Dashboard
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
