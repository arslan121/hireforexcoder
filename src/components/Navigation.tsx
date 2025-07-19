import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left logo & brand */}
        <div className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
            <img
              src={logo}
              alt="Hire Forex Coder Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain saturate-100"
            />
          </div>
       <span className="font-bold text-xs sm:text-base text-base md:text-xl text-foreground transition-colors duration-300 group-hover:text-primary">
            Hire Forex Coder
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-0 sm:gap-4">
          <a href="#contact" className=" hidden md:block transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Button variant="trading">Start Project</Button>
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background px-6 py-4 flex flex-col gap-4 border-t border-border shadow-sm">
          <a href="#services" className="text-foreground hover:text-primary">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary">Portfolio</a>
          <a href="#process" className="text-foreground hover:text-primary">Process</a>
          <a href="#pricing" className="text-foreground hover:text-primary">Pricing</a>
          <a href="#about" className="text-foreground hover:text-primary">About</a>
          <a href="#contact" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Button variant="trading">Start Project</Button>
          </a>
        </div>
      )}
    </nav>
  );
};
