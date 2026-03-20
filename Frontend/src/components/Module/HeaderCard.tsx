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

const HeaderCard = (cardInfo: props) => {

    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <div className="flex items-center gap-2.5 justify-between">
                <div className="flex items-center gap-2.5 ">
                    <div className="capitalize px-2.5 py-1.25 bg-muted text-xs rounded-sm">{cardInfo.track}</div>
                    <div className="text-xs text-muted-foreground">{cardInfo.duration + " hours"}</div>
                </div>

                <div>
                    <Dialog
                        open={dialogOpen}
                        onOpenChange={setDialogOpen}
                    >
                        <DialogTrigger asChild>
                            <Button
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
            <div className="px-2.5 py-6">
                <div className="text-2xl">{cardInfo.title}</div>
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
        </>
    )
}

export default HeaderCard