import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Settings, Activity } from "lucide-react";

interface BotStatusProps {
  isActive: boolean;
  onToggle: () => void;
  profit: string;
  trades: number;
  winRate: string;
}

export const BotStatus = ({ isActive, onToggle, profit, trades, winRate }: BotStatusProps) => {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-success animate-pulse' : 'bg-muted'}`} />
          <h3 className="font-semibold text-foreground">Trading Bot</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            isActive ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
          }`}>
            {isActive ? 'ACTIVE' : 'INACTIVE'}
          </span>
        </div>
        <Button variant="ghost" size="icon">
          <Settings size={16} />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Profit</p>
          <p className={`text-xl font-bold ${profit.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
            {profit}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Trades</p>
          <p className="text-xl font-bold text-foreground">{trades}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Win Rate</p>
          <p className="text-xl font-bold text-foreground">{winRate}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={onToggle}
          variant={isActive ? "destructive" : "success"}
          className="flex-1"
        >
          {isActive ? <Pause size={16} /> : <Play size={16} />}
          {isActive ? 'Stop Bot' : 'Start Bot'}
        </Button>
        <Button variant="outline" size="icon">
          <Activity size={16} />
        </Button>
      </div>
    </Card>
  );
};