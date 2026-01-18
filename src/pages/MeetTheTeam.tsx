import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import teamShiv from "@/assets/team-shiv.png";
import teamAshish from "@/assets/team-ashish.png";
import teamSrihan from "@/assets/team-srihan.png";
import teamDeepam from "@/assets/team-deepam.png";

const teamMembers = [
  {
    name: "Shiv",
    description: "Hello, my name is Shiv! I'm 13 years old and I go to Cedar Valley Middle. I joined FTC to get familiar with Java and Python. I also joined because I adore robots, and they are very fascinating on how they work! In my free time, I play lots of sports and spend time with family and friends. ",
    image: teamShiv
  },
  {
    name: "Ashish",
    description: "Hello, my name is Ashish! I'm 13 years old and I go to Cedar Valley Middle School. I joined FTC to grasp an understanding of how robots work and the aspects behind them. In my free time, I play lots of sports, including basketball.",
    image: teamAshish
  },
  {
    name: "Ronit",
    description: "My name is Ronit, and I go to attend Pearson Ranch Middle School. I joined FTC to connect with the robotics community and gain coding knowledge in Java. In my free time, I enjoy playing the viola, playing video games, and sleeping."
  },
  {
    name: "Srihan",
    description: "My name is Srihan, and I go to Cedar Valley Middle School. I joined FTC to learn about engineering and coding languages. In my free time, I like to play video games, play soccer with my friends, and sleep.",
    image: teamSrihan
  },
  {
    name: "Deepam",
    description: "My name is Deepam, and I go to Pearson Ranch Middle School. I joined FTC to gain engineering experience and learn how to program fluently in Java. In my free time, I like to code and play chess, Euphonium, and soccer.",
    image: teamDeepam
  },
  {
    name: "Satvik",
    description: "Hello, my name is Satvik, and I go to Pearson Ranch Middle School. I joined FTC to gain more knowledge about working as a team. I have 5 years of experience in FLL, and I wanted to take the next step. I enjoy playing cello, gaming, and playing with my friends."
  },
  {
    name: "Neel",
    description: "Hello, I am Neel. I am 13 years old and go to Pearson Ranch MS. I enjoy playing the clarinet and the piano. I joined FTC because I was interested in how the robot works and learning how to code. I have 1 year of experience in FLLC, and I am working on my first year in FTC."
  },
  {
    name: "Malav",
    description: "Hi, my name is Malav, and I am currently an 8th grader at BASIS Cedar Park. I joined FTC to gain programming experience in Java and to connect with the community through outreach. In my free time, I like to code and play chess, piano, and cricket."
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
                imagePlaceholder={member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : undefined}
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
