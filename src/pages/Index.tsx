import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RobotSection from "@/components/RobotSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RobotSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;