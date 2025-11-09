import React from "react";
import useAuth from "../context/authContext";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import auth from "../lib/auth";
import axios from "../api/axios";

const Dashboard = () => {
  const { user, logout, token } = useAuth();
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [receiverId, setReceiverId] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [friendList, setFriendList] = useState([]);

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
      console.log("User Disconnected");
    });

    socket.on("chat:new", (data) => {
      setMessages((prevMessages) =>[...prevMessages, data]);
    });

    setSocket(socket);
    setIsConnected(true);
    return () => socket.disconnect();
  }, [token]);

  useEffect(() => {
    if (!isConnected) {
      return;
    }

    axios.get("/api/user/friends").then(({ data }) => {
      console.log(data);
      setFriendList(data);
    });
  }, [isConnected]);

  const chatHandler = function () {
    socket.emit("chat:send", { receiverId, text }, (msg) => {
      if (!msg.ok) {
        return alert(msg.error);
      }
    });
  };

  return (
    <div className="dashboard">
      <div className="topbar">
        <div className="user-info">
          Welcome, <strong>{user.name}</strong>
        </div>
        <div className="status">
          Status:{" "}
          {isConnected ? (
            <span className="connected">Connected</span>
          ) : (
            <span className="connecting">Connecting...</span>
          )}
        </div>
        <button className="logout-btn" onClick={() => logout()}>
          Logout
        </button>
      </div>

      <div className="chatbox">
        <div className="sidea">
          <div className="friends-header">Friends</div>
          <ul className="friend-list">
            {friendList.map((f) => {
              return (
                <li
                  key={f.id}
                  className="friend-item"
                  onClick={() => {
                    setReceiverId(
                      user.id === f.userA.id ? f.userB.id : f.userA.id
                    );

                    axios
                      .get("/api/user/messages", {
                        params: {
                          conversationId: f.id,
                        },
                      })
                      .then(({ data }) => {
                        console.log(data);
                        setMessages(data);
                      });
                  }}
                >
                  {f.userA.id !== user.id ? <div>{f.userA.name}</div> : ""}
                  {f.userB.id !== user.id ? <div>{f.userB.name}</div> : ""}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sideb">
          <div className="messages">
            {messages.map((m) => {
              const isMine = m.sender.id === user.id;
              return (
                <div
                  key={m.id}
                  className={`message ${isMine ? "mine" : "theirs"}`}
                >
                  {!isMine && <div className="sender">{m.sender.name}</div>}
                  <div className="bubble">{m.text}</div>
                </div>
              );
            })}
          </div>

          <div className="sendmessage">
            <input
              onChange={(e) => setReceiverId(e.target.value)}
              type="text"
              placeholder="Enter Receiver ID"
              value={receiverId}
            />
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Type a message"
              value={text}
            />
            <button onClick={chatHandler} disabled={!isConnected}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
