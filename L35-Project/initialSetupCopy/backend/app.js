import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import cors from 'cors';
import authRoutes from './http/routes/auth.routes.js';
import env from './env.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = env.PORT || 4444;

app.use(cors({
    origin: env.CORS_ORIGIN
}));

const httpServer = createServer(app);
app.use('/api/auth', authRoutes);

httpServer.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})