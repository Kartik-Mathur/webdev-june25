import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io("http://localhost:4444");
    setSocket(s);

    return () => s.disconnect();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      console.log(socket.id);

      socket.emit("hello", { message: "HELLO SERVER" });

      socket.on("HEY", ({ message }) => {
        console.log("HEY EVENT AAYA", message);
      });

      socket.on("tata-price", ({ price }) => {
        console.log("TATA", price);
      });

      socket.on("hyundai-price", ({ price }) => {
        console.log("Hyundai", price);
      });
    });
  }, [socket]);

  const subscribeTata = () => {
    socket.emit("subscribe-tata");
  };

  const subscribeHyundai = () => {
    socket.emit("subscribe-hyundai");
  };

  return (
    <div>
      Stock Prices
      <button onClick={subscribeTata}>Tata</button>
      <button onClick={subscribeHyundai}>Hyundai</button>
    </div>
  );
};

export default App;
