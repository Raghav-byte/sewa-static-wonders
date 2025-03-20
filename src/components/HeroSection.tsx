
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone, CheckCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      heroRef.current.style.setProperty("--x", `${x * 10}px`);
      heroRef.current.style.setProperty("--y", `${y * 10}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatingElements = Array(6).fill(0).map((_, i) => ({
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transform:
          "perspective(1000px) translate3d(var(--x, 0), var(--y, 0), 0)",
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Decorative graphic elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className="hero-glow w-[400px] h-[400px] left-[10%] top-[20%] opacity-75"></div>
        <div className="hero-glow w-[500px] h-[500px] right-[5%] bottom-[10%] opacity-75"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating elements */}
        {floatingElements.map((el, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
            style={{
              width: `${el.size}px`,
              height: `${el.size}px`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              animation: `float ${el.duration}s ease-in-out ${el.delay}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              WhatsApp Business API Solution
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6"
            variants={itemVariants}
          >
            Automate Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-400">
              {" "}
              WhatsApp Business
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Connect with customers where they already are. Send notifications,
            support queries, and enable conversational commerce through
            WhatsApp.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="w-full sm:w-auto btn-primary group">
              Start For Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto group">
              Watch Demo
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8"
            variants={itemVariants}
          >
            {[
              "Official WhatsApp Partner",
              "No coding required",
              "Pay as you grow"
            ].map((item, i) => (
              <motion.div 
                className="flex items-center"
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 md:mt-16 relative"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl mx-auto max-w-3xl transform transition-all duration-500 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-sewa-600 to-sewa-700 h-1.5"></div>
              <div className="bg-gray-100/50 dark:bg-gray-800/40 py-1.5 px-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mx-auto">
                  SEWA WhatsApp Dashboard
                </div>
              </div>
              <div className="relative bg-white dark:bg-gray-900 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  {/* Dashboard preview with WhatsApp chat simulation */}
                  <div className="md:col-span-1 border dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-t-md flex items-center justify-between">
                      <span className="text-sm font-medium">Contacts</span>
                      <span className="text-xs bg-primary/20 rounded-full px-2 py-0.5">
                        2,453
                      </span>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs mr-2">
                          JD
                        </div>
                        <div>
                          <div className="text-sm font-medium">John Doe</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last message: 5m ago
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-2 bg-primary/5 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs mr-2">
                          AM
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            Alice Miller
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last message: Just now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 border dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-t-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs mr-2">
                          AM
                        </div>
                        <span className="text-sm font-medium">
                          Alice Miller
                        </span>
                      </div>
                    </div>
                    <div className="p-3 h-[160px] flex flex-col justify-end">
                      <div className="flex justify-start mb-2">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          Hello! I'm interested in your services.
                        </div>
                      </div>
                      <div className="flex justify-end mb-2">
                        <div className="bg-primary/20 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          Hi Alice! Thanks for reaching out. How can we help you
                          today?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          I'd like to know more about your pricing plans.
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-t dark:border-gray-700 flex items-center">
                      <input
                        type="text"
                        className="flex-1 text-xs p-2 rounded border dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800"
                        placeholder="Type a message..."
                      />
                      <Button size="sm" variant="ghost" className="ml-2">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -left-6 glass-card p-3 rounded-lg shadow-md hidden md:flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">New Lead</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Responded in 30s</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-md hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">Customer Satisfaction</div>
                <div className="text-sm font-bold text-primary">98%</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
