import mongoose from "mongoose"

const SkillGapSchema = new mongoose.Schema(
  {
    skill_name: { type: String, required: true },
    gap_type: { type: String, required: true },
    priority: { type: String, required: true },
    reasoning: { type: String, required: true },
    target_competency: { type: String, required: true },
  },
  { _id: false }
)

const RoadmapItemSchema = new mongoose.Schema(
  {
    course_id: { type: String, required: true },
    is_foundation: { type: Boolean, required: true },
    reasoning: { type: String, required: true },
    sequence_order: { type: Number, required: true },
    title: { type: String, required: true },
  },
  { _id: false }
)

const AnalysisSchema = new mongoose.Schema(
  {
    candidate_name: { type: String },

    skill_gap_analysis_data: {
      job_title: { type: String, required: true },
      analyzed_gaps: [SkillGapSchema],
      is_fresher_adaptation_needed: { type: Boolean },
      executive_summary: { type: String },
    },

    mermaid_code: { type: String },

    final_roadmap: {
      onboarding_summary: { type: String },
      target_role: { type: String },
      roadmap: [RoadmapItemSchema],
    },
  },
  { _id: false }
)

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    analyses: [AnalysisSchema],
    completedModules: [{ type: String }],
  },
  { timestamps: true }
)

export default mongoose.model("User", UserSchema)