import React from "react";
import useAuth from "../context/authContext";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import auth from "../lib/auth";

const Dashboard = () => {
  const { logout } = useAuth();
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [receiverId, setReceiverId] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:4444", {
      auth: {
        token: `${auth.token}`,
      },
    });
    console.log(socket);
    setSocket(socket);
    setIsConnected(true);
  }, []);

  const chatHandler = function () {};

  return (
    <div>
      Welcome To Dashboard
      <br />
      Status: {isConnected ? <span>Connected</span> : <span>Connecting..</span>}
      <br />
      <button onClick={() => logout()}>Logout</button>
      <div className="sendmessage">
        <input
          onChange={(e) => setReceiverId(e.target.value)}
          type="text"
          placeholder="Enter Reciever Id"
          value={receiverId}
          id=""
        />
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter Text"
          id=""
          value={text}
        />
        <button disabled={!isConnected}>Send</button>
      </div>
      <div className="chatbox">
        <div className="sidea">FRIENDS LIST</div>
        <div className="sideb">CHAT DATA</div>
      </div>
    </div>
  );
};

export default Dashboard;
