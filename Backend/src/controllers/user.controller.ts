import { Request, Response } from "express"
import { FormModel } from "../middleware/JobSchema"
import api from "../services/axios.config"

export const uploadResume = async (req: Request, res: Response) => {
  try {
    const file = req.file as any
    if(!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      })
    }
    const { job, experience, reason } = req.body
    if (!job || !experience || !reason) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      })
    }
    if (reason.trim().length < 50) {
      return res.status(400).json({
        success: false,
        message: "Reason must be at least 50 characters"
      })
    }
    const newEntry = new FormModel({
      resumeUrl: file.path,
      jobTitle: job,
      experience,
      reason
    })
    await newEntry.save()
    res.status(200).json({
      success: true,
      data: newEntry
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export const modules = async (req: Request, res: Response) => {
  try {
    const response = await api.get("/modules")
    res.status(200).json({
      success: true,
      data: response.data
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch modules"
    })
  }
}