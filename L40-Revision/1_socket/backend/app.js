const express = require('express');
const app = express();
const PORT = 4444;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}))

const { createServer } = require("http");
const { Server } = require("socket.io");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: 'http://localhost:5173'
});

// setInterval(() => {
//     let tataPrice = Math.floor(300 + Math.random() * 100);
//     io.to("tata").emit("tata-price",
//         { price: tataPrice }
//     )
// }, 1000);

// setInterval(() => {
//     let tataPrice = Math.floor(300 + Math.random() * 100);
//     io.to("hyundai").emit("hyundai-price",
//         { price: tataPrice }
//     )
// }, 1000);

let stocksEmittinData = new Map();

function subscribeToStock(stockName) {
    if (!stocksEmittinData.get(stockName)) {
        let id = setInterval(() => {
            io.to(stockName).emit(`${stockName}-price`, {
                price: Math.floor(300 + Math.random() * 100)
            })
        }, 1000);

        stocksEmittinData.set(stockName, id);
    }
}

io.on("connection", (socket) => {
    console.log(socket.id)
    let currentStock = null;

    socket.on("hello", ({ message }) => {
        console.log("HELLO EVENT AAYA", message)
        socket.emit("HEY", { message: "Hello CLIENT" });
    })

    socket.on("subscribe-tata", () => {
        if (currentStock) { // currentStock = hyundai
            socket.leave(currentStock);
        }

        socket.join("tata")
        currentStock = "tata";
        subscribeToStock(currentStock);
    })

    socket.on("subscribe-maruti", () => {
        if (currentStock) { // currentStock = hyundai
            socket.leave(currentStock);
        }

        socket.join("maruti")
        currentStock = "maruti";
        subscribeToStock(currentStock);
    })

    socket.on("subscribe-hyundai", () => {
        if (currentStock) { // currentStock = tata
            socket.leave(currentStock);
        }
        // DB SE HYUNDAI KE PAST PRICES BHI SEND HONGE EK BAARI
        socket.join("hyundai")
        currentStock = "hyundai";
        subscribeToStock(currentStock);
    })

    // setInterval(() => {
    //     let prices = 100 + Math.floor(Math.random() * 100);

    //     // socket.emit("tata-prices", { prices });
    // }, 1000);

    socket.on("disconnect", () => {
        console.log("REMOVING", socket.id);
    })
});


httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});