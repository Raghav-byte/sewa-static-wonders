
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, FileText, HelpCircle, Video, Zap, Mail, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Getting Started",
      description: "New to SEWA? Find guides to help you get up and running quickly."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Message Templates",
      description: "Learn how to create, submit, and optimize your WhatsApp message templates."
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
      title: "Account & Billing",
      description: "Information about your account, subscription, and billing questions."
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides for using SEWA's features effectively."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Troubleshooting",
      description: "Solutions for common issues and technical problems."
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Contact Support",
      description: "Need more help? Reach out to our dedicated support team."
    }
  ];

  const faqs = [
    {
      question: "How do I get approved for the WhatsApp Business API?",
      answer: "To get approved for the WhatsApp Business API, you need to complete the business verification process through SEWA. This includes confirming your business identity and agreeing to WhatsApp's Business Policy. Our team will guide you through each step of the process to ensure quick approval."
    },
    {
      question: "What are message templates and why do I need them?",
      answer: "Message templates are pre-approved message formats that allow businesses to send non-promotional and service-related messages to customers outside the 24-hour messaging window. Templates must be approved by WhatsApp before use and typically include customizable variables that can be personalized for each recipient."
    },
    {
      question: "What's the difference between a session message and a template message?",
      answer: "Session messages can be sent freely within a 24-hour window after a customer messages you. These don't require pre-approval and can contain any content. Template messages are used outside this 24-hour window, must follow a pre-approved format, and typically focus on service updates rather than promotional content."
    },
    {
      question: "How long does it take to get a message template approved?",
      answer: "Template approval typically takes 24-48 hours, but can sometimes take up to 5 business days depending on WhatsApp's current review volume. SEWA provides template suggestions and optimization tips to help increase your approval chances."
    },
    {
      question: "Can I send promotional messages on WhatsApp?",
      answer: "Yes, but with limitations. Promotional messages can only be sent as session messages within 24 hours of a customer's last message to you. Outside this window, you must use approved templates which generally need to be service-focused rather than promotional."
    },
    {
      question: "How do I connect my WhatsApp business number to SEWA?",
      answer: "You can connect your WhatsApp business number to SEWA through our dashboard. Navigate to Settings > WhatsApp Setup and follow the step-by-step instructions. If you don't have a WhatsApp business number yet, we can help you apply for one through the platform."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers, guides, and support for all your WhatsApp business messaging needs
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="pl-10 h-12 w-full" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {supportCategories.map((category, index) => (
              <div key={index} className="border rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline">Browse Articles</Button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="mb-12">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="bg-primary/5 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                <p className="text-muted-foreground">
                  Our support team is available 24/7 to assist you
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
