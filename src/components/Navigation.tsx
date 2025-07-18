
import { Button } from "@/components/ui/button";
import { Code, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl text-foreground">MT4/MT5 Developer</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#process" className="text-foreground hover:text-primary transition-colors">Process</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">Contact</Button>
          <Button variant="trading">Start Project</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};
