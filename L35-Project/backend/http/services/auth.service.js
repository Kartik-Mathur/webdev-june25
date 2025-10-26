import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import env from "../../env.js";

export async function signup({ email, password, name }) {
    let existing = await prisma.user.findUnique({
        where: { email }
    })

    if (existing) {
        let err = new Error("Email already exists");
        err.status = 401;
        throw err;
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        let user = await prisma.user.create({
            data: {
                email,
                password: passwordHash,
                name
            }
        })
        let token = jwt.sign({ name, email, id: user.id }, env.JWT_SECRET);
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token
        }
    } catch (error) {
        return error;
    }

}



export async function signin({ email, password }) {
    let user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        let err = new Error("Invalid Login email");
        err.status = 401;
        throw err;
    }

    try {
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            let err = new Error("Invalid Login password");
            err.status = 401;
            throw err;
        }

        let token = jwt.sign({ name: user.name, email, id: user.id }, env.JWT_SECRET);
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token
        }
    } catch (error) {
        return error;
    }

}