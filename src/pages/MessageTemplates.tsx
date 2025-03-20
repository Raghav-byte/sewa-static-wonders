
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ShoppingCart, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Users,
  Bell,
  CreditCard
} from "lucide-react";

const MessageTemplates = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const templateCategories = [
    "All Templates",
    "E-commerce",
    "Appointments",
    "Customer Service",
    "Authentication",
    "Notifications",
    "Marketing"
  ];

  const templates = [
    {
      name: "Order Confirmation",
      category: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      status: "Approved",
      preview: "Hi {{1}}, thank you for your order! Your order #{{2}} has been confirmed and is being processed. You will receive a notification when it ships."
    },
    {
      name: "Shipping Update",
      category: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      status: "Approved",
      preview: "Good news, {{1}}! Your order #{{2}} has shipped and is on its way to you. Estimated delivery: {{3}}. Track your package: {{4}}"
    },
    {
      name: "Appointment Reminder",
      category: "Appointments",
      icon: <Calendar className="h-5 w-5" />,
      status: "Approved",
      preview: "Hello {{1}}, this is a reminder that you have an appointment scheduled for {{2}} at {{3}}. Reply YES to confirm or NO to reschedule."
    },
    {
      name: "Abandoned Cart",
      category: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      status: "Pending",
      preview: "Hi {{1}}, we noticed you left some items in your cart. Your items are still available. Complete your purchase now: {{2}}"
    },
    {
      name: "Authentication Code",
      category: "Authentication",
      icon: <AlertTriangle className="h-5 w-5" />,
      status: "Approved",
      preview: "Your verification code is {{1}}. This code will expire in 10 minutes. Do not share this code with anyone."
    },
    {
      name: "Payment Confirmation",
      category: "E-commerce",
      icon: <CreditCard className="h-5 w-5" />,
      status: "Approved",
      preview: "Thank you, {{1}}! Your payment of {{2}} has been received for invoice #{{3}}. Your receipt has been emailed to you."
    },
    {
      name: "Event Reminder",
      category: "Notifications",
      icon: <Bell className="h-5 w-5" />,
      status: "Rejected",
      preview: "Hi {{1}}, this is a reminder that {{2}} is happening tomorrow at {{3}}. We look forward to seeing you there!"
    },
    {
      name: "Subscription Renewal",
      category: "Customer Service",
      icon: <Clock className="h-5 w-5" />,
      status: "Approved",
      preview: "Hello {{1}}, your subscription will renew on {{2}}. You will be charged {{3}}. To manage your subscription, visit: {{4}}"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Message Templates</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our library of pre-approved WhatsApp Business message templates or learn how to create your own.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button>Create New Template</Button>
              <Button variant="outline">Template Guidelines</Button>
              <Button variant="outline">Variables Guide</Button>
            </div>

            <Tabs defaultValue="gallery">
              <TabsList className="mb-8">
                <TabsTrigger value="gallery">Template Gallery</TabsTrigger>
                <TabsTrigger value="create">Create Template</TabsTrigger>
                <TabsTrigger value="guidelines">Approval Guidelines</TabsTrigger>
              </TabsList>
              
              <TabsContent value="gallery">
                <div className="mb-6 flex flex-wrap gap-3">
                  {templateCategories.map((category, index) => (
                    <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {templates.map((template, index) => (
                    <div key={index} className="border rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <div className="bg-primary/10 p-2 rounded-full mr-3">
                            {template.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold">{template.name}</h3>
                            <span className="text-sm text-muted-foreground">{template.category}</span>
                          </div>
                        </div>
                        <Badge variant={
                          template.status === "Approved" ? "default" : 
                          template.status === "Pending" ? "outline" : "destructive"
                        }>
                          {template.status === "Approved" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {template.status === "Pending" && <Clock className="h-3 w-3 mr-1" />}
                          {template.status === "Rejected" && <AlertTriangle className="h-3 w-3 mr-1" />}
                          {template.status}
                        </Badge>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm mb-4">
                        {template.preview}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Use Template</Button>
                        <Button size="sm" variant="ghost">Preview</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="create">
                <div className="bg-primary/5 rounded-xl p-8 text-center">
                  <FileText className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Create Custom Templates</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Design message templates that match your brand voice and meet WhatsApp's guidelines for fast approval.
                  </p>
                  <Button>Start Creating</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="guidelines">
                <div className="prose prose-lg max-w-none">
                  <h2>WhatsApp Template Guidelines</h2>
                  <p>
                    To ensure your templates are approved quickly, follow these guidelines when creating templates:
                  </p>
                  
                  <h3>Do's</h3>
                  <ul>
                    <li>Be clear and concise in your messaging</li>
                    <li>Use proper grammar and punctuation</li>
                    <li>Personalize messages with variables</li>
                    <li>Include a clear call-to-action when appropriate</li>
                    <li>Provide value to the recipient</li>
                  </ul>
                  
                  <h3>Don'ts</h3>
                  <ul>
                    <li>Include prohibited content (gambling, alcohol, adult content)</li>
                    <li>Use all caps or excessive punctuation</li>
                    <li>Include pricing information in marketing templates</li>
                    <li>Use URL shorteners that hide the destination</li>
                    <li>Include deceptive or misleading content</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Need help with template creation?</h3>
              <p className="text-muted-foreground mb-6">
                Our team can assist you in creating templates that are both effective and compliant with WhatsApp's guidelines.
              </p>
              <Button>Contact Template Specialist</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MessageTemplates;
