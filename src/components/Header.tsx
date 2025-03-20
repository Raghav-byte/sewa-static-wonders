
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "py-3 bg-background/95 backdrop-blur-lg shadow-sm border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start" aria-label="Homepage">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-bold text-primary">SEWA</span>
            <span className="ml-2 text-sm text-muted-foreground">WhatsApp Provider</span>
          </motion.div>
          <span className="text-[10px] text-muted-foreground leading-tight -mt-1">
            powered by
            <a
              href="https://simpo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1 focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-2"
            >
              Simpo.ai
            </a>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {["Features", "Integrations", "Pricing", "Documentation"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors relative
                  after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px]
                  after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                  after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank">
              <Button variant="ghost" className="text-sm font-medium min-h-11 min-w-20" aria-label="Sign In">
                Sign In
              </Button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank">
              <Button variant="default" className="text-sm font-medium min-h-11 min-w-24" aria-label="Get Started">
                Get Started
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground p-2 min-h-10 min-w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col py-4 px-6">
              {["Features", "Integrations", "Pricing", "Documentation"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="py-3 text-sm font-medium hover:text-primary transition-colors block
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank">
                  <Button
                    variant="ghost"
                    className="justify-center text-sm font-medium w-full min-h-11"
                    aria-label="Sign In"
                  >
                    Sign In
                  </Button>
                </a>
                <a href="https://simpo-whatssapp.web.app/admin/whatsapp/dashboard" target="_blank">
                  <Button
                    variant="default"
                    className="justify-center text-sm font-medium w-full min-h-11"
                    aria-label="Get Started"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
