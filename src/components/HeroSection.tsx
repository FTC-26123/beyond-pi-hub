import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import teamHeroImage from "@/assets/team-hero.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRobot = () => {
    document.getElementById("robot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamHeroImage})` }}
      />
      
      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-8">
          <span className="text-sm font-medium text-primary-foreground">FTC Robotics Team</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-4 text-primary-foreground">
          Beyond Pi
        </h1>

        <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground/90 mb-6">
          #26123
        </p>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Building robots, building futures. We're a passionate team dedicated to innovation, teamwork, and having fun!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary font-semibold px-8 py-6 text-lg hover:bg-primary-foreground/90 transition-colors"
            asChild
          >
            <Link to="/meet-the-team">Meet The Team</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
            onClick={scrollToRobot}
          >
            Our Robot
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Learn More</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;