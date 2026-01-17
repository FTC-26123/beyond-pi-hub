import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Pi symbols */}
        <div className="absolute top-1/4 left-1/4 text-9xl font-display text-primary/5 animate-float">π</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl font-display text-accent/5 animate-float" style={{ animationDelay: "2s" }}>π</div>
        <div className="absolute top-1/2 right-1/3 text-7xl font-display text-primary/3 animate-float" style={{ animationDelay: "4s" }}>π</div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        {/* Rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-secondary/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">FTC Robotics Team</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Beyond</span>{" "}
          <span className="text-foreground">Pi</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="font-display text-2xl md:text-3xl text-primary font-bold tracking-widest">#26123</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Pushing the boundaries of innovation, engineering, and teamwork. 
          We don't just build robots — we build the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary hover:scale-105 transition-transform"
          >
            Meet The Team
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
          >
            View Our Robot
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;