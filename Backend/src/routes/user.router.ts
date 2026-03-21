import { Router } from "express"
import upload from "../middleware/multer"
import { courses, uploadResume } from "../controllers/user.controller"

const userRouter = Router()

userRouter.post("/upload", upload.single("file"), uploadResume)
userRouter.post("/courses", courses)

export default userRouter