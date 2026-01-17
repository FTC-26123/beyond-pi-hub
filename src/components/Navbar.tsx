import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About", isSection: true },
  { href: "#robot", label: "Robot", isSection: true },
  { href: "/outreach", label: "Outreach", isSection: false },
  { href: "/sponsorship", label: "Sponsorship", isSection: false },
  { href: "/meet-the-team", label: "Team", isSection: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
    setIsMobileMenuOpen(false);
  };

  const showSolidNav = isScrolled || !isHomePage;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? "bg-card/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2"
          >
            <span className={`font-display text-xl font-bold ${showSolidNav ? 'text-primary' : 'text-primary-foreground'}`}>
              Beyond Pi
            </span>
            <span className={`text-xs font-mono ${showSolidNav ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
              #26123
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isSection ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    showSolidNav
                      ? 'text-muted-foreground hover:text-primary' 
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    showSolidNav
                      ? 'text-muted-foreground hover:text-primary' 
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button 
              size="sm" 
              className={`font-medium ${
                showSolidNav
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-primary-foreground text-primary'
              }`}
              onClick={() => scrollToSection("#contact")}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${showSolidNav ? 'text-foreground' : 'text-primary-foreground'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-card rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                link.isSection ? (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button 
                className="bg-primary text-primary-foreground font-medium mt-2"
                onClick={() => scrollToSection("#contact")}
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
