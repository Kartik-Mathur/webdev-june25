import { Router } from "express";
import { getMe, postSignin, postSignup } from "../controllers/auth.controller.js";
import requireAuth from "../middlewares/requireAuth.js";
const router = Router();

router.post('/signup', postSignup);
router.post('/signin', postSignin);
router.get('/me', requireAuth, getMe);


export default router;