
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  ShoppingBag, 
  Users, 
  Building, 
  Globe, 
  Heart, 
  Utensils, 
  Briefcase 
} from "lucide-react";

const CaseStudies = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      title: "Fashion Retailer Boosts Sales by 35% with WhatsApp Campaigns",
      industry: "Retail",
      icon: <ShoppingBag className="h-6 w-6" />,
      results: ["35% increase in sales", "28% higher customer retention", "3x ROI on marketing spend"],
      description: "Learn how a leading fashion retailer implemented WhatsApp campaigns to re-engage customers, recover abandoned carts, and provide personalized shopping experiences.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "SaaS Company Improves Customer Onboarding with WhatsApp Automation",
      industry: "Technology",
      icon: <Briefcase className="h-6 w-6" />,
      results: ["42% reduction in support tickets", "67% faster onboarding process", "91% positive customer feedback"],
      description: "See how a B2B SaaS company streamlined customer onboarding by implementing an AI-powered WhatsApp chatbot that guides users through setup and answers common questions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Healthcare Provider Reduces No-Shows by 75% with WhatsApp Reminders",
      industry: "Healthcare",
      icon: <Heart className="h-6 w-6" />,
      results: ["75% reduction in missed appointments", "30% time savings for staff", "Improved patient satisfaction"],
      description: "Discover how a healthcare network implemented automated WhatsApp appointment reminders and confirmations, dramatically reducing no-shows and improving operational efficiency.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Restaurant Chain Increases Ordering by 52% with WhatsApp Menu",
      industry: "Food & Beverage",
      icon: <Utensils className="h-6 w-6" />,
      results: ["52% increase in online orders", "38% higher average order value", "Reduced call center volume by 45%"],
      description: "Learn how a restaurant chain implemented a WhatsApp-based ordering system, allowing customers to browse menus, place orders, and make payments directly through the messaging app.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Global Travel Agency Enhances Customer Service with WhatsApp Support",
      industry: "Travel",
      icon: <Globe className="h-6 w-6" />,
      results: ["85% faster response times", "73% customer satisfaction increase", "24/7 support without increasing staff"],
      description: "See how a travel agency implemented WhatsApp Business API to provide real-time travel updates, booking confirmations, and instant customer support across multiple languages.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "E-commerce Marketplace Drives 40% More Conversions with WhatsApp",
      industry: "E-commerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      results: ["40% higher conversion rate", "65% faster customer issue resolution", "22% increase in repeat purchases"],
      description: "Discover how an e-commerce marketplace integrated WhatsApp into their buyer journey, from product recommendations to order tracking and customer support.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    }
  ];

  const industries = ["All Industries", "Retail", "E-commerce", "Healthcare", "Technology", "Food & Beverage", "Travel", "Financial Services", "Education"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Success Stories</h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how businesses across industries are transforming their customer communication with SEWA's WhatsApp solutions.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="mb-2">
                {industry}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                      {study.icon}
                    </div>
                    <span className="text-sm font-medium">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">Read Full Case Study</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already achieving remarkable results with SEWA's WhatsApp Business solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Start Your Free Trial</Button>
              <Button size="lg" variant="outline">Schedule a Demo</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
