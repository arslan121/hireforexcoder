
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioItem } from "@/components/PortfolioItem";
import { ProcessStep } from "@/components/ProcessStep";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Cpu, TrendingUp, Zap, Clock, Shield, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Custom Indicators",
      description: "Advanced technical indicators tailored to your trading strategy - RSI variations, Moving averages, Volume indicators, and more.",
      features: ["Custom calculations", "Visual alerts", "Multi-timeframe", "Optimized performance"]
    },
    {
      icon: Cpu,
      title: "Expert Advisors (EAs)",
      description: "Fully automated trading systems that execute your strategy 24/7 with precision and discipline.",
      features: ["Strategy automation", "Risk management", "Trade execution", "Performance tracking"]
    },
    {
      icon: Code,
      title: "Script Development",
      description: "Utility scripts for trade management, account analysis, and workflow automation.",
      features: ["Trade utilities", "Account tools", "Data analysis", "Custom functions"]
    },
    {
      icon: Zap,
      title: "Modification Services",
      description: "Enhance existing indicators or EAs with new features, improved performance, or bug fixes.",
      features: ["Feature additions", "Performance optimization", "Bug fixes", "Code cleanup"]
    }
  ];

  const portfolioItems = [
    {
      title: "Advanced RSI Divergence Indicator",
      description: "Multi-timeframe RSI with automatic divergence detection and alert system",
      image: "/placeholder.svg",
      technologies: ["MQL4", "MQL5", "Custom Alerts"],
      complexity: "Advanced"
    },
    {
      title: "Scalping EA with News Filter",
      description: "High-frequency trading system with built-in news calendar integration",
      image: "/placeholder.svg",
      technologies: ["MQL5", "News API", "Risk Management"],
      complexity: "Expert"
    },
    {
      title: "Multi-Currency Dashboard",
      description: "Comprehensive trading dashboard showing signals across multiple currency pairs",
      image: "/placeholder.svg",
      technologies: ["MQL4", "Custom UI", "Data Management"],
      complexity: "Advanced"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your trading strategy, requirements, and desired functionality in detail."
    },
    {
      step: 2,
      title: "Planning & Design",
      description: "I create a detailed specification and development plan for your custom solution."
    },
    {
      step: 3,
      title: "Development",
      description: "Professional coding using MQL4/MQL5 with clean, optimized, and well-documented code."
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Rigorous testing on multiple timeframes and market conditions to ensure reliability."
    },
    {
      step: 5,
      title: "Delivery & Support",
      description: "Complete delivery with documentation, installation guide, and ongoing support."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$150",
      description: "Simple indicators and basic modifications",
      features: [
        "Custom indicator development",
        "Basic alert system",
        "Standard timeframes",
        "Source code included",
        "1 revision included",
        "5-7 day delivery"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$350",
      description: "Advanced EAs and complex indicators",
      features: [
        "Expert Advisor development",
        "Advanced risk management",
        "Multi-timeframe analysis",
        "Custom UI elements",
        "3 revisions included",
        "Testing & optimization",
        "7-10 day delivery"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$750",
      description: "Complete trading systems and dashboards",
      features: [
        "Full trading system",
        "Custom dashboard",
        "News integration",
        "Advanced analytics",
        "Unlimited revisions",
        "Priority support",
        "10-14 day delivery"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Professional Trader",
      content: "Exceptional work! The custom RSI indicator with divergence detection has significantly improved my trading accuracy. Fast delivery and excellent communication.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Hedge Fund Manager",
      content: "The scalping EA developed exceeded our expectations. Clean code, robust risk management, and consistent performance. Highly recommended!",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Trading Coach",
      content: "Professional service from start to finish. The multi-currency dashboard helps me monitor all my strategies efficiently. Will definitely work together again.",
      rating: 5
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
            alt="MT4/MT5 Development" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Custom
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-pulse"> MT4/MT5</span>
                <br />Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional MQL4/MQL5 developer specializing in custom indicators, Expert Advisors, 
                and trading scripts. Turn your trading ideas into reality with clean, optimized code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "300ms"}}>
                <Button size="lg" variant="trading" className="text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  Get Custom Indicator
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105">
                  View Portfolio
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5+ Years</div>
                  <div className="text-sm text-muted-foreground">MQL Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Popular Services</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Custom Technical Indicators</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Automated Trading Systems (EAs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Trading Scripts & Utilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Code Optimization & Fixes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive MT4/MT5 development solutions tailored to your trading needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Examples of custom indicators and EAs I've developed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional workflow ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the package that fits your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need something custom? Let's discuss your specific requirements.
            </p>
            <Button variant="outline" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* About/Expertise Section */}
      <section id="about" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Expertise & Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 5 years of experience in MQL4/MQL5 development, I specialize in creating 
                robust, efficient, and user-friendly trading solutions. My background in both programming 
                and trading ensures that every project is built with practical market knowledge.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Technical Skills</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• MQL4/MQL5 Programming</li>
                    <li>• Advanced Algorithm Design</li>
                    <li>• Performance Optimization</li>
                    <li>• Custom UI Development</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Specializations</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scalping Systems</li>
                    <li>• Trend Following EAs</li>
                    <li>• Custom Indicators</li>
                    <li>• Risk Management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">Most projects completed within 5-14 days</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Guarantee</h3>
                    <p className="text-sm text-muted-foreground">Thoroughly tested and optimized code</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Source Code Included</h3>
                    <p className="text-sm text-muted-foreground">Complete ownership of your custom solution</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              What traders say about my work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to bring your trading idea to life? Let's discuss your requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg text-foreground">MT4/MT5 Developer</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 MT4/MT5 Developer. Professional MQL4/MQL5 Development Services.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
