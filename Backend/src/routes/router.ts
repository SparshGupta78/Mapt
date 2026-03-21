import { Request, Response, Router } from "express";
import dotenv from "dotenv";
import upload from "../middleware/multer";
import { FormModel } from "../middleware/form";
import multer = require("multer")

import { signup } from "../login/signup.controller";
import { login } from "../login/login.controller";;

dotenv.config();

const router = Router()


router.post("/signup", signup);
router.post("/login", login);

router.post(
  "/upload",
  upload.single("file"), // only one file named "file"
  async (req, res) => {
    try {
      console.log("BODY:", req.body); // jobTitle, experience, reason
      console.log("FILE:", req.file); // uploaded file

      const file = req.file as any;
      if (!file) return res.status(400).json({ message: "No file uploaded" });

      const { jobTitle, experience, reason } = req.body;

      const newEntry = new FormModel({
        resumeUrl: file.path,
        jobTitle,
        experience,
        reason,
      });

      await newEntry.save();

      res.json({ success: true, data: newEntry });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error" });
    }
  }
);

router.get('/', (req: Request, res: Response) => {
  res.status(200).send("hello paji")
})

export default router