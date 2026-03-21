import { Router } from "express";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import { auth } from "../middleware/auth.middleware";

const router = Router()

router.use('/auth', authRouter)
router.use("/user", auth, userRouter)

export default router