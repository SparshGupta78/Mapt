import { Router } from "express"
import upload from "../middleware/multer"
import { uploadResume } from "../controllers/user.controller"
import { userID } from "../middleware/userID"

const userRouter = Router()

userRouter.post("/upload", userID, upload.single("file"), uploadResume)

export default userRouter