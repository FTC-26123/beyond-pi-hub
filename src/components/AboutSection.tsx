import { Heart, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in everything we build.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Together we achieve more than we ever could alone.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We think outside the box to solve complex challenges.",
  },
  {
    icon: Target,
    title: "Dedication",
    description: "We put in the work to make our ideas come to life.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Beyond Pi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a FIRST Tech Challenge team building robots 
            and having fun while giving back to our community
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
               Our FTC team was formed when two FLL teams came together, combining our skills, experiences, and friendships into one stronger group. 
                What started as separate journeys quickly turned into a shared passion for engineering, innovation, and problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
               United by curiosity and teamwork, we now tackle bigger
               challenges together and push each other to grow every season.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">π</div>
              <p className="text-foreground font-display text-xl font-bold">
                Going Beyond Limits
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Team #26123
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
