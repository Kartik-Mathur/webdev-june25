import { Router } from "express";
import { getFriends, getMessages } from "../controllers/user.controller.js";
const router = Router();

router.get('/friends', getFriends);
router.get('/messages', getMessages);


export default router;