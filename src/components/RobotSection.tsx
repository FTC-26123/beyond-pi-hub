const RobotSection = () => {
  return (
    <section id="robot" className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Creation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Robot
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hours of design, building, and testing go into creating our competition robot each season.
          </p>
        </div>

        {/* Robot Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Robot Image Placeholder */}
          <div className="bg-card rounded-3xl p-8 shadow-lg">
            <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🤖</div>
                <p className="text-foreground font-display text-xl font-bold">
                  Robot Photo
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Coming Soon!
                </p>
              </div>
            </div>
          </div>

          {/* Robot Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Season 2024-2025
              </h3>
              <p className="text-muted-foreground">
                Our robot is designed for the INTO THE DEEP challenge, featuring 
                specialized mechanisms for sample collection and scoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-md text-center">
                <p className="text-3xl font-display font-bold text-primary">18"</p>
                <p className="text-muted-foreground text-sm">Max Size</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-md text-center">
                <p className="text-3xl font-display font-bold text-primary">42 lbs</p>
                <p className="text-muted-foreground text-sm">Weight</p>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h3 className="font-display text-xl font-bold mb-2">
                Key Features
              </h3>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• Custom intake system</li>
                <li>• Precise arm mechanism</li>
                <li>• Autonomous programming</li>
                <li>• Efficient drivetrain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotSection;