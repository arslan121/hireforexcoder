
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md hover:shadow-primary/10 transition duration-300 hover:scale-[1.02] group cursor-pointer border-border">
  <div className="flex items-center gap-1 mb-2">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
    ))}
  </div>
  
  <p className="text-sm text-foreground italic mb-3">
    “{content}”
  </p>
  
  <div>
    <div className="text-sm font-semibold text-foreground">{name}</div>
    <div className="text-xs text-muted-foreground">{role}</div>
  </div>
</Card>

  );
};
