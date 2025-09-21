import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  FileText, 
  Download,
  Star,
  Lightbulb
} from "lucide-react";

interface AnalysisResultsProps {
  results?: {
    atsScore: number;
    clarityScore: number;
    impactScore: number;
    jobMatchPercentage?: number;
    keywords: string[];
    missingSkills: string[];
    suggestions: string[];
    professionalSummary: string;
  };
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  if (!results) {
    return (
      <div className="space-y-6">
        {/* Placeholder cards for when no results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Overall Scores</span>
            </CardTitle>
            <CardDescription>
              Comprehensive analysis of your resume's effectiveness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground">--</div>
                <p className="text-sm text-muted-foreground">ATS Readiness</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground">--</div>
                <p className="text-sm text-muted-foreground">Clarity</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground">--</div>
                <p className="text-sm text-muted-foreground">Impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Keyword Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Upload a resume to see keyword analysis</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5" />
              <span>Improvement Suggestions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Get AI-powered suggestions after analysis</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 8) return "success";
    if (score >= 6) return "warning";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Overall Scores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Overall Scores</span>
          </CardTitle>
          <CardDescription>
            Comprehensive analysis of your resume's effectiveness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(results.atsScore)}`}>
                {results.atsScore}/10
              </div>
              <p className="text-sm text-muted-foreground mb-2">ATS Readiness</p>
              <Progress value={results.atsScore * 10} className="h-2" />
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(results.clarityScore)}`}>
                {results.clarityScore}/10
              </div>
              <p className="text-sm text-muted-foreground mb-2">Clarity</p>
              <Progress value={results.clarityScore * 10} className="h-2" />
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(results.impactScore)}`}>
                {results.impactScore}/10
              </div>
              <p className="text-sm text-muted-foreground mb-2">Impact</p>
              <Progress value={results.impactScore * 10} className="h-2" />
            </div>
          </div>

          {results.jobMatchPercentage && (
            <>
              <Separator className="my-6" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {results.jobMatchPercentage}%
                </div>
                <p className="text-sm text-muted-foreground">Job Match Score</p>
                <Progress value={results.jobMatchPercentage} className="h-2 mt-2" />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Keywords and Missing Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Found Keywords</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {results.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary">
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Missing Skills</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {results.missingSkills.map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professional Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>AI-Generated Professional Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-subtle p-4 rounded-lg">
            <p className="text-sm leading-relaxed">{results.professionalSummary}</p>
          </div>
        </CardContent>
      </Card>

      {/* Improvement Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5" />
            <span>Improvement Suggestions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {results.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{suggestion}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Button */}
      <div className="flex justify-center">
        <Button className="bg-gradient-primary hover:bg-primary-hover">
          <Download className="h-4 w-4 mr-2" />
          Download Analysis Report
        </Button>
      </div>
    </div>
  );
}