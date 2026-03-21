export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Course {
  course_id: string;
  title: string;
  level: CourseLevel;
  category: string;
  description: string;
  learning_outcomes: string[];
  prerequisites: string[];
  estimated_duration_hours: number;
  tags: string[];
}