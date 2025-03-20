
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AnimatedPageProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showCta?: boolean;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ 
  children, 
  title, 
  description, 
  showCta = false 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Decorative elements for background with cursor interactivity
  const decorativeElements = [
    { baseTop: '15%', baseLeft: '5%', size: 300, delay: 0, duration: 8, influence: 0.03 },
    { baseTop: '25%', baseRight: '10%', size: 200, delay: 1, duration: 10, influence: 0.02 },
    { baseTop: '70%', baseLeft: '8%', size: 250, delay: 0.5, duration: 12, influence: 0.04 },
  ];

  return (
    <motion.div
      className="flex flex-col min-h-screen relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Animated background grid */}
      <div className="fixed inset-0 animated-grid opacity-30 -z-10 dark:opacity-10"></div>
      
      {/* Decorative animated elements with cursor interactivity */}
      {decorativeElements.map((el, index) => {
        // Calculate cursor influence
        const offsetX = mousePosition.x * el.influence;
        const offsetY = mousePosition.y * el.influence;
        
        return (
          <motion.div
            key={index}
            className="absolute rounded-full interactive-bubble -z-10"
            style={{
              top: el.baseTop,
              left: el.baseLeft,
              right: el.baseRight,
              width: el.size,
              height: el.size,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              x: offsetX,
              y: offsetY,
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
              x: { duration: 0.2 },
              y: { duration: 0.2 },
            }}
          />
        );
      })}
      
      {/* 3D floating elements that follow cursor */}
      <motion.div 
        className="absolute top-1/3 right-0 w-24 h-24 rounded-full bg-primary/10 blur-xl -z-10 interactive-bubble"
        animate={{ 
          y: [0, -20, 0],
          x: mousePosition.x * -0.01,
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          x: { duration: 0.3 }
        }}
      />
      
      <Header />
      <main className="flex-grow pt-24 pb-16 relative overflow-hidden">
        {/* Background decorative elements - using gradient classes for light mode */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/5 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent dark:from-primary/5 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-grid-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-6 md:px-8">
          {(title || description) && (
            <motion.div
              className="max-w-4xl mx-auto mb-16 text-center"
              variants={contentVariants}
              initial="initial"
              animate="in"
            >
              {title && (
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-500"
                >
                  {title}
                </motion.h1>
              )}
              {description && (
                <p className="text-xl text-muted-foreground mb-8">
                  {description}
                </p>
              )}
            </motion.div>
          )}

          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="in"
          >
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AnimatedPage;
