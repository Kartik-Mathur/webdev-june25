require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const boardRoutes = require("./routes/boardRoutes");
// const Board = require("./models/board.model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173"
}));

app.use("/api/boards", boardRoutes);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_ORIGIN || "http://localhost:5173"
    },
});

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join-board", async ({ boardId }) => {
        if (!boardId) return;

        socket.join(boardId);
        console.log(`${socket.id} joined board ${boardId}`);
        try {
            const board = await Board.findById(boardId);
            if (board) {
                socket.emit("board-init", {
                    boardId: board._id,
                    title: board.title,
                    elements: board.elements || [],
                });
            } else {
                socket.emit("board-error", { message: "Board not found" });
            }
        } catch (err) {
            console.error("Error loading board on join:", err);
            socket.emit("board-error", { message: "Server error while loading board" });
        }
    });

    socket.on("elements-update", async ({ boardId, elements }) => {

    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 4444;
connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
});
