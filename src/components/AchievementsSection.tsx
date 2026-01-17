import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Regional Qualifier",
    event: "State Championship",
    season: "2024",
  },
  {
    icon: Award,
    title: "Design Award",
    event: "Regional Competition",
    season: "2024",
  },
  {
    icon: Star,
    title: "Connect Award",
    event: "League Tournament",
    season: "2023",
  },
  {
    icon: Medal,
    title: "Inspire Nominee",
    event: "Qualifier Event",
    season: "2023",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're proud of what we've accomplished together. Every award represents 
            countless hours of hard work and dedication.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <achievement.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {achievement.event}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium">
                {achievement.season}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;