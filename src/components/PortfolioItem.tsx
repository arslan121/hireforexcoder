
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  complexity: string;
}

export const PortfolioItem = ({ title, description, image, technologies, complexity }: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group cursor-pointer border-border">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
        <div className="text-primary/60 text-4xl font-bold group-hover:scale-110 transition-transform duration-300">MT4/5</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
          <Badge 
            variant={complexity === "Expert" ? "default" : "secondary"}
            className="group-hover:scale-110 transition-transform duration-300"
          >
            {complexity}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4 text-sm group-hover:text-foreground transition-colors duration-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-fade-in" 
              style={{animationDelay: `${index * 100}ms`}}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
