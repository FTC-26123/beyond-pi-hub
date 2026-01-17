import { Cpu, Zap, Target, Wrench } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Control",
    description: "Custom-built control systems with autonomous capabilities",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed, precision, and reliability",
  },
  {
    icon: Target,
    title: "Precision Scoring",
    description: "Engineered mechanisms for consistent gameplay",
  },
  {
    icon: Wrench,
    title: "Modular Design",
    description: "Quickly adaptable to different challenges",
  },
];

const RobotSection = () => {
  return (
    <section id="robot" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Our Creation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Robot</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Months of design, iteration, and testing culminate in a machine 
            built to compete at the highest level.
          </p>
        </div>

        {/* Robot Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Robot Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl border-glow bg-gradient-to-br from-card to-secondary/50 flex items-center justify-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,255,0.1)_49%,rgba(0,255,255,0.1)_51%,transparent_52%)] bg-[size:20px_20px]" />
              
              <div className="relative text-center p-8">
                <div className="text-9xl mb-4">🤖</div>
                <p className="text-muted-foreground font-display text-lg">
                  Robot Photo Coming Soon
                </p>
                <p className="text-muted-foreground/60 text-sm mt-2">
                  Season 2024-2025
                </p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotSection;