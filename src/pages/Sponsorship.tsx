import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const sponsorshipTiers = [
  {
    name: "Bronze",
    amount: "$250+",
    benefits: [
      "Logo on team website",
      "Social media recognition",
      "Thank you certificate"
    ]
  },
  {
    name: "Silver",
    amount: "$500+",
    benefits: [
      "All Bronze benefits",
      "Logo on team banner",
      "Quarterly updates on team progress",
      "Invitation to team events"
    ]
  },
  {
    name: "Gold",
    amount: "$1,000+",
    benefits: [
      "All Silver benefits",
      "Logo on team shirts",
      "Priority recognition at events",
      "Personalized thank you video"
    ]
  },
  {
    name: "Platinum",
    amount: "$2,500+",
    benefits: [
      "All Gold benefits",
      "Logo on robot",
      "Featured sponsor spotlight",
      "VIP access to competitions",
      "Annual impact report"
    ]
  }
];

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Become a <span className="text-primary">Sponsor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support helps us compete, learn, and inspire the next generation of engineers and innovators.
            </p>
          </div>
          
          {/* Sponsorship Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="flex flex-col">
                {/* Photo Box */}
                <div className="bg-card rounded-2xl p-8 flex items-center justify-center min-h-[150px]">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">{tier.amount}</p>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground text-center my-4">{tier.name}</h3>
                
                {/* Orange Box with Benefits */}
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground flex-1">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg" asChild>
              <a href="mailto:contact@beyondpi26123.com?subject=Sponsorship%20Inquiry">Contact Us to Sponsor</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsorship;
