import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TradingChartProps {
  pair: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export const TradingChart = ({ pair, price, change, isPositive }: TradingChartProps) => {
  const chartData = Array.from({ length: 50 }, (_, i) => {
    const baseValue = 50 + Math.sin(i * 0.1) * 20;
    const noise = (Math.random() - 0.5) * 10;
    return Math.max(10, Math.min(90, baseValue + noise));
  });

  const pathData = chartData.map((value, index) => 
    `${index === 0 ? 'M' : 'L'} ${(index / (chartData.length - 1)) * 100} ${100 - value}`
  ).join(' ');

  return (
    <Card className="p-6 bg-card border-border hover:bg-accent/5 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{pair}</h3>
          <p className="text-2xl font-bold text-foreground">{price}</p>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
          isPositive 
            ? 'bg-success/20 text-success' 
            : 'bg-destructive/20 text-destructive'
        }`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {change}
        </div>
      </div>
      
      <div className="h-24 relative">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute inset-0"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`gradient-${pair}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"} stopOpacity={0.3} />
              <stop offset="100%" stopColor={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"} stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <path
            d={`${pathData} L 100 100 L 0 100 Z`}
            fill={`url(#gradient-${pair})`}
          />
          <path
            d={pathData}
            fill="none"
            stroke={isPositive ? "hsl(var(--success))" : "hsl(var(--destructive))"}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </Card>
  );
};