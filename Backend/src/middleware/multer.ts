import multer from "multer"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "./cloudinary"

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: `threads/${req.user_id}`,
    resource_type: "raw",
    format: "pdf"
  })
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
})

export default upload