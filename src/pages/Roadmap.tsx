
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  CheckCircle2, 
  Clock, 
  AlarmClock, 
  LightbulbIcon, 
  ThumbsUp, 
  MessagesSquare 
} from "lucide-react";

const Roadmap = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingFeatures = [
    {
      title: "AI Content Generator for Templates",
      description: "Generate WhatsApp message templates with AI assistance, ensuring compliance with platform guidelines and optimizing for engagement.",
      timeline: "Q3 2023",
      category: "AI & Automation",
      status: "in-progress",
      progress: 75,
      priority: "high"
    },
    {
      title: "Shopify Integration Enhancement",
      description: "Deeper integration with Shopify, including product catalog sync, order updates, and abandoned cart recovery automation.",
      timeline: "Q3 2023",
      category: "Integrations",
      status: "in-progress",
      progress: 60,
      priority: "high"
    },
    {
      title: "Multi-channel Inbox",
      description: "Unified inbox that combines WhatsApp, Instagram, and Facebook Messenger conversations in a single interface.",
      timeline: "Q4 2023",
      category: "Core Platform",
      status: "planned",
      progress: 20,
      priority: "medium"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Enhanced analytics with conversation insights, team performance metrics, and custom reporting options.",
      timeline: "Q4 2023",
      category: "Analytics",
      status: "planned",
      progress: 10,
      priority: "medium"
    },
    {
      title: "WhatsApp Payments Integration",
      description: "Enable customers to make payments directly through WhatsApp conversations without leaving the chat.",
      timeline: "Q1 2024",
      category: "Commerce",
      status: "planned",
      progress: 5,
      priority: "high"
    },
    {
      title: "Multilingual Chatbot Builder",
      description: "Build chatbots that can detect and respond in multiple languages, with automatic language detection.",
      timeline: "Q1 2024",
      category: "AI & Automation",
      status: "research",
      progress: 0,
      priority: "medium"
    }
  ];

  const recentReleases = [
    {
      title: "Team Collaboration Features",
      description: "Internal notes, conversation assignments, and team performance tracking.",
      releaseDate: "August 15, 2023",
      category: "Core Platform"
    },
    {
      title: "Broadcast Campaign Manager",
      description: "Create, schedule, and analyze broadcast campaigns with audience segmentation.",
      releaseDate: "July 20, 2023",
      category: "Marketing"
    },
    {
      title: "CRM Integration Suite",
      description: "Connect with popular CRMs including Salesforce, HubSpot, and Zoho.",
      releaseDate: "June 8, 2023",
      category: "Integrations"
    },
    {
      title: "Message Template Library",
      description: "Pre-built template collection with approval rate optimization.",
      releaseDate: "May 12, 2023",
      category: "Templates"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Roadmap</h1>
            <p className="text-xl text-muted-foreground mb-8">
              See what we're working on and what's coming next to SEWA's WhatsApp Business platform
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="mr-3 h-6 w-6 text-primary" />
              Upcoming Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingFeatures.map((feature, index) => (
                <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={
                      feature.priority === "high" ? "default" :
                      feature.priority === "medium" ? "secondary" : "outline"
                    }>
                      {feature.priority.charAt(0).toUpperCase() + feature.priority.slice(1)} Priority
                    </Badge>
                    <Badge variant="outline">
                      {feature.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{feature.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      {feature.status === "in-progress" && <AlarmClock className="h-4 w-4 mr-2 text-amber-500" />}
                      {feature.status === "planned" && <Clock className="h-4 w-4 mr-2 text-blue-500" />}
                      {feature.status === "research" && <LightbulbIcon className="h-4 w-4 mr-2 text-purple-500" />}
                      <span className="text-sm capitalize">
                        {feature.status.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  
                  {feature.status === "in-progress" && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${feature.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle2 className="mr-3 h-6 w-6 text-green-500" />
              Recently Released
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentReleases.map((release, index) => (
                <div key={index} className="border rounded-xl p-5 hover:shadow-sm transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{release.title}</h3>
                    <Badge variant="outline">{release.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{release.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Released on {release.releaseDate}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    <ThumbsUp className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Have a feature request?</h2>
                  <p className="text-muted-foreground mb-6 md:mb-0 max-w-md">
                    We value your input! Tell us what features would help your business get the most out of WhatsApp.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button size="lg" className="mb-3 w-full md:w-auto">Submit Feature Request</Button>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MessagesSquare className="h-4 w-4 mr-2" />
                    <span>Join our feedback community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
