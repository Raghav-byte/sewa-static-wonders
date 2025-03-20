
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
      className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 hover:-translate-y-1 relative overflow-hidden group"
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
      {/* Background glow */}
      <div className="hero-glow w-[400px] h-[400px] right-[-10%] top-[30%]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full -z-10 opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 border border-primary/20 rounded-full -z-10 opacity-40"></div>

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
            className="text-3xl md:text-4xl font-bold mb-6"
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
      </div>
    </section>
  );
};

export default FeaturesSection;
