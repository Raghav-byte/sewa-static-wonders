
import React from "react";
import {
  MessageSquare,
  Bot,
  BarChart,
  Users,
  Shield,
  Repeat,
  ShoppingCart,
  Calendar,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const FeatureCard = ({ icon, title, description, delay, index }: FeatureCardProps) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <motion.div
      className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 hover:-translate-y-1 relative overflow-hidden group card-3d"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background gradient that moves on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Decorative dots pattern */}
      <div className="absolute right-0 bottom-0 w-24 h-24 bg-dots-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      <motion.div 
        className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Interactive element that appears on hover */}
      <motion.div 
        className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-primary/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary/10"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp API Integration",
      description:
        "Connect to WhatsApp Business API quickly with zero technical knowledge required.",
      delay: 0.1,
    },
    {
      icon: <Bot size={24} />,
      title: "AI Chatbots",
      description:
        "Build intelligent, automated responses that handle customer queries 24/7.",
      delay: 0.2,
    },
    {
      icon: <BarChart size={24} />,
      title: "Advanced Analytics",
      description:
        "Track message performance, response rates, and customer engagement metrics.",
      delay: 0.3,
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Conversational Commerce",
      description:
        "Enable customers to browse products, make purchases, and track orders via WhatsApp.",
      delay: 0.4,
    },
    {
      icon: <Users size={24} />,
      title: "Team Inbox",
      description:
        "Collaborative team inbox to manage all WhatsApp conversations in one place.",
      delay: 0.5,
    },
    {
      icon: <Calendar size={24} />,
      title: "Appointment Scheduling",
      description:
        "Let customers book appointments directly through WhatsApp conversations.",
      delay: 0.6,
    },
    {
      icon: <FileText size={24} />,
      title: "Message Templates",
      description:
        "Create and save reusable message templates approved by WhatsApp.",
      delay: 0.7,
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption with role-based access control and data protection.",
      delay: 0.8,
    },
    {
      icon: <Repeat size={24} />,
      title: "Seamless Integration",
      description:
        "Connect with your CRM, e-commerce platforms, and other business tools.",
      delay: 0.9,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow effects with enhanced gradients */}
      <div className="hero-glow w-[400px] h-[400px] right-[-10%] top-[30%]"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-0 right-0 w-full h-full moving-gradient opacity-10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full -z-10 opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary/20 rounded-full -z-10 opacity-40"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-40 left-[15%] w-16 h-16 rounded-full bg-primary/10 -z-10"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-[20%] w-12 h-12 rounded-full bg-primary/10 -z-10"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Powerful Capabilities
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need for WhatsApp Business
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SEWA combines powerful features in an elegant, easy-to-use platform.
            Designed to help your business leverage WhatsApp for growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        
        {/* Interactive demo element - animated */}
        <motion.div 
          className="mt-20 max-w-3xl mx-auto bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-full animated-grid opacity-30"></div>
          
          <motion.div 
            className="relative flex items-center justify-center"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <div className="p-4 max-w-xs">
              <div className="flex gap-3 items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div className="text-sm font-medium">WhatsApp Business</div>
              </div>
              <div className="bg-primary/5 p-3 rounded-lg mb-2 text-sm">
                Hello! How can we help you today?
              </div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-3 rounded-lg ml-auto max-w-[80%] text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                I'd like to know more about your services
              </motion.div>
              <motion.div
                className="w-16 h-6 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <span className="text-xs text-muted-foreground">typing...</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
