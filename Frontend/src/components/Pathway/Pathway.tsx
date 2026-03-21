import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import Card from "./Card"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCourses } from "@/context/CourseContext"

const Pathway = () => {

  const navigate = useNavigate()

  const { courses } = useCourses()

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const [moduleOpen, setModuleOpen] = useState(true)

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const totalHours = courses.reduce((sum, c) => sum + (c.estimated_duration_hours || 0), 0)

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
          <div>
            {totalHours < 24 ? `${totalHours} hours` : `${totalHours / 24} weeks`}
          </div>
          <span>•</span>
          <div>{courses.length} modules</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-0 sm:px-4 py-4">
        <div className="md:sticky top-8 border h-full max-h-75 sm:max-h-[calc(100vh-64px)] w-full md:w-fit md:min-w-55 md:max-w-80 rounded-md overflow-auto">
          <div className="h-fit w-full px-1.5 py-2.5">
            <div className="flex items-center justify-between gap-2.5">
              <div className="text-muted-foreground text-sm ml-2.5">Courses</div>
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
              { courses && courses.length > 0 ? courses.map((c, i) => {
                return (
                  <Button
                    key={c.course_id}
                    variant={"ghost"}
                    onClick={() => scrollToSection(i)}
                    className="h-fit max-w-75 w-full justify-start gap-2.5 p-2.5 text-sm whitespace-normal text-left"
                  >
                    <div className="text-muted-foreground opacity-70">{i + 1}</div>
                    <div className="">{c.title}</div>
                  </Button>
                )
              }) : (
                <div className="w-full h-24 grid place-items-center text-sm text-muted-foreground">
                  No courses to show
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center flex-col gap-8">
          {courses && courses.length > 0 ? courses.map((course, i) => (
            <div
              key={i}
              ref={(el) => {
                sectionRefs.current[i] = el
              }}
              className="w-full max-w-240"
            >
              <Card
                key={course.course_id}
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
          )) : (
            <div className="w-full h-37.5 grid place-items-center bg-card border rounded-md text-sm text-muted-foreground">No courses to show</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pathway