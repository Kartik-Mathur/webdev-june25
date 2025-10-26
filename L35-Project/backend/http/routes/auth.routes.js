import { Router } from "express";
import { postSignup } from "../controllers/auth.controller.js";
const router = Router();

router.post('/signup', postSignup);




export default router;