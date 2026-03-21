export interface Course {
  course_id: string;
  title: string;
  level: string;
  category: string;
  description: string;
  learning_outcomes: string[];
  prerequisites: string[];
  estimated_duration_hours: number;
  tags: string[];
}