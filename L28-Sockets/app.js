const express = require("express");
const path = require('path');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {
    console.log("Client Connected", socket.id);

    setInterval(() => {
        socket.emit('stock-price', {
            price: Math.floor(Math.random(1000) * 1000)
        });
    }, 1000)

    socket.on('chat', (chatdata) => {
        console.log(chatdata);

        socket.broadcast.emit('chat-message', chatdata)
    })
});

httpServer.listen(4444, () => {
    console.log('http://localhost:4444')
});