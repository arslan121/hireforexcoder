
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export const PricingCard = ({ name, price, description, features, popular }: PricingCardProps) => {
  return (
    <Card className={`p-6 relative ${popular ? 'border-primary shadow-lg' : 'border-border'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <div className="text-3xl font-bold text-primary mb-2">{price}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className="w-full" 
        variant={popular ? "trading" : "outline"}
      >
        Get Started
      </Button>
    </Card>
  );
};
