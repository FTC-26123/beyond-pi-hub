import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

const outreachEvents = [
  {
    title: "FLL Mentoring",
    bulletPoints: [
      "STEM demonstrations for elementary students",
      "Hands-on robotics activities",
      "Career talks with mentors",
      "Interactive coding sessions"
    ]
  },
  {
    title: "Community Events",
    bulletPoints: [
      "Local library demonstrations",
      "Science fair participation",
      "Community center workshops",
      "Public robot showcases"
    ]
  },
  {
    title: "Mentorship Program",
    bulletPoints: [
      "Rookie team support",
      "Technical guidance sessions",
      "Strategy workshops",
      "Resource sharing"
    ]
  }
];

const Outreach = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Outreach</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to inspiring the next generation of innovators through community engagement and STEM education.
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {outreachEvents.map((event, index) => (
              <InfoCard
                key={index}
                title={event.title}
                bulletPoints={event.bulletPoints}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Outreach;
