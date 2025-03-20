
import React, { useEffect } from "react";
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

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow pt-24 pb-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
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
