import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotFeatures = [
  "Custom intake system",
  "Precise arm mechanism",
  "Autonomous programming",
  "Efficient drivetrain"
];

const Robot = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Robot</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed and built with passion for the INTO THE DEEP challenge.
            </p>
          </div>
          
          {/* Robot Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Robot Image */}
            <div className="bg-card rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-muted-foreground">
                <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <p className="text-xl font-semibold">Robot Photo</p>
                <p>Coming Soon!</p>
              </div>
            </div>
            
            {/* Robot Info */}
            <div className="flex flex-col gap-6">
              {/* Season Card */}
              <div className="bg-card rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Season 2024-2025</h2>
                <p className="text-muted-foreground">
                  Our robot is designed for the INTO THE DEEP challenge, featuring specialized mechanisms for sample collection and scoring.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary">18"</p>
                  <p className="text-muted-foreground">Max Size</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary">42 lbs</p>
                  <p className="text-muted-foreground">Weight</p>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {robotFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Robot;
