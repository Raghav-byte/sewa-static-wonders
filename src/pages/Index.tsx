
import React, { useEffect } from "react";
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

  // Optimized decoration elements - reduced number and complexity
  const decorativeElements = [
    { top: '10%', left: '5%', size: 300, delay: 0, duration: 8 },
    { top: '60%', left: '10%', size: 250, delay: 0.5, duration: 12 },
    { top: '85%', right: '5%', size: 180, delay: 1.5, duration: 9 },
  ];

  return (
    <motion.div 
      className="flex flex-col min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background grid - reduced opacity for better contrast */}
      <div className="fixed inset-0 animated-grid opacity-20 -z-10"></div>
      
      {/* Reduced number of decorative elements for better performance */}
      {decorativeElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full circle-decoration -z-10"
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            width: el.size,
            height: el.size,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Reduced number of floating elements */}
      <motion.div 
        className="absolute top-1/3 left-0 w-24 h-24 rounded-full bg-primary/10 blur-xl -z-10"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Header />
      <main>
        <HeroSection />
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
