import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pastRobot2024 from "@/assets/past-robot-2024.png";
const PastSeasons = () => {
  return <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Past <span className="text-primary">Seasons</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A look back at our previous competition seasons and the robots we've built.
            </p>
          </div>

          {/* Past Season Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Robot Image */}
          <div className="bg-card rounded-3xl p-8 shadow-lg">
            <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
              <img src={pastRobot2024} alt="Into the Deep Robot 2023-2024" className="w-full h-full object-contain" />
            </div>
          </div>

            {/* Robot Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-md">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Season 2024-2025
                </h3>
                <p className="text-muted-foreground">
                  In this season, we were required to hang specimens and 
                  drop samples into the dedicated baskets.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 shadow-md text-center">
                  <p className="text-3xl font-display font-bold text-primary">18"</p>
                  <p className="text-muted-foreground text-sm">Max Size</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-md text-center">
                  <p className="text-3xl font-display font-bold text-primary">36 lbs</p>
                  <p className="text-muted-foreground text-sm">Weight</p>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-2">
                  Key Features
                </h3>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Ability to score samples into high basket</li>
                  <li>• Ability to hang specimens on the rung</li>
                  <li>• Ability to hang in End Game</li>
                  <li>• Excellent Autonomous Programming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PastSeasons;