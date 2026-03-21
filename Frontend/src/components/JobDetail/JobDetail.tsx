import { useState } from "react"
import { Check, Upload } from "lucide-react"
import { Button } from "../ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "../ui/field"
import { uploadResumeWithDetails } from "@/services/user.service"
import { useNavigate } from "react-router-dom"

const JobDetail = () => {
  const [resume, setResume] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [job, setJob] = useState("")
  const [experience, setExperience] = useState("")
  const [reason, setReason] = useState("")

  const navigate = useNavigate()

  const jobs = [
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager"
  ]

  const experiences = [
    "Junior (0-2 yrs)",
    "Mid (2-5 yrs)",
    "Senior (5+ yrs)"
  ]

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!resume) {
      toast("Resume required", {
        description:
          "Please upload your resume (PDF) before submitting the form"
      })
      return
    }

    if (!job) {
      toast("Job title missing", {
        description: "Select a job role to proceed"
      })
      return
    }

    if (!experience) {
      toast("Experience level missing", {
        description: "Select your experience level"
      })
      return
    }

    if (!reason || reason.trim().length < 50) {
      toast("Reason too short", {
        description: "Minimum 50 characters required to proceed"
      })
      return
    }

    try {
      setLoading(true)

      await uploadResumeWithDetails(
        resume,
        job,
        experience,
        reason
      )

      toast("Upload successful", {
        description: "Your resume has been uploaded and processed"
      })

      navigate("/dashboard")
    } catch (err) {
      toast("Upload failed", {
        description:
          "We couldn’t process your resume. Please try again"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 py-16 w-full grid place-items-center">
      <form
        onSubmit={handleUpload}
        className="p-4 w-full max-w-xl border rounded-md bg-card"
      >
        <div className="mb-4">
          <div className="text-2xl">Job Details</div>
          <div className="text-sm text-muted-foreground mt-1">
            Provide job information for better ATS analysis
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <div className="text-sm text-muted-foreground">
            Upload Your Resume
          </div>

          <div className="p-6 border bg-input/30 rounded-md flex flex-col items-center justify-center">
            <Upload className="text-muted-foreground" />
            <div>Resume</div>
            <div className="mt-1 text-sm text-muted-foreground">
              PDF only
            </div>

            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="resumeUpload"
              disabled={loading}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setResume(e.target.files[0])
                }
              }}
            />

            <label htmlFor="resumeUpload">
              <Button asChild className="mt-3" disabled={loading}>
                <span className="flex items-center gap-2 cursor-pointer">
                  <Upload />
                  {resume ? resume.name : "Choose File"}
                </span>
              </Button>
            </label>
          </div>
        </div>

        <FieldSet>
          <FieldGroup>
            <div className="flex flex-col sm:flex-row gap-4">
              <Field>
                <FieldLabel className="text-sm text-muted-foreground">
                  Job Title
                </FieldLabel>
                <Select value={job} onValueChange={setJob}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job title" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobs.map((j, i) => (
                      <SelectItem key={i} value={j}>
                        {j}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel className="text-sm text-muted-foreground">
                  Your Experience
                </FieldLabel>
                <Select
                  value={experience}
                  onValueChange={setExperience}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experiences.map((e, i) => (
                      <SelectItem key={i} value={e}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <Field>
              <FieldLabel className="text-sm text-muted-foreground">
                Reason to Apply
              </FieldLabel>

              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter here..."
                className="min-h-36 w-full"
              />

              <FieldDescription className="flex justify-between text-xs text-muted-foreground">
                <span>Minimum 50 characters required</span>
                <span>
                  {reason.length < 50
                    ? `${50 - reason.length} more chars needed`
                    : <Check size={16} />}
                </span>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        <div className="mt-6 flex justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setResume(null)
              setJob("")
              setExperience("")
              setReason("")
            }}
          >
            Reset
          </Button>

          <Button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.25 text-sm text-muted-foreground">
          Want to skip?
          <Button variant="link" className="px-0">
            Fill with demo data
          </Button>
        </div>
      </form>
    </div>
  )
}

export default JobDetail