import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Want to join Beyond Pi, become a sponsor, or just say hi? 
            We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-md">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">team@beyondpi26123.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Your City, State</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-primary-foreground flex flex-col justify-center">
            <h4 className="font-display text-2xl font-bold mb-3">
              Become a Sponsor
            </h4>
            <p className="text-primary-foreground/80 mb-6">
              Help us compete and inspire the next generation of engineers! Your support makes a real difference in our team's ability to innovate and succeed.
            </p>
            <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-6 text-lg">
              Sponsorship Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;