import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { Progress } from "../ui/progress";

function SkillGap() {
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
    { statTitle: "Content Skipped", statValue: "37%", statMessage: "vs. standard onboarding" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between p-2 sm:p-6 rounded-lg">
        <div className="mb-4 sm:mb-0">
          <span className="text-muted-foreground text-base/relaxed">Skill Gap Analysis</span>
          <h1 className="text-3xl/relaxed font-share-tech mt-1">Resume vs. {role}</h1>
          <span className="text-base/relaxed text-muted-foreground">{organisation} • Analyzed {time}</span>
        </div>
        <div>
          <Button>View Pathway</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 flex flex-wrap justify-start gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="h-[11rem] w-full sm:w-[20rem]">
            {/* Keep internal UI unchanged */}
            {/* <div className="h-full">stat card content</div> */}
            <div className="h-[11rem] w-[20rem] border rounded-xl bg-card pl-5 pt-5 text-base/relaxed">
              <h2 className="text-muted-foreground">{stat.statTitle}</h2>
              <h1 className="text-foreground text-4xl/normal">{stat.statValue}</h1>
              <h1 className="text-muted-foreground">{stat.statMessage}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* MiniNav Tabs */}
      <div className="mt-8">
        <div className="flex flex-row flex-wrap text-[1rem] gap-2 sm:gap-6 overflow-x-auto">
          {miniNav.map((nav, index) => (
            <div
              key={index}
              className={`border-b-2 pb-1 px-2 cursor-pointer transition-colors duration-200
                ${activeTab === index
                  ? "border-popover-foreground text-white font-semibold"
                  : "border-transparent text-muted-foreground hover:text-white hover:border-gray-500"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {nav.miniNavTitle}
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Skills Content */}
        <div className="border rounded-xl p-4 bg-card overflow-x-auto">
          {miniNav.map((nav, index) => {
            if (index !== activeTab) return null;
            const skills = nav.content;
            return (
              <div key={index} className="space-y-2 min-w-[300px]">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-1 text-center"
                  >
                    <span>{skill.skillTitle}</span>
                    <Progress value={skill.progress} className="w-[80%] mt-2" />
                    <span>{skill.progress}%</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillGap;