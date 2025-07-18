
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
    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-border">
      <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground mb-4 text-center">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
};
