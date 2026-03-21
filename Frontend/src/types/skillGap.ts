export interface SkillGapAnalysisResponse {
  candidate_name: string
  skill_gap_analysis_data: {
    job_title: string
    candidate_name: string | null
    analyzed_gaps: {
      skill_name: string
      gap_type: "missing_foundation" | "partial_gap" | "advanced_gap"
      priority: "low" | "medium" | "high"
      reasoning: string
      target_competency: string
    }[]
    is_fresher_adaptation_needed: boolean
    executive_summary: string
  }
  mermaid_code: string
  final_roadmap: {
    candidate_name: string
    onboarding_summary: string
    roadmap: {
      course_id: string
      is_foundation: boolean
      reasoning: string
      sequence_order: number
      title: string
    }[]
    target_role: string
  }
}