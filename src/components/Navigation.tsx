import { Button } from "@/components/ui/button";
import { BarChart3, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl text-foreground">ForexBot Pro</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
          <a href="#indicators" className="text-foreground hover:text-primary transition-colors">Indicators</a>
          <a href="#strategies" className="text-foreground hover:text-primary transition-colors">Strategies</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">Sign In</Button>
          <Button variant="trading">Start Trading</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};