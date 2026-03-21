import { Button } from "../ui/button";
import { useState } from "react";
import { Progress } from "../ui/progress";
import { useNavigate } from "react-router-dom";
import MermaidDiagram from "./MermaidDiagram";

function Dashboard() {

  const navigate = useNavigate()
  const [zoom, setZoom] = useState(1);

//   const code = `
// flowchart LR

// %% ===== START =====
// A([Start — Candidate Entry]):::start

// %% ===== WEEK 1 =====
// subgraph W1["Week 1 — Fundamentals"]
// B1[HTML Basics]:::known
// B2[CSS Basics]:::known
// B3[JS Basics]:::gap
// B4[Git & GitHub]:::gap
// end

// %% ===== WEEK 2 =====
// subgraph W2["Week 2 — Core Development"]
// C1[Advanced JS]:::gap
// C2[Async JS]:::gap
// C3[DOM Manipulation]:::known
// C4[Mini Project 1]:::gap
// end

// %% ===== WEEK 3 =====
// subgraph W3["Week 3 — Frontend Framework"]
// D1[React Basics]:::gap
// D2[Components & Props]:::gap
// D3[State & Hooks]:::gap
// D4[Routing]:::gap
// D5[Mini Project 2]:::gap
// end

// %% ===== WEEK 4 =====
// subgraph W4["Week 4 — Backend Intro"]
// E1[Node.js Basics]:::gap
// E2[Express.js]:::gap
// E3[REST APIs]:::gap
// E4[MongoDB Basics]:::gap
// E5[Mini Project 3]:::gap
// end

// %% ===== WEEK 5 =====
// subgraph W5["Week 5 — Advanced Backend"]
// F1[Authentication JWT]:::gap
// F2[Authorization]:::gap
// F3[Advanced DB Design]:::gap
// F4[Caching Redis]:::gap
// end

// %% ===== WEEK 6 =====
// subgraph W6["Week 6 — DevOps"]
// G1[Docker Basics]:::gap
// G2[Docker Compose]:::gap
// G3[CI/CD Basics]:::gap
// G4[GitHub Actions]:::gap
// end

// %% ===== WEEK 7 =====
// subgraph W7["Week 7 — System Design"]
// H1[Scalability Basics]:::gap
// H2[Load Balancing]:::gap
// H3[Microservices Intro]:::gap
// H4[System Design Case Study]:::gap
// end

// %% ===== WEEK 8 =====
// subgraph W8["Week 8 — Production"]
// I1[Monitoring]:::gap
// I2[Logging]:::gap
// I3[Security Best Practices]:::gap
// I4[Deployment]:::gap
// I5[Final Project]:::gap
// end

// %% ===== END =====
// Z([Role Ready — Full Stack Developer]):::done

// %% ===== CONNECTIONS =====
// A --> B1 & B2 & B3 & B4

// B1 --> C1
// B2 --> C1
// B3 --> C2
// B4 --> C4

// C1 --> D1
// C2 --> D3
// C3 --> D2
// C4 --> D5

// D1 --> E1
// D2 --> E2
// D3 --> E3
// D5 --> E5

// E1 --> F1
// E2 --> F2
// E3 --> F3
// E4 --> F3
// E5 --> F4

// F1 --> G1
// F2 --> G2
// F3 --> G3
// F4 --> G4

// G1 --> H1
// G2 --> H2
// G3 --> H3
// G4 --> H4

// H1 --> I1
// H2 --> I2
// H3 --> I3
// H4 --> I4

// I1 --> I5
// I2 --> I5
// I3 --> I5
// I4 --> I5

// I5 --> Z

// %% ===== STYLES =====
// classDef gap   fill:#1e293b,stroke:#6366f1,color:#e2e8f0
// classDef known fill:#064e3b,stroke:#10b981,color:#d1fae5
// classDef start fill:#0f766e,stroke:#14b8a6,color:#ecfeff
// classDef done  fill:#4338ca,stroke:#6366f1,color:#eef2ff
// `;
  
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