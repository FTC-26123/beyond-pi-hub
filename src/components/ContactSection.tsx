import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Join <span className="text-gradient">Beyond Pi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Interested in joining our team, sponsoring us, or just want to say hello? 
            We'd love to hear from you!
          </p>
        </div>

        {/* Contact Card */}
        <div className="p-8 md:p-12 rounded-3xl border-glow bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">team@beyondpi26123.org</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Your City, State</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  Become a Sponsor
                </h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Support the next generation of engineers and help us compete at the highest level.
                </p>
                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-transform">
                  Learn About Sponsorship
                </Button>
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-secondary/50">
                <h4 className="font-display text-xl font-bold text-foreground mb-3">
                  Join Our Team
                </h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Are you passionate about robotics, coding, or design? We're always looking for enthusiastic members!
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;