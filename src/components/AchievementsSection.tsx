import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Regional Qualifier",
    event: "State Championship",
    season: "2024",
    color: "text-yellow-400",
  },
  {
    icon: Medal,
    title: "Design Award",
    event: "Regional Competition",
    season: "2024",
    color: "text-primary",
  },
  {
    icon: Star,
    title: "Connect Award",
    event: "League Tournament",
    season: "2023",
    color: "text-accent",
  },
  {
    icon: Award,
    title: "Inspire Nominee",
    event: "Qualifier Event",
    season: "2023",
    color: "text-primary",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Achievements</span> & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every trophy tells a story of dedication, teamwork, and countless hours 
            of engineering excellence.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border-glow bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${achievement.color}`}>
                <achievement.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {achievement.event}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {achievement.season}
              </span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            This is just the beginning. We're always reaching for new heights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;