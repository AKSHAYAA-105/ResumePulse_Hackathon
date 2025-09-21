import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, X } from "lucide-react";

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  isAnalyzing?: boolean;
}

export function JobDescriptionInput({ value, onChange, isAnalyzing }: JobDescriptionInputProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const charCount = value.length;
  const maxChars = 5000;

  const handleClear = () => {
    onChange("");
    setIsExpanded(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Job Description</span>
            <Badge variant="outline" className="text-xs">
              Optional
            </Badge>
          </div>
          {value && !isAnalyzing && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </CardTitle>
        <CardDescription>
          Paste the job description to get tailored analysis and see how well your resume matches the role requirements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Textarea
            placeholder="Paste the job description here for more accurate analysis..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={isAnalyzing}
            className={`min-h-[100px] transition-all duration-200 ${
              isExpanded ? "min-h-[200px]" : ""
            }`}
            onFocus={() => setIsExpanded(true)}
            maxLength={maxChars}
          />
          
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              {charCount}/{maxChars} characters
            </span>
            {value && (
              <span className="text-success">
                ✓ Job description added - analysis will be more accurate
              </span>
            )}
          </div>

          {value && !isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="text-xs"
            >
              Expand to edit
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}