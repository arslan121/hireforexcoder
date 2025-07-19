
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="p-6 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group cursor-pointer border-border">
      <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 text-center group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-4 text-center group-hover:text-foreground transition-colors duration-300">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
};
