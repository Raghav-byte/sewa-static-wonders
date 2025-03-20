
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Globe, Clock } from "lucide-react";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or need assistance? We're here to help you get the most out of SEWA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="border rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
                </div>
                
                <Button className="w-full">Send Message</Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="border rounded-xl p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:support@sewa-app.com" className="text-primary hover:underline">support@sewa-app.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+918800000000" className="text-primary hover:underline">+91 88000 00000</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p>123 Business Park, Bangalore<br />Karnataka, India 560001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Weekend: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Looking for something else?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Sales Inquiries</h3>
                      <p className="mb-2">Interested in SEWA for your business?</p>
                      <Button variant="outline" size="sm">Contact Sales</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Partner Program</h3>
                      <p className="mb-2">Become a SEWA reseller or integration partner.</p>
                      <Button variant="outline" size="sm">Partner with Us</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need immediate assistance?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our support team is available 24/7 to help you resolve any issues.
            </p>
            <Button size="lg">Chat with Support</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
