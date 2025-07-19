
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
   <Card
  className={`p-5 sm:p-6 relative ${
    popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
  } hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group cursor-pointer`}
>
  {popular && (
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
        Most Popular
      </div>
    </div>
  )}

  <div className="text-center mb-5 sm:mb-6">
    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
      {name}
    </h3>
    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
      {price}
    </div>
    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
      {description}
    </p>
  </div>

  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
    {features.map((feature, index) => (
      <li
        key={index}
        className="flex items-start gap-2 sm:gap-3 animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <CheckCircle className="h-4 w-4 text-success flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm text-foreground">{feature}</span>
      </li>
    ))}
  </ul>

  <a href="#contact">
    <Button
      className="w-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
      variant={popular ? 'trading' : 'outline'}
    >
      Get Started
    </Button>
  </a>
</Card>

  );
};
