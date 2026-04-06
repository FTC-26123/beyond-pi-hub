import ftcScoutIcon from "@/assets/ftcscout-icon.png";
import firstIcon from "@/assets/first-icon.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold">Beyond Pi</span>
            <span className="text-xs opacity-70 font-mono">#26123</span>
          </div>
          
          <p className="text-sm opacity-70 text-center">
            © {new Date().getFullYear()} Beyond Pi Robotics. FTC Team 26123.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://ftcscout.org/teams/26123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={ftcScoutIcon} alt="FTC Scout" className="w-5 h-5" />
              <span>FTC Scout</span>
            </a>
            <a
              href="https://ftc-events.firstinspires.org/team/26123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={firstIcon} alt="FIRST Inspires" className="w-5 h-5" />
              <span>FIRST Inspires</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;