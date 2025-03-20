
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideCompass, LucideHome, LucideRefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Animation for spinning gear
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 8
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 animated-grid opacity-20 -z-10"></div>
      
      {/* Decorative bubbles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-xl -z-10"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-xl -z-10"
        animate={{ 
          y: [0, 20, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="container max-w-3xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Title with animation */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full"></div>
        </motion.div>
        
        {/* Spinning compass animation */}
        <motion.div
          className="mb-8 inline-block"
          animate={{ rotate: 360 }}
          transition={spinTransition}
          variants={itemVariants}
        >
          <LucideCompass className="w-24 h-24 text-primary/80" />
        </motion.div>
        
        {/* Message */}
        <motion.div className="mb-8 space-y-4" variants={itemVariants}>
          <h2 className="text-3xl font-bold">You seem lost in the digital woods</h2>
          <p className="text-xl text-muted-foreground">
            The page you're looking for has wandered off or never existed.
          </p>
        </motion.div>
        
        {/* Fun animation of path not found */}
        <motion.div 
          className="mb-12 mx-auto max-w-md"
          variants={itemVariants}
        >
          <div className="relative h-16 flex items-center justify-between px-4 py-2 border-2 border-dashed border-primary/50 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-mono text-sm opacity-70">{location.pathname}</p>
            </div>
            
            <motion.div 
              className="w-4 h-4 rounded-full bg-red-500 z-10"
              animate={{
                x: [0, '100%', '50%', '100%', '75%', '0%'],
                opacity: [1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="w-8 h-8 rounded-full border-4 border-primary z-10 flex items-center justify-center bg-background text-primary"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-xs font-bold">404</span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            onClick={() => navigate('/')}
            className="group"
          >
            <LucideHome className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Return Home
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate(-1)}
            className="group"
          >
            <LucideRefreshCw className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Go Back
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
