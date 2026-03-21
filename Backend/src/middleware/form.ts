import mongoose, { Schema, Document } from "mongoose";

export interface IForm extends Document {
  resumeUrl: string;
  jobTitle: string;
  experience: string;
  reason: string;
}

const FormSchema = new Schema(
  {
    resumeUrl: { type: String, required: true },
    jobTitle: { type: String, required: true },
    experience: { type: String, required: true },
    reason: { type: String, required: true },
  },
  { timestamps: true }
);

export const FormModel = mongoose.model<IForm>("Form", FormSchema);