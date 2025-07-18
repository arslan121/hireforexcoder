
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
        <div className="text-primary/60 text-4xl font-bold">MT4/5</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <Badge variant={complexity === "Expert" ? "default" : "secondary"}>
            {complexity}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
