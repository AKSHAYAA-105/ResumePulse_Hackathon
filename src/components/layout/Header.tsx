import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HelpCircle, Info } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">RP</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">ResumePulse</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Resume Analysis</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>How to Use ResumePulse</DialogTitle>
                <DialogDescription>
                  Get instant AI-powered feedback on your resume to improve ATS compatibility and recruiter appeal.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Step 1: Upload Your Resume</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your PDF resume or click to browse files. We support PDF format only.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Step 2: Add Job Description (Optional)</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste a job description to get tailored analysis and see how well your resume matches the role.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Step 3: Get AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes your resume for ATS compatibility, keyword optimization, and provides actionable improvement suggestions.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Info className="h-4 w-4 mr-2" />
                About
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About ResumePulse</DialogTitle>
                <DialogDescription>
                  ResumePulse is an AI-powered resume analysis platform that helps job seekers optimize their resumes for better ATS compatibility and recruiter appeal.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ATS Compatibility Analysis</li>
                    <li>• Keyword Optimization</li>
                    <li>• Job Match Scoring</li>
                    <li>• AI-Generated Improvement Suggestions</li>
                    <li>• Professional Summary Generation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    Your resume data is processed securely and not stored permanently. No registration required.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}