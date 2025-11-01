import jwt from 'jsonwebtoken';
import env from '../../env.js';
import { PrismaClient } from '@prisma/client';
let prisma = new PrismaClient();

export default async function requireAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).json({ error: "Token required" });
        
        const decoded = jwt.verify(token, env.JWT_SECRET);
        
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { name: true, email: true, id: true }
        });
        if (!user) return res.status(401).json({ error: "Invalid or expired token" });

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: "Unauthorized" });
    }

}