import { ArrowLeft, Check } from "lucide-react"
import { Button } from "../ui/button"
import HeaderCard from "./HeaderCard"
import { useNavigate, useParams } from "react-router-dom"

function ModulesDocs() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const modules = [
        {
            id: "tsf-8xk29a",
            title: "TypeScript Foundations",
            description: "Master TypeScript from the ground up — types, interfaces, generics, and advanced patterns used in production React codebases.",
            tags: ["TypeScript", "Generics", "Type Guards", "Utility Types"],
            duration: 12,
            track: "gap-fill",
            weeks: "1-2",
            reason: "Strong type systems reduce runtime errors and improve code maintainability, which is critical in scalable React applications.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis."
        },
        {
            id: "arp-3mz91q",
            title: "Advanced React Patterns",
            description: "Deep dive into React 18 features: concurrent rendering, Suspense, custom hooks, compound components, and render optimisation.",
            tags: ["React 18", "useMemo", "useCallback", "Suspense"],
            duration: 10,
            track: "core",
            weeks: "2-3",
            reason: "Understanding advanced patterns enables building performant, reusable, and scalable component architectures.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis."
        },
        {
            id: "rqdf-7pl42n",
            title: "React Query & Data Fetching",
            description: "Efficient server-state management using React Query, caching strategies, pagination, and real-time data synchronization.",
            tags: ["React Query", "Caching", "Pagination", "API State"],
            duration: 8,
            track: "core",
            weeks: "3-4",
            reason: "Efficient data handling minimizes unnecessary network calls and ensures consistent UI state across complex applications.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis."
        },
        {
            id: "gql-5rt83k",
            title: "GraphQL & API Design",
            description: "Design scalable APIs with GraphQL, schema structuring, resolvers, and performance optimization techniques.",
            tags: ["GraphQL", "Schemas", "Resolvers", "API Design"],
            duration: 9,
            track: "advanced",
            weeks: "4-6",
            reason: "Well-designed APIs improve frontend-backend communication efficiency and allow flexible, scalable data querying.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis."
        },
        {
            id: "cicd-1vn64p",
            title: "CI/CD & Testing Mastery",
            description: "Implement robust testing and deployment pipelines with unit testing, integration testing, and CI/CD workflows.",
            tags: ["Jest", "Testing Library", "CI/CD", "Automation"],
            duration: 9,
            track: "advanced",
            weeks: "6-8",
            reason: "Automation and testing ensure code reliability, faster releases, and reduced risk of production failures.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero ipsam placeat optio eum, tempora debitis id hic adipisci, possimus nesciunt iure ad ipsa, aliquam nisi repellendus! Exercitationem, quam quis."
        }
    ]

    return (
        <div className="bg-background text-foreground p-4">
            <div>
                <Button variant={"outline"} size={"icon"} onClick={() => (navigate("/pathway"))}>
                    <ArrowLeft />
                </Button>
            </div>
            <div className="px-2.5 sm:px-4 py-4 w-full">
                {modules.map((m, i) => {
                    if (m.id === id) {
                        return (
                            <HeaderCard
                                key={i}
                                id={m.id}
                                title={m.title}
                                description={m.description}
                                tags={m.tags}
                                duration={m.duration}
                                track={m.track}
                                weeks={m.weeks}
                                reason={m.reason}
                            />
                        )
                    }
                })}
            </div>
            <div className="pt-4 grid place-items-center">
                <div className="w-full max-w-225 rounded-md p-4 border">
                    {modules.map((m, i) => {
                        if (m.id === id) {
                            return (
                                <div
                                    key={i}
                                >
                                    {m.content}
                                </div>
                            )
                        }
                    })}
                    <div className="mt-5 w-full flex justify-end">
                        <Button>
                            <Check />
                            Mark as completed
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModulesDocs