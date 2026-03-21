import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SkillGapAnalysisResponse } from "@/types/skillGap";

interface CourseContextType {
  output: SkillGapAnalysisResponse | undefined
  setOutput: React.Dispatch<React.SetStateAction<SkillGapAnalysisResponse | undefined>>
}

const OutputContext = createContext<CourseContextType | null>(null);

export const OutputProvider = ({ children }: { children: ReactNode }) => {
  const [output, setOutput] = useState<SkillGapAnalysisResponse | undefined>(undefined);

  return (
    <OutputContext.Provider value={{ output, setOutput }}>
      {children}
    </OutputContext.Provider>
  );
};

export const useOutput = () => {
  const context = useContext(OutputContext);
  if (!context) {
    throw new Error("useOutput must be used within a OutputProvider");
  }
  return context;
};