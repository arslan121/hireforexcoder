
import { Card } from "@/components/ui/card";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export const ProcessStep = ({ step, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
