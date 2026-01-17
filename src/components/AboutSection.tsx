import { Cog, Users, Trophy, Lightbulb } from "lucide-react";

const stats = [
  { icon: Users, value: "15+", label: "Team Members" },
  { icon: Trophy, value: "5+", label: "Awards Won" },
  { icon: Cog, value: "3", label: "Seasons" },
  { icon: Lightbulb, value: "∞", label: "Ideas" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            More Than Just <span className="text-gradient">Robots</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Beyond Pi is a FIRST Tech Challenge robotics team driven by curiosity, 
            creativity, and a passion for STEM education.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm text-center hover:scale-105 transition-transform"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border-glow">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To inspire the next generation of engineers, scientists, and innovators through 
              hands-on robotics experience. We believe in learning by doing, failing forward, 
              and celebrating every breakthrough—big or small.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border-glow">
            <h3 className="font-display text-2xl font-bold text-accent mb-4">Our Values</h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Innovation through experimentation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Gracious Professionalism®
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Collaborative problem-solving
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Community impact and outreach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;