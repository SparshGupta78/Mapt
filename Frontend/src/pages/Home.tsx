import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "../components/ui/button";
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
} from "../components/ui/field";

const Home = () => {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState(null);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center px-6 py-12">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center text-center mb-24 justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh]">
        <h1 className="text-9xl font-extrabold tracking-tight text-white">
          Mapt
        </h1>
        <h4 className="mt-4 text-xl font-semibold text-gray-400">
          Making corporate onboarding engaging,
        </h4>
        <h4 className="text-xl font-semibold text-gray-400">
          efficient, and personalized.
        </h4>

        <div className="mt-8 flex gap-6">
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl">
            Get Started
          </Button>
          <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
            View Roadmap
          </Button>
        </div>
      </div>

      {/* UPLOAD SECTION */}
      <div className="w-full max-w-3xl mb-28 px-15 py-8 flex flex-col items-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-white mb-10">
          Upload Documents
        </h2>

        <div className="flex flex-col md:flex-row gap-10 w-full justify-center">

          {/* Resume Upload */}
          <div className="flex-1 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center bg-black">
            <Upload className="w-10 h-10 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Resume</h3>
            <p className="text-sm text-gray-400 mt-1">
              PDF only • Max 10MB
            </p>

            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="resumeUpload"
              onChange={(e) => setResume(e.target.files[0])}
            />

            <label htmlFor="resumeUpload">
              <Button size="lg" className="mt-4">
                <Upload className="w-4 h-4" />
                {resume ? "File Selected" : "Choose File"}
              </Button>
            </label>
          </div>

          {/* Job Description Upload */}
          <div className="flex-1 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center bg-black">
            <Upload className="w-10 h-10 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Job Description</h3>
            <p className="text-sm text-gray-400 mt-1">
              PDF only • Max 10MB
            </p>

            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="jobUpload"
              onChange={(e) => setJobDesc(e.target.files[0])}
            />

            <label htmlFor="jobUpload">
              <Button size="lg" className="mt-4">
                <Upload className="w-4 h-4" />
                {jobDesc ? "File Selected" : "Choose File"}
              </Button>
            </label>
          </div>

        </div>

        {/* Next Button */}
        <div className="mt-10 flex gap-3 justify-end w-full">
          <Button size="lg" disabled={!resume || !jobDesc} variant="outline">Next</Button>
          <Button size="lg" disabled={!resume || !jobDesc} >Cancel</Button>
        </div>

      </div>

      {/* FORM SECTION */}
      <div className="w-full max-w-xl border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-md">

        {/* Title */}
        <div className="mb-7 text-center">
          <h2 className="text-4xl font-semibold text-white">
            Job Details
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Provide job information for better ATS analysis
          </p>
        </div>

        <FieldSet>
          <FieldGroup>

            {/* Job Title + Experience */}
            <div className="flex flex-row gap-5">
              <Field>
                <FieldLabel className="text-white text-sm tracking-wide">
                  JOB TITLE *
                </FieldLabel>
                <Select>
                  <SelectTrigger className="bg-black border-white/10 text-white">
                    <SelectValue placeholder="Select job title" />
                  </SelectTrigger>
                  <SelectContent className="bg-mist-900 border-white/10 text-white">
                    <SelectItem value="frontend">Frontend Engineer</SelectItem>
                    <SelectItem value="backend">Backend Engineer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="designer">UI/UX Designer</SelectItem>
                    <SelectItem value="manager">Product Manager</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel className="text-white text-sm tracking-wide">
                  EXPERIENCE REQUIRED *
                </FieldLabel>
                <Select>
                  <SelectTrigger className="bg-black border-white/10 text-white">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="bg-mist-900 border-white/10 text-white">
                    <SelectItem value="junior">Junior (0-2 yrs)</SelectItem>
                    <SelectItem value="mid">Mid (2-5 yrs)</SelectItem>
                    <SelectItem value="senior">Senior (5+ yrs)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            {/* Job Description */}
            <Field>
              <FieldLabel className="text-white text-sm tracking-wide">
                JOB DESCRIPTION *
              </FieldLabel>
              <Textarea
                placeholder="Paste the full job description here — responsibilities, requirements, tech stack, nice-to-haves."
                className="min-h-[150px] bg-black border-white/10 text-white placeholder:text-gray-500"
              />
              <FieldDescription className="flex justify-between text-xs text-gray-500">
                <span>Minimum 100 characters recommended</span>
                <span>0 chars</span>
              </FieldDescription>
            </Field>

          </FieldGroup>
        </FieldSet>

        {/* Buttons */}
        <div className="flex gap-3 mt-6 justify-end">
          <Button type="submit" variant="outline">Submit</Button>
          <Button type="button">Cancel</Button>
        </div>

      </div>
    </div>
  );
};

export default Home;