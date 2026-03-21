import { Button } from "../ui/button"
import Beams from "../Background/Beams"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-transparent text-foreground">
      <div className="relative h-dvh overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Beams />
        </div>
        <div className="p-4 grid h-full place-items-end sm:place-items-center">
          <div className="mb-10 sm:mb-0 flex flex-col gap-2.5">
            <div className="text-6xl font-semibold">Mapt</div>
            <div className="text-lg text-muted-foreground">
              Making corporate onboarding engaging, efficient, and personalized
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <Button
                variant="outline"
                className="p-5"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                  })
                }}
              >
                Explore more
              </Button>
              <Button
                className="p-5"
                onClick={() => navigate("/job-details")}
              >
                Fill Job Details
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent to-background"></div>
      </div>
      <div className="px-4 py-16 w-full grid place-items-center">
        
      </div>
    </div>
  )
}

export default Home