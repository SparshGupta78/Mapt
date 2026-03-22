import { Request, Response } from "express"
import { FormModel } from "../middleware/JobSchema"
import api from "../services/axios.config"
import User from "../model/user.model"
import UserType from "../types/userAuth.type"

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
    const response = await api.post("", { user_id: req.user_id, job, experience, reason })
    res.status(200).json({
      success: true,
      data: response.data
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export const markModuleComplete = async (req: Request, res: Response) => {
  try {
    const user = req.user as Omit<UserType, 'notes'> | undefined
    const { moduleId } = req.body

    if (!user || !moduleId) {
      return res.status(400).json({ error: "moduleId is required" })
    }

    const updatedUser = await User.findByIdAndUpdate(
      {username: user.username},
      { $addToSet: { completedModules: moduleId } },
      { new: true }
    )
    if (!updatedUser) return res.status(500).json({error: "Internal server error"})
    return res.status(200).json({
      message: "Module marked as completed",
      completedModules: updatedUser.completedModules
    })

  } catch (err) {
    return res.status(500).json({
      error: "Failed to mark module as complete"
    })
  }
}