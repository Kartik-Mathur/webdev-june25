import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import cors from 'cors';
import authRoutes from './http/routes/auth.routes.js';
import env from './env.js';
import { socketAuth } from './socket/middleware/socket.auth.js';
import chatHandlers from './socket/handlers/chat.handlers.js';
import requireAuth from './http/middlewares/requireAuth.js';
const app = express();
import userRoutes from './http/routes/users.routes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = env.PORT || 4444;

app.use(cors({
    origin: env.CORS_ORIGIN
}));

const httpServer = createServer(app);
app.use('/api/auth', authRoutes);
app.use('/api/user', requireAuth, userRoutes);

const io = new Server(httpServer, {
    cors: { origin: env.CORS_ORIGIN }
});

// Sockets ke middleware...
io.use(socketAuth);

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.join(`user:${socket.user.id}`);  // ROOM CREATE 

    chatHandlers(socket, io);
});

httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})