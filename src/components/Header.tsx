
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/90 backdrop-blur-lg shadow-sm border-b border-border"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">SEWA</span>
            <span className="ml-2 text-sm text-muted-foreground">WhatsApp Provider</span>
          </div>
          <span className="text-[10px] text-muted-foreground leading-tight -mt-1">
            powered by
            <a
              href="https://simpo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              Simpo.ai
            </a>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            to="/integrations"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Integrations
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/documentation"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Documentation
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank"><Button variant="ghost" className="text-sm font-medium">
            Sign In
          </Button></a>
          <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank"><Button variant="default" className="text-sm font-medium">
            Get Started
          </Button></a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in border-b border-border">
          <nav className="flex flex-col py-4 px-6">
            <Link
              to="/features"
              className="py-3 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/integrations"
              className="py-3 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              to="/pricing"
              className="py-3 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/documentation"
              className="py-3 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Button
                variant="ghost"
                className="justify-center text-sm font-medium"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                className="justify-center text-sm font-medium"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
