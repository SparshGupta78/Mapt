import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Progress } from "../ui/progress"
import { useNavigate } from "react-router-dom"
import MermaidDiagram from "./MermaidDiagram"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useOutput } from "@/context/CourseContext"
import { FileX } from "lucide-react"

function Dashboard() {
  const { output } = useOutput()
  const navigate = useNavigate()
  const [zoom, setZoom] = useState(1)

  if (!output) {
    return (
      <div className="flex items-center justify-center py-20">
        <Card className="w-full max-w-md text-center">
          <CardContent className="flex flex-col items-center gap-4 p-8">
            <div className="p-3 rounded-full bg-muted">
              <FileX className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                No Content Available
              </h3>
              <p className="text-sm text-muted-foreground">
                Upload your resume and details to see insights and roadmap here.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const candidateName = output.candidate_name || output.final_roadmap?.candidate_name
  const role = output.skill_gap_analysis_data.job_title
  const summary = output.skill_gap_analysis_data.executive_summary
  const gaps = output.skill_gap_analysis_data.analyzed_gaps
  const high = gaps.filter(g => g.priority === "high").length
  const medium = gaps.filter(g => g.priority === "medium").length
  const readiness = Math.max(0, 100 - (high * 20 + medium * 10))
  const trainingWeeks = output.final_roadmap.roadmap.length

  const statsConfig = [
    {
      label: "Readiness",
      value: `${readiness}%`
    },
    {
      label: "Critical Gaps",
      value: high
    },
    {
      label: "Training Time",
      value: `${trainingWeeks} wks`
    },
    {
      label: "Adaptation",
      value: output.skill_gap_analysis_data.is_fresher_adaptation_needed
        ? "Fresher Adaptation"
        : "Standard",
      small: true
    }
  ]

  return (
    <div className="bg-background min-h-screen text-foreground p-4">
      <div className="p-4">
        <div className="w-full flex justify-between items-center gap-2.5">
          <div className="text-muted-foreground text-sm">
            Skill Gap Analysis
          </div>
          <Button onClick={() => navigate("/pathway")}>
            View Pathway
          </Button>
        </div>
        <div className="text-2xl mt-4">
          {candidateName} vs. {role}
        </div>
        <div className="text-sm text-muted-foreground mt-2 w-full">
          {summary}
        </div>
      </div>
      <div className="p-4 flex flex-col-reverse sm:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsConfig.map((item, i) => (
              <Card key={i}>
                <CardContent>
                  <div className="text-muted-foreground text-sm">
                    {item.label}
                  </div>
                  <div className={`mt-2.5 ${item.small ? "text-sm" : "text-2xl font-semibold"}`}>
                    {item.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="p-4 space-y-6">
              <h2 className="text-sm font-medium text-muted-foreground">
                Critical Skill Gaps
              </h2>
              {gaps.map((gap, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {gap.skill_name}
                    </span>
                    <Badge
                      variant={
                        gap.priority === "high" ? "destructive" : "secondary"}
                    >
                      {gap.priority}
                    </Badge>
                  </div>
                  <Progress
                    value={
                      gap.priority === "high" ? 25 : 50
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    {gap.reasoning}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">
                      Target:
                    </span>{" "}
                    {gap.target_competency}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE (MERMAID) */}
        <div className="w-full sm:w-105 border bg-card rounded-md">
          <div className="flex justify-end gap-2.5 p-2 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(z => z + 0.2)}
            >
              <Plus />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setZoom(z => Math.max(0.4, z - 0.2))
              }
            >
              <Minus />
            </Button>
          </div>

          <div className="p-2.5 flex justify-center overflow-auto max-h-[70dvh]">
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top left",
                width: "fit-content"
              }}
            >
              <MermaidDiagram code={output.mermaid_code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard