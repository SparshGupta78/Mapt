import { Button } from "../ui/button";
import { useState } from "react";
import { Progress } from "../ui/progress";
import { useNavigate } from "react-router-dom";
import MermaidDiagram from "./MermaidDiagram";

function Dashboard() {

  const navigate = useNavigate()
  const [zoom, setZoom] = useState(1);
  
const code = `flowchart TD
    A([Start — current skills]):::start
    subgraph W1["Week 1 — Core Python"]
      B[CS-PY-101
Python Programming Fundamentals]:::gap
    end
    subgraph W2["Week 2 — Backend frameworks"]
      C[CS-FAST-101
REST API Development with FastAPI]:::gap
    end
    subgraph W3["Week 3 — Data layer"]
      D[CS-DB-101
SQL Fundamentals for Backend Developers]:::gap
    end
    subgraph W4["Week 4 — Deployment ready"]
      E[CS-DOCKER-101
Docker & Containerization Fundamentals]:::gap
    end
    Z([Role-ready — Backend Developer]):::done
    A --> B
    B --> C
    C --> D
    D --> E
    E --> Z
    classDef gap   fill:#EEEDFE,stroke:#534AB7,color:#26215C
    classDef known fill:#E1F5EE,stroke:#0F6E56,color:#085041
    classDef start fill:#1D9E75,stroke:#0F6E56,color:#E1F5EE
    classDef done  fill:#534AB7,stroke:#3C3489,color:#EEEDFE`

const time = "4hrs ago";
  const organisation = "Acme Corp";
  const role = "Senior Frontend Engineer";

  const miniNav = [
    {
      miniNavTitle: "Critical Gap",
      content: [
        { skillTitle: "Skill 1", progress: 5 },
        { skillTitle: "Skill 2", progress: 10 },
        { skillTitle: "Skill 3", progress: 40 },
        { skillTitle: "Skill 4", progress: 20 },
      ],
    },
    {
      miniNavTitle: "Partial Matches",
      content: [
        { skillTitle: "Skill 1", progress: 40 },
        { skillTitle: "Skill 2", progress: 45 },
        { skillTitle: "Skill 3", progress: 50 },
        { skillTitle: "Skill 4", progress: 55 },
      ],
    },
    {
      miniNavTitle: "Strong Matches",
      content: [
        { skillTitle: "Skill 1", progress: 85 },
        { skillTitle: "Skill 2", progress: 80 },
        { skillTitle: "Skill 3", progress: 70 },
        { skillTitle: "Skill 4", progress: 95 },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { statTitle: "Readiness Score", statValue: "64%", statMessage: "13 of 21 skills matched" },
    { statTitle: "Critical Gaps", statValue: "4", statMessage: "High Priority Skills to acquire" },
    { statTitle: "Training Time", statValue: "8 wks", statMessage: "Estimated to reach compentency" },
    { statTitle: "Content Skipped", statValue: "37%", statMessage: "vs. standard onboarding" }
  ];

  return (
    <div className="bg-background min-h-screen text-foreground p-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2.5 sn:px-4 py-4 rounded-lg">
        <div>
          <span className="text-muted-foreground text-sm">Skill Gap Analysis</span>
          <h1 className="text-2xl mt-2.5">Resume vs. {role}</h1>
          <span className="text-sm text-muted-foreground">{organisation} • Analyzed {time}</span>
        </div>
        <div className="w-full sm:w-fit flex justify-end">
          <Button
            onClick={() => navigate("/pathway")}
          >
            View Pathway
          </Button>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-10">


        <div className="">

          <div className="sm:px-4 py-6 w-full flex flex-wrap justify-start gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="w-full sm:w-fit sm:min-w-40 md:max-w-60 border rounded-md bg-card p-5 grow shrink">
                <h2 className="text-muted-foreground">{stat.statTitle}</h2>
                <h1 className="text-foreground text-2xl py-2.5">{stat.statValue}</h1>
                <h1 className="text-muted-foreground text-sm">{stat.statMessage}</h1>
              </div>
            ))}
          </div>


          <div className="sm:p-4">
            <div className="w-full overflow-x-scroll no-scrollbar">
              <div className="w-fit flex flex-row text-sm gap-2.5">
                {miniNav.map((nav, index) => (
                  <div
                    key={index}
                    className={`pb-1.5 px-2 whitespace-nowrap cursor-default duration-300
                  ${activeTab === index
                        ? "border-b-2 border-muted-foreground font-semibold"
                        : "border-transparent text-muted-foreground hover:text-white hover:border-gray-500"
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {nav.miniNavTitle}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-md p-4 bg-card overflow-x-auto">
              {miniNav.map((nav, index) => {
                if (index !== activeTab) return null;
                const skills = nav.content;
                return (
                  <div key={index} className="space-y-2 w-full">
                    {skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-4 py-1"
                      >
                        <span className="whitespace-nowrap w-fit">{skill.skillTitle}</span>
                        <Progress value={skill.progress} className="w-full" />
                        <span>{skill.progress}%</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="w-full sm:w-120 border bg-card rounded-md">
          {/* Controls */}
          <div className="flex gap-2 p-2 border-b">
            <Button className="text-center" variant={"secondary"} onClick={() => setZoom(z => z + 0.2)}>+</Button>
            <Button className="text-center" variant={"secondary"} onClick={() => setZoom(z => Math.max(0.4, z - 0.2))}>-</Button>
          </div>

          {/* Zoom Container */}
          <div className="overflow-auto h-[70dvh]">
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top left",
                width: "fit-content"
              }}
            >
              <MermaidDiagram code={code} />
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default Dashboard
