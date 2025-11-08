import { Router } from "express";
import { getFriends } from "../controllers/user.controller.js";
const router = Router();

router.get('/friends', getFriends);


export default router;