
import { Card } from "@/components/ui/card";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export const ProcessStep = ({ step, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center">
  <div className="flex items-center justify-center mb-2 sm:mb-4">
    <div className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto">
      {/* Glowing ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500" />

      {/* Inner circle */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base sm:text-lg font-bold z-10">
        {step}
      </div>
    </div>
  </div>

  <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
    {title}
  </h3>
  <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
</div>

  );
};
