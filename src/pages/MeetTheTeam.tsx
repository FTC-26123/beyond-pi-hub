import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

const teamMembers = [
  {
    name: "Shiv",
    description: "Hello, my name is Shiv! I'm 13 years old and I go to Cedar Valley Middle. I joined FTC to get familiar with Java and Python. I also joined because I adore robots, and they are very fascinating on how they work! In my free time, I play lots of sports and spend time with family and friends."
  },
  {
    name: "Ashish",
    description: "Develops autonomous and driver-controlled code. Expert in Java and control systems."
  },
  {
    name: "Ronit",
    description: "Designs and constructs robot mechanisms. Skilled in CAD and mechanical engineering."
  },
  {
    name: "Srihan",
    description: "Organizes community events and mentorship programs. Connects the team with the community."
  },
  {
    name: "Deepam",
    description: "Operates the robot during competitions. Quick reflexes and strategic thinking."
  },
  {
    name: "Saatvik",
    description: "Analyzes competition data and develops match strategies. Data-driven decision maker."
  },
  {
    name: "Neel",
    description: "Analyzes competition data and develops match strategies. Data-driven decision maker."
  },
  {
    name: "Malav",
    description: "Analyzes competition data and develops match strategies. Data-driven decision maker."
  }
];

const MeetTheTeam = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the passionate individuals who make up our robotics team.
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <InfoCard
                key={index}
                title={member.name}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeetTheTeam;
