
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Bell
} from "lucide-react";

const Features = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful WhatsApp Business Features</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business communication with our comprehensive suite of WhatsApp tools designed to engage, convert, and delight your customers.
            </p>
            <Button size="lg" className="mr-4">Start Free Trial</Button>
            <Button size="lg" variant="outline">Book a Demo</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your WhatsApp communication?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using SEWA to engage with their customers on WhatsApp.
            </p>
            <Button size="lg">Get Started Today</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
