import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type props = {
  id: string,
  title: string,
  description: string,
  tags: string[],
  duration: number,
  track: string,
  weeks: string,
  reason: string
}

const Card = (cardInfo: props) => {

  const [dialogOpen, setDialogOpen] = useState(false)

  const navigate = useNavigate();

  return (
    <div>
      <div className="text-xs my-2.5 flex items-center gap-2.5">
        <span className="whitespace-nowrap text-muted-foreground">{cardInfo.weeks} weeks</span>
        <hr className="w-full" />
      </div>
      <div className="p-3 bg-card rounded-md">
        <div className="flex items-center gap-2.5">
          <div className="capitalize px-2.5 py-1.25 bg-muted text-xs rounded-sm">{cardInfo.track}</div>
          <div className="text-xs text-muted-foreground">{cardInfo.duration + " hours"}</div>
        </div>
        <div className="px-2.5 py-6">
          <div className="text-xl">{cardInfo.title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{cardInfo.description}</div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cardInfo.tags.length > 0 && cardInfo.tags.map((tag, i) => (
            <div
              key={i}
              className="px-2.5 py-1.25 bg-muted text-xs rounded-sm"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Button className="w-full sm:w-fit" onClick={()=>(navigate(`/pathway/${cardInfo.id}`))}>
            Start module
          </Button>
          <Dialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}  
          >
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="w-full sm:w-fit"
              >
                Why this module?
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-muted-foreground text-sm">Why this module?</DialogTitle>
                <div className="w-full mt-1.5">
                  <div className="text-lg">
                    {cardInfo.title}
                  </div>
                  <div className="mt-4 text-muted-foreground">
                    {cardInfo.reason}
                  </div>
                  <DialogDescription className="mt-4 w-full flex justify-end">
                    <DialogClose asChild>
                      <Button variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogDescription>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Card