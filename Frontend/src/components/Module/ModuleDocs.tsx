import { ArrowLeft, Check } from "lucide-react"
import { Button } from "../ui/button"
import HeaderCard from "./HeaderCard"
import { useNavigate, useParams } from "react-router-dom"
import catalog from "@/lib/Catalog"


function ModulesDocs() {

    const navigate = useNavigate()
    const { id } = useParams()

    const course = id ? catalog.find((c) => c.course_id === id) : undefined;

    if (!course) {
        return <div className="p-4 w-full h-dvh grid place-items-center text-muted-foreground">Course not found</div>;
    }

    return (
        <div className="bg-background text-foreground p-4">
            <div>
                <Button variant={"outline"} size={"icon"} onClick={() => (navigate("/pathway"))}>
                    <ArrowLeft />
                </Button>
            </div>
            <div className="px-2.5 sm:px-4 py-4 w-full">
                <HeaderCard
                    course_id={course.course_id}
                    title={course.title}
                    description={course.description}
                    learning_outcomes={course.learning_outcomes}
                    level={course.level}
                    category={course.category}
                    estimated_duration_hours={course.estimated_duration_hours}
                    prerequisites={course.prerequisites}
                    tags={course.tags}
                />
            </div>
            <div className="pt-4 grid place-items-center">
                <div className="w-full max-w-225 rounded-md p-4 border">

                    <div className="">
                        <div className="pt-4 pb-2 text-muted-foreground" >Prerequisite</div>
                        {course.prerequisites.map((prerequisite, i) => (
                            <div key={i} className="pb-1">• {prerequisite}</div>
                        ))}
                    </div>

                    <div>
                        <div className="pt-4 pb-2 text-muted-foreground">Description</div>
                        {course.description}
                    </div>
                    <div className="pt-5">
                        <div className="pt-4 pb-2 text-muted-foreground" >Learning Outcomes</div>
                        {course.learning_outcomes.map((outcome, i) => (
                            <div key={i} className="pb-1">• {outcome}</div>
                        ))}
                    </div>
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