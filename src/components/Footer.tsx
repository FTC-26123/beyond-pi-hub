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
          
          <div className="flex items-center gap-4 text-xs opacity-70">
            <span>Gracious Professionalism®</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;