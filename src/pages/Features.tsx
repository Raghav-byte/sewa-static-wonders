
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
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
  Zap,
  PieChart,
  Bell,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "WhatsApp API Integration",
      description:
        "Connect to WhatsApp Business API quickly with zero technical knowledge required. Start sending messages in minutes, not days."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI Chatbots",
      description:
        "Build intelligent, automated responses that handle customer queries 24/7. Our AI understands context and delivers natural conversations."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Track message performance, response rates, and customer engagement metrics. Make data-driven decisions to improve your campaigns."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "Conversational Commerce",
      description:
        "Enable customers to browse products, make purchases, and track orders via WhatsApp. Turn conversations into conversions."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Inbox",
      description:
        "Collaborative team inbox to manage all WhatsApp conversations in one place. Assign conversations, add internal notes, and track resolution."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Appointment Scheduling",
      description:
        "Let customers book appointments directly through WhatsApp conversations. Send automated reminders to reduce no-shows."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Message Templates",
      description:
        "Create and save reusable message templates approved by WhatsApp. Personalize them with customer data for a personal touch."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption with role-based access control and data protection. Your customer conversations are always secure."
    },
    {
      icon: <Repeat className="h-10 w-10 text-primary" />,
      title: "Seamless Integration",
      description:
        "Connect with your CRM, e-commerce platforms, and other business tools. Keep all your customer data in sync."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Broadcast Campaigns",
      description:
        "Send personalized messages to segmented customer lists. Reach thousands of customers with just a few clicks."
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Customer Segmentation",
      description:
        "Group customers based on behavior, preferences, and purchase history. Target the right audience with the right message."
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Automated Notifications",
      description:
        "Send order confirmations, shipping updates, and payment reminders automatically. Keep customers informed at every step."
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <AnimatedPage
      title="Powerful WhatsApp Business Features"
      description="Transform your business communication with our comprehensive suite of WhatsApp tools designed to engage, convert, and delight your customers."
    >
      <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button size="lg" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button size="lg" variant="outline">Book a Demo</Button>
        </motion.div>
      </motion.div>
      
      {/* Animated feature illustration */}
      <motion.div
        className="w-full max-w-4xl mx-auto mb-16 relative h-64 overflow-hidden rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 moving-gradient opacity-20 rounded-xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="flex items-center gap-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <MessageSquare className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                x: [0, 200],
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-3 w-3 rounded-full bg-primary"
            />
            <motion.div 
              className="w-16 h-16 rounded-full glass-card flex items-center justify-center"
              animate={{ x: [40, 0, 40] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 card-3d bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-4 text-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-500">Ready to transform your WhatsApp communication?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using SEWA to engage with their customers on WhatsApp.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button size="lg" className="group">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Features;
