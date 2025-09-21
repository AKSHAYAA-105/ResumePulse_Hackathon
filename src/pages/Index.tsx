import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileUploadZone } from "@/components/upload/FileUploadZone";
import { JobDescriptionInput } from "@/components/analysis/JobDescriptionInput";
import { AnalysisResults } from "@/components/analysis/AnalysisResults";
import { LoadingAnalysis } from "@/components/analysis/LoadingAnalysis";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, TrendingUp, FileText, RotateCcw } from "lucide-react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAnalysisResults(null);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setAnalysisResults(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    // Simulate analysis - in real implementation, this would call the AI service
    setTimeout(() => {
      const mockResults = {
        atsScore: 7.5,
        clarityScore: 8.2,
        impactScore: 6.8,
        jobMatchPercentage: jobDescription ? 78 : undefined,
        keywords: ["JavaScript", "React", "TypeScript", "Node.js", "AWS", "Agile"],
        missingSkills: ["Docker", "Kubernetes", "Python", "GraphQL"],
        suggestions: [
          "Use stronger action verbs like 'implemented' instead of 'worked on'",
          "Add quantifiable achievements with specific numbers and percentages",
          "Include relevant keywords from the job description in your experience section",
          "Optimize your professional summary for ATS scanning",
        ],
        professionalSummary: "Experienced Full-Stack Developer with 5+ years building scalable web applications using React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions that improved user engagement by 40% and reduced load times by 25%.",
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 8000);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setJobDescription("");
    setAnalysisResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {!selectedFile && !isAnalyzing && !analysisResults && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                ResumePulse
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                AI-powered resume analysis platform that helps you optimize your resume for ATS compatibility and recruiter appeal. Get instant, intelligent feedback to boost your job application success rate.
              </p>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Instant Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Get comprehensive feedback in seconds with our AI-powered analysis engine
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">ATS Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ensure your resume passes through Applicant Tracking Systems with confidence
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-warning" />
                    </div>
                    <CardTitle className="text-lg">Smart Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Receive actionable recommendations to improve impact and clarity
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}

        {/* Main Interface */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Upload Section */}
          {(!analysisResults && !isAnalyzing) && (
            <div className="space-y-6">
              <FileUploadZone
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                onFileRemove={handleFileRemove}
                isAnalyzing={isAnalyzing}
              />

              {selectedFile && (
                <>
                  <JobDescriptionInput
                    value={jobDescription}
                    onChange={setJobDescription}
                    isAnalyzing={isAnalyzing}
                  />

                  <div className="text-center">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      size="lg"
                      className="bg-gradient-primary hover:bg-primary-hover"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      Analyze Resume
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Loading State */}
          {isAnalyzing && <LoadingAnalysis />}

          {/* Results */}
          {analysisResults && !isAnalyzing && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Analysis Results</h2>
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Analyze New Resume
                </Button>
              </div>
              
              <AnalysisResults results={analysisResults} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
