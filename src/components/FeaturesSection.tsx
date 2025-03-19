
import React from 'react';
import { 
  Layers, 
  Zap, 
  BarChart, 
  Users, 
  Lock, 
  Repeat
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
      icon: <Layers size={24} />,
      title: "Intuitive Workflows",
      description: "Create and manage complex service workflows with our drag-and-drop interface. No coding required.",
      delay: 0.1
    },
    {
      icon: <Zap size={24} />,
      title: "Automation Engine",
      description: "Automate repetitive tasks and processes to save time and reduce errors.",
      delay: 0.2
    },
    {
      icon: <BarChart size={24} />,
      title: "Advanced Analytics",
      description: "Gain insights into service performance with detailed metrics and customizable dashboards.",
      delay: 0.3
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with team members through shared workspaces and real-time updates.",
      delay: 0.4
    },
    {
      icon: <Lock size={24} />,
      title: "Enterprise Security",
      description: "Bank-grade security with role-based access control and data encryption.",
      delay: 0.5
    },
    {
      icon: <Repeat size={24} />,
      title: "API Integration",
      description: "Connect with your existing tools through our extensive API and pre-built integrations.",
      delay: 0.6
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
            Everything you need to deliver exceptional service
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            SEWA combines powerful features in an elegant, easy-to-use platform. Designed to help your business deliver better service experiences.
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
