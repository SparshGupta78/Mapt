import React, { createContext, useContext, useState } from "react";
import type { Course } from "@/types/courseTypes";
import type { ReactNode } from "react";

interface CourseContextType {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  getCourseById: (id: string) => Course | undefined;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getCourseById = (id: string) => courses.find((c) => c.course_id === id)

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        getCourseById
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};