import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";

const PORT = process.env.PORT || 4444;

const app = express();
const Server = createServer(app);


Server.listen(PORT, () => {
    console.log("http://localhost:", PORT);
})


// npm i prisma -D
// npm i prisma --save-dev