import { PrismaClient } from "@prisma/client";
import { signup } from "../services/auth.service.js";
let prisma = new PrismaClient();

export async function postSignup(req, res, next) {
    try {
        const { email, name, password } = req.body;
        let data = await signup({ email, name, password });
        console.log(data);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error While Signup',
            error
        })
    }
}