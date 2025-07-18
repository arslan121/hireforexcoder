import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TradingChart } from "@/components/TradingChart";
import { BotStatus } from "@/components/BotStatus";
import { CustomIndicator } from "@/components/CustomIndicator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Brain, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Index = () => {
  const [botActive, setBotActive] = useState(false);

  const forexPairs = [
    { pair: "EUR/USD", price: "1.0847", change: "+0.23%", isPositive: true },
    { pair: "GBP/USD", price: "1.2634", change: "-0.15%", isPositive: false },
    { pair: "USD/JPY", price: "148.92", change: "+0.41%", isPositive: true },
    { pair: "AUD/USD", price: "0.6751", change: "+0.18%", isPositive: true },
  ];

  const customIndicators = [
    {
      name: "Smart RSI Pro",
      description: "Advanced RSI with machine learning",
      performance: "+127.5%",
      isActive: true,
      signals: 1247,
      accuracy: "89.2%"
    },
    {
      name: "Momentum Wave",
      description: "Momentum-based trend detection",
      performance: "+94.8%",
      isActive: true,
      signals: 856,
      accuracy: "82.7%"
    },
    {
      name: "Volume Surge",
      description: "Volume-weighted price action",
      performance: "+156.3%",
      isActive: false,
      signals: 423,
      accuracy: "91.4%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Forex Trading</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced trading bots and custom indicators that adapt to market conditions. 
                Maximize profits with intelligent automation and real-time market analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="trading" className="text-lg px-8">
                  Start Trading Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {forexPairs.map((pair) => (
                <TradingChart key={pair.pair} {...pair} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Trading Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to dominate the forex market with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-border">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI Trading Bots</h3>
              <p className="text-muted-foreground">
                Advanced algorithms that learn from market patterns and execute trades with precision
              </p>
            </Card>

            <Card className="p-8 text-center border-border">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Custom Indicators</h3>
              <p className="text-muted-foreground">
                Build and deploy your own technical indicators with our powerful indicator builder
              </p>
            </Card>

            <Card className="p-8 text-center border-border">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Smart Analytics</h3>
              <p className="text-muted-foreground">
                Real-time market analysis with machine learning insights and predictive modeling
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Live Trading Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Monitor your trades and bots in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {forexPairs.map((pair) => (
                  <TradingChart key={pair.pair} {...pair} />
                ))}
              </div>
            </div>
            
            <div>
              <BotStatus
                isActive={botActive}
                onToggle={() => setBotActive(!botActive)}
                profit="+$12,847.32"
                trades={1247}
                winRate="84.7%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Indicators */}
      <section id="indicators" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Custom Indicators
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced indicators powered by machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customIndicators.map((indicator) => (
              <CustomIndicator key={indicator.name} {...indicator} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="trading">
              Build Your Indicator
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2.4M+</div>
              <div className="text-muted-foreground">Total Profit Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">97.2%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Market Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders using our AI-powered platform to generate consistent profits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="trading" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg text-foreground">ForexBot Pro</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 ForexBot Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
