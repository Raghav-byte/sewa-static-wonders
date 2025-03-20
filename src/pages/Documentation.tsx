
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Code, MessageSquare, BookOpen, HelpCircle, Zap } from "lucide-react";

const Documentation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const docCategories = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn the basics of setting up your SEWA account and sending your first message",
      links: ["Quick Start Guide", "Account Setup", "WhatsApp Business API Basics", "Dashboard Overview"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Reference",
      description: "Detailed documentation for developers looking to integrate with our API",
      links: ["Authentication", "Sending Messages", "Receiving Messages", "Webhooks", "Error Handling"]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Message Templates",
      description: "Create and manage approved WhatsApp message templates",
      links: ["Template Creation", "Template Variables", "Media Templates", "Template Submission", "Common Rejections"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Guides & Tutorials",
      description: "Step-by-step guides for common use cases and advanced features",
      links: ["Building a Chatbot", "Setting Up a Team Inbox", "Creating Broadcast Campaigns", "Integration Guides"]
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Troubleshooting",
      description: "Solutions for common issues and FAQs",
      links: ["Connection Issues", "Message Delivery Problems", "Account Verification", "Billing Questions"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Best Practices",
      description: "Recommendations for maximizing engagement and compliance",
      links: ["Message Timing", "Content Guidelines", "GDPR Compliance", "Opt-in Management", "Analytics Insights"]
    }
  ];

  const popularArticles = [
    "Getting Your WhatsApp Business Account Verified",
    "Understanding Message Template Categories",
    "How to Set Up WhatsApp Payment Links",
    "Troubleshooting Message Delivery Issues",
    "Building Your First WhatsApp Chatbot"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about using SEWA for WhatsApp Business messaging
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10 h-12 w-full" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {docCategories.map((category, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-primary hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
            <div className="border rounded-xl divide-y">
              {popularArticles.map((article, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="block p-4 hover:bg-primary/5 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <FileText className="mr-3 text-primary h-5 w-5" />
                    <span>{article}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Need more help?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is always ready to assist you with any questions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button>Contact Support</Button>
                <Button variant="outline">Join Community</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
