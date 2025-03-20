
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  // Scroll to top on page load
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

  // Animated elements for decorative purposes with cursor follow effect
  const decorativeElements = [
    { baseTop: '10%', baseLeft: '5%', size: 300, delay: 0, duration: 8, influence: 0.02 },
    { baseTop: '20%', baseRight: '15%', size: 200, delay: 1, duration: 10, influence: 0.04 },
    { baseTop: '60%', baseLeft: '10%', size: 250, delay: 0.5, duration: 12, influence: 0.03 },
    { baseTop: '85%', baseRight: '5%', size: 180, delay: 1.5, duration: 9, influence: 0.05 },
  ];

  return (
    <motion.div 
      className="flex flex-col min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background grid */}
      <div className="fixed inset-0 animated-grid opacity-30 -z-10"></div>
      
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
        className="absolute top-1/3 left-0 w-24 h-24 rounded-full bg-primary/10 blur-xl -z-10 interactive-bubble"
        animate={{ 
          y: [0, -30, 0],
          x: mousePosition.x * 0.02,
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          x: { duration: 0.3 }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full bg-primary/10 blur-xl -z-10 interactive-bubble"
        animate={{ 
          y: [0, -20, 0],
          x: mousePosition.x * -0.02,
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
          x: { duration: 0.3 }
        }}
      />
      
      <Header />
      <main>
        <HeroSection />
        
        {/* Enhanced Wave divider - fixed for light mode */}
        <div className="wave-divider-light"></div>
        
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
