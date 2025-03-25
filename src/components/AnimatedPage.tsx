import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BubbleProps {
  baseTop: string;
  baseLeft: string;
  size: number;
  delay: number;
  duration: number;
  influence: number;
}

const Bubble = ({ baseTop, baseLeft, size, delay, duration, influence }: BubbleProps) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-primary/5 to-primary/20 dark:from-primary/10 dark:to-primary/30 backdrop-blur-3xl"
      style={{
        top: baseTop,
        left: baseLeft,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [0.8, 1.2, 0.8],
        x: [`calc(0px)`, `calc(${influence}px)`, `calc(0px)`],
        y: [`calc(0px)`, `calc(${influence}px)`, `calc(0px)`]
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export interface AnimatedPageProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const mouseX = (clientX - left) / width;
      const mouseY = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${mouseX}`);
      containerRef.current.style.setProperty('--mouse-y', `${mouseY}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const bubbles = [
    { baseTop: "10%", baseLeft: "10%", size: 300, delay: 0, duration: 25, influence: 120 },
    { baseTop: "60%", baseLeft: "20%", size: 200, delay: 5, duration: 30, influence: 80 },
    { baseTop: "30%", baseLeft: "80%", size: 250, delay: 10, duration: 35, influence: 100 },
    { baseTop: "80%", baseLeft: "70%", size: 180, delay: 15, duration: 28, influence: 90 },
    { baseTop: "40%", baseLeft: "40%", size: 350, delay: 7, duration: 32, influence: 130 },
  ];
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          baseTop={bubble.baseTop}
          baseLeft={bubble.baseLeft}
          size={bubble.size}
          delay={bubble.delay}
          duration={bubble.duration}
          influence={bubble.influence}
        />
      ))}
    </div>
  );
};

const AnimatedPage = ({ children, title, description }: AnimatedPageProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="flex min-h-screen flex-col"
    >
      <Header />
      <AnimatedBackground />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default AnimatedPage;
