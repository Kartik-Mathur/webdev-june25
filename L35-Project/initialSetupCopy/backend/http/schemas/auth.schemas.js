import { z } from "zod";

export const signupSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
    name: z
        .string()
        .trim()
        .min(1, "Name cannot be empty")
        .max(100, "Name too long")
        .optional(),
});

export const signinSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
});