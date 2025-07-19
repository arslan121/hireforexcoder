
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
            <img 
              src={logo} 
              alt="Hire Forex Coder Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <span className="font-bold text-xl text-foreground transition-colors duration-300 group-hover:text-primary">
            Hire Forex Coder
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Portfolio</a>
          <a href="#process" className="text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Process</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Pricing</a>
          <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex transition-all duration-300 hover:scale-105">Contact</Button>
          <Button variant="trading" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">Start Project</Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden transition-transform duration-300 hover:scale-110">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};
