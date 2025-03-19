
import React from 'react';
import { 
  MessageSquare, 
  Bot, 
  BarChart, 
  Users, 
  Shield, 
  Repeat,
  ShoppingCart,
  Calendar,
  FileText
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp API Integration",
      description: "Connect to WhatsApp Business API quickly with zero technical knowledge required.",
      delay: 0.1
    },
    {
      icon: <Bot size={24} />,
      title: "AI Chatbots",
      description: "Build intelligent, automated responses that handle customer queries 24/7.",
      delay: 0.2
    },
    {
      icon: <BarChart size={24} />,
      title: "Advanced Analytics",
      description: "Track message performance, response rates, and customer engagement metrics.",
      delay: 0.3
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Conversational Commerce",
      description: "Enable customers to browse products, make purchases, and track orders via WhatsApp.",
      delay: 0.4
    },
    {
      icon: <Users size={24} />,
      title: "Team Inbox",
      description: "Collaborative team inbox to manage all WhatsApp conversations in one place.",
      delay: 0.5
    },
    {
      icon: <Calendar size={24} />,
      title: "Appointment Scheduling",
      description: "Let customers book appointments directly through WhatsApp conversations.",
      delay: 0.6
    },
    {
      icon: <FileText size={24} />,
      title: "Message Templates",
      description: "Create and save reusable message templates approved by WhatsApp.",
      delay: 0.7
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "End-to-end encryption with role-based access control and data protection.",
      delay: 0.8
    },
    {
      icon: <Repeat size={24} />,
      title: "Seamless Integration",
      description: "Connect with your CRM, e-commerce platforms, and other business tools.",
      delay: 0.9
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow w-[400px] h-[400px] right-[-10%] top-[30%]"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary animate-fade-in">
            Powerful Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Everything you need for WhatsApp Business
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            SEWA combines powerful features in an elegant, easy-to-use platform. Designed to help your business leverage WhatsApp for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
