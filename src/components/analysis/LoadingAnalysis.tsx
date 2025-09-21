import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Brain, FileText, Target, Lightbulb } from "lucide-react";

const analysisSteps = [
  { icon: FileText, label: "Parsing resume content", duration: 2000 },
  { icon: Brain, label: "AI analysis in progress", duration: 3000 },
  { icon: Target, label: "Calculating ATS compatibility", duration: 2000 },
  { icon: Lightbulb, label: "Generating improvement suggestions", duration: 2500 },
];

export function LoadingAnalysis() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = analysisSteps.reduce((sum, step) => sum + step.duration, 0);
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 100;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 95);
      setProgress(newProgress);

      // Update current step based on elapsed time
      let stepElapsed = 0;
      for (let i = 0; i < analysisSteps.length; i++) {
        stepElapsed += analysisSteps[i].duration;
        if (elapsed <= stepElapsed) {
          setCurrentStep(i);
          break;
        }
      }

      if (elapsed >= totalDuration) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Analyzing Your Resume</h3>
              <p className="text-muted-foreground">
                Our AI is processing your resume and generating insights...
              </p>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <Progress value={progress} className="h-2" />
              
              <div className="space-y-3">
                {analysisSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStep;
                  const isCompleted = index < currentStep;
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 text-sm ${
                        isActive
                          ? "text-primary"
                          : isCompleted
                          ? "text-success"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "animate-pulse" : ""}`} />
                      <span>{step.label}</span>
                      {isCompleted && (
                        <span className="text-success">✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skeleton placeholders for results */}
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
                <div className="text-center space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
                <div className="text-center space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-28" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-6 w-36" />
                <Skeleton className="h-6 w-24" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}