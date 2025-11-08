import React from "react";
import useAuth from "../context/authContext";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import auth from "../lib/auth";

const Dashboard = () => {
  const { user, logout } = useAuth();
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

    socket.on("connect", () => {
      console.log("User Connected");
    });

    socket.on("disconnect", () => {
      console.log("User Connected");
    });

    socket.on("chat:new", (data) => {
      console.log(data);

      setMessages([...messages, data]);
    });

    // console.log(socket);
    setSocket(socket);
    setIsConnected(true);
    return () => socket.disconnect();
  }, []);

  const chatHandler = function () {
    socket.emit("chat:send", { receiverId, text }, (msg) => {
      if (!msg.ok) {
        return alert(msg.error);
      }
      // console.log(msg.message);
      // setMessages([...messages, msg.message]);
    });
  };

  return (
    <div>
      Welcome To Dashboard : {user.name}
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
        <button onClick={chatHandler} disabled={!isConnected}>
          Send
        </button>
      </div>
      <div className="chatbox">
        <div className="sidea">FRIENDS LIST</div>
        <div className="sideb">
          {messages.map((m) => {
            return (
              <div key={m.id}>
                {m.sender.id !== user.id ? m.sender.name : ""} {m.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
