import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Eye, Edit, Trash2 } from "lucide-react";

interface CustomIndicatorProps {
  name: string;
  description: string;
  performance: string;
  isActive: boolean;
  signals: number;
  accuracy: string;
}

export const CustomIndicator = ({ 
  name, 
  description, 
  performance, 
  isActive, 
  signals, 
  accuracy 
}: CustomIndicatorProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:bg-accent/5 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Badge variant={isActive ? "default" : "secondary"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Performance</p>
          <p className={`font-semibold ${performance.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
            {performance}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Signals</p>
          <p className="font-semibold text-foreground">{signals}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Accuracy</p>
          <p className="font-semibold text-foreground">{accuracy}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye size={14} />
          View
        </Button>
        <Button variant="outline" size="sm">
          <Edit size={14} />
        </Button>
        <Button variant="outline" size="sm">
          <Trash2 size={14} />
        </Button>
      </div>
    </Card>
  );
};