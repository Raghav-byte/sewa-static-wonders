
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Phone, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.setProperty('--x', `${x * 10}px`);
      heroRef.current.style.setProperty('--y', `${y * 10}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px) translate3d(var(--x, 0), var(--y, 0), 0)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Background glow effects */}
      <div className="hero-glow w-[400px] h-[400px] left-[10%] top-[20%]"></div>
      <div className="hero-glow w-[500px] h-[500px] right-[5%] bottom-[10%]"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              WhatsApp Business API Solution
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Automate Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-400"> WhatsApp Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Connect with customers where they already are. Send notifications, support queries, and enable conversational commerce through WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="w-full sm:w-auto btn-primary">
              Start For Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Official WhatsApp Partner</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">No coding required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Pay as you grow</span>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl mx-auto max-w-3xl">
              <div className="bg-gradient-to-r from-sewa-600 to-sewa-700 h-1.5"></div>
              <div className="bg-gray-100/50 py-1.5 px-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-500 mx-auto">SEWA WhatsApp Dashboard</div>
              </div>
              <div className="relative bg-white p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
                  {/* Dashboard preview with WhatsApp chat simulation */}
                  <div className="md:col-span-1 border rounded-md bg-white shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-t-md flex items-center justify-between">
                      <span className="text-sm font-medium">Contacts</span>
                      <span className="text-xs bg-primary/20 rounded-full px-2 py-0.5">2,453</span>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">JD</div>
                        <div>
                          <div className="text-sm font-medium">John Doe</div>
                          <div className="text-xs text-gray-500">Last message: 5m ago</div>
                        </div>
                      </div>
                      <div className="flex items-center p-2 bg-primary/5 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs mr-2">AM</div>
                        <div>
                          <div className="text-sm font-medium">Alice Miller</div>
                          <div className="text-xs text-gray-500">Last message: Just now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 border rounded-md bg-white shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-t-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs mr-2">AM</div>
                        <span className="text-sm font-medium">Alice Miller</span>
                      </div>
                    </div>
                    <div className="p-3 h-[160px] flex flex-col justify-end">
                      <div className="flex justify-start mb-2">
                        <div className="bg-gray-100 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          Hello! I'm interested in your services.
                        </div>
                      </div>
                      <div className="flex justify-end mb-2">
                        <div className="bg-primary/20 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          Hi Alice! Thanks for reaching out. How can we help you today?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg py-1 px-3 max-w-[70%] text-xs">
                          I'd like to know more about your pricing plans.
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border-t flex items-center">
                      <input type="text" className="flex-1 text-xs p-2 rounded border focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Type a message..." />
                      <Button size="sm" variant="ghost" className="ml-2">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 glass-card p-3 rounded-lg shadow-md hidden md:flex items-center gap-2 animate-float">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">New Lead</div>
                <div className="text-xs text-gray-500">Responded in 30s</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-md hidden md:block animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">Customer Satisfaction</div>
                <div className="text-sm font-bold text-primary">98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
