import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import Card from "./Card"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Pathway = () => {

  const navigate = useNavigate()

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const [moduleOpen, setModuleOpen] = useState(true)

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const modules = [
    {
      id: "tsf-8xk29a",
      title: "TypeScript Foundations",
      description: "Master TypeScript from the ground up — types, interfaces, generics, and advanced patterns used in production React codebases.",
      tags: ["TypeScript", "Generics", "Type Guards", "Utility Types"],
      duration: 12,
      track: "gap-fill",
      weeks: "1-2",
      reason: "Strong type systems reduce runtime errors and improve code maintainability, which is critical in scalable React applications."
    },
    {
      id: "arp-3mz91q",
      title: "Advanced React Patterns",
      description: "Deep dive into React 18 features: concurrent rendering, Suspense, custom hooks, compound components, and render optimisation.",
      tags: ["React 18", "useMemo", "useCallback", "Suspense"],
      duration: 10,
      track: "core",
      weeks: "2-3",
      reason: "Understanding advanced patterns enables building performant, reusable, and scalable component architectures."
    },
    {
      id: "rqdf-7pl42n",
      title: "React Query & Data Fetching",
      description: "Efficient server-state management using React Query, caching strategies, pagination, and real-time data synchronization.",
      tags: ["React Query", "Caching", "Pagination", "API State"],
      duration: 8,
      track: "core",
      weeks: "3-4",
      reason: "Efficient data handling minimizes unnecessary network calls and ensures consistent UI state across complex applications."
    },
    {
      id: "gql-5rt83k",
      title: "GraphQL & API Design",
      description: "Design scalable APIs with GraphQL, schema structuring, resolvers, and performance optimization techniques.",
      tags: ["GraphQL", "Schemas", "Resolvers", "API Design"],
      duration: 9,
      track: "advanced",
      weeks: "4-6",
      reason: "Well-designed APIs improve frontend-backend communication efficiency and allow flexible, scalable data querying."
    },
    {
      id: "cicd-1vn64p",
      title: "CI/CD & Testing Mastery",
      description: "Implement robust testing and deployment pipelines with unit testing, integration testing, and CI/CD workflows.",
      tags: ["Jest", "Testing Library", "CI/CD", "Automation"],
      duration: 9,
      track: "advanced",
      weeks: "6-8",
      reason: "Automation and testing ensure code reliability, faster releases, and reduced risk of production failures."
    }
  ]

  return (
    <div className="bg-background text-foreground p-4">
      <div>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft />
        </Button>
      </div>
      <div className="px-2.5 sm:px-4 py-6 w-full">
        <div className="text-muted-foreground text-sm">
          Learning pathway
        </div>
        <div className="pt-2.5 text-2xl">
          Your Adaptive Learning Pathway
        </div>
        <div className="mt-1.5 w-fit max-w-full flex flex-wrap items-center gap-2.5 text-muted-foreground text-sm">
          <div>8 weeks</div>
          <span>•</span>
          <div>5 modules</div>
          <span>•</span>
          <div>48 hours</div>
          <span>•</span>
          <div>37% shorter than standard onboarding</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-0 sm:px-4 py-4">
        <div className="md:sticky top-8 border h-fit w-full md:w-fit md:max-w-70 px-1.5 py-2.5 rounded-md">
          <div className="flex items-center justify-between gap-2.5">
            <div className="text-muted-foreground text-sm ml-2.5">Modules</div>
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setModuleOpen(prev => !prev)}
            >
              <span className={`duration-300 ${moduleOpen ? "" : "rotate-x-180"}`}>
                <ChevronDown />
              </span>
            </Button>
          </div>
          <div className={`overflow-hidden duration-300 ${moduleOpen ? "" : "max-h-0"}`}>
            { modules.map((m, i) => {
              return (
                <Button
                  key={i}
                  variant={"ghost"}
                  onClick={() => scrollToSection(i)}
                  className="h-fit max-w-75 w-full justify-start gap-2.5 p-2.5 text-sm whitespace-normal text-left"
                >
                  <div className="text-muted-foreground opacity-70">{i + 1}</div>
                  <div className="">{m.title}</div>
                </Button>
              )
            }) }
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          { modules.map((m, i) => (
            <div
              key={i}
              ref={(el) => {
                sectionRefs.current[i] = el
              }}
            >
              <Card
                id={m.id}
                title={m.title}
                description={m.description}
                tags={m.tags}
                duration={m.duration}
                track={m.track}
                weeks={m.weeks}
                reason={m.reason}
              />
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Pathway