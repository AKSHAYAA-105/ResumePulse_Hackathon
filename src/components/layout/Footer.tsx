export function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-gradient-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">RP</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © 2024 ResumePulse. AI-powered resume optimization.
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Technical Docs
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
          <p>Powered by AI • Built with React, Tailwind CSS, and Supabase</p>
        </div>
      </div>
    </footer>
  );
}