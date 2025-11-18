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
      let stocksList = ["tata", "hyundai", "maruti"];
      stocksList.forEach((stock) => {
        socket.on(`${stock}-price`, ({ price }) => {
          console.log(stock, price);
        });
      });
      // socket.on("tata-price", ({ price }) => {
      //   console.log("TATA", price);
      // });

      // socket.on("hyundai-price", ({ price }) => {
      //   console.log("Hyundai", price);
      // });
    });
  }, [socket]);

  const subscribeTata = () => {
    socket.emit("subscribe-tata");
  };

  const subscribeHyundai = () => {
    socket.emit("subscribe-hyundai");
  };

  const subscribeMaruti = () => {
    socket.emit("subscribe-maruti");
  };

  return (
    <div>
      Stock Prices
      <button onClick={subscribeTata}>Tata</button>
      <button onClick={subscribeHyundai}>Hyundai</button>
      <button onClick={subscribeMaruti}>Maruti</button>
    </div>
  );
};

export default App;
