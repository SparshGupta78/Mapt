import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field";
import Beams from "../Background/Beams";

const Home = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const jobs = [
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
  ];

  const experiences = [
    "Junior (0-2 yrs)",
    "Mid (2-5 yrs)",
    "Senior (5+ yrs)",
  ];

  const handleUpload = async () => {
    if (!resume) {
      alert("Please select a resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", resume);

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setUploadedUrl(data.file);

    } catch (err) {
      console.error(err);
      setError("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-transparent text-foreground">
      
      {/* Hero Section */}
      <div className="relative h-dvh overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Beams />
        </div>

        <div className="p-4 grid h-full place-items-end sm:place-items-center">
          <div className="mb-10 sm:mb-0 flex flex-col gap-2.5">
            <div className="text-6xl font-semibold">Mapt</div>

            <div className="text-lg text-muted-foreground">
              Making corporate onboarding engaging, efficient, and personalized.
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <Button
                variant="outline"
                className="p-5"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
              >
                Get Started
              </Button>
              <Button className="p-5">View Roadmap</Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Form Section */}
      <div className="px-4 py-16 w-full grid place-items-center">
        <div className="p-4 w-full max-w-xl border rounded-md bg-card">

          {/* Header */}
          <div className="mb-4">
            <div className="text-2xl">Job Details</div>
            <div className="text-sm text-muted-foreground mt-1">
              Provide job information for better ATS analysis
            </div>
          </div>

          {/* Upload Section */}
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
                    setResume(e.target.files[0]);
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

          {/* Form Fields */}
          <FieldSet>
            <FieldGroup>

              <div className="flex flex-col sm:flex-row gap-4">
                <Field>
                  <FieldLabel className="text-sm text-muted-foreground">
                    Job Title
                  </FieldLabel>
                  <Select>
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
                  <Select>
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
                  placeholder="Enter here..."
                  className="min-h-36 w-full"
                />
                <FieldDescription className="flex justify-between text-xs text-muted-foreground">
                  <span>Minimum 50 characters recommended</span>
                  <span>0 chars</span>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </FieldSet>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <Button variant="ghost">Reset</Button>

            <Button onClick={handleUpload} disabled={loading}>
              {loading ? "Uploading..." : "Submit"}
            </Button>
          </div>

          {/* Status Messages */}
          <div className="mt-4 text-center text-sm">
            {loading && (
              <p className="text-blue-500">Uploading resume...</p>
            )}
            {uploadedUrl && (
              <p className="text-green-500">
                ✅ Upload successful
              </p>
            )}
            {error && (
              <p className="text-red-500">
                ❌ {error}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-center gap-1 text-sm text-muted-foreground">
            Want to skip?
            <Button variant="link" className="px-0">
              Fill with demo data
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;