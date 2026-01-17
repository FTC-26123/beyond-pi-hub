const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-gradient">Beyond Pi</span>
            <span className="text-xs text-muted-foreground font-mono">#26123</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Beyond Pi Robotics. FIRST® Tech Challenge Team 26123.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Gracious Professionalism®</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;