import { Router } from "express"
import upload from "../middleware/multer"
import { modules, uploadResume } from "../controllers/user.controller"

const userRouter = Router()

userRouter.post("/upload", upload.single("file"), uploadResume)
userRouter.post("/module", modules)

export default userRouter