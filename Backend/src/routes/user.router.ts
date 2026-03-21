import { Router } from "express"
import upload from "../middleware/multer"
import { uploadResume } from "../controllers/user.controller"

const userRouter = Router()

userRouter.post("/upload", upload.single("file"), uploadResume)

export default userRouter