
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
              Revolutionizing Service Management
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Service Workflows,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-sewa-400"> Simplified</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SEWA transforms how businesses manage and deliver services. Build powerful workflows, automate tasks, and deliver exceptional customer experiences.
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
          
          <div className="mt-12 md:mt-16 relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl mx-auto max-w-3xl">
              <div className="bg-gradient-to-r from-sewa-600 to-sewa-700 h-1.5"></div>
              <div className="bg-gray-100/50 py-1.5 px-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-500 mx-auto">SEWA Dashboard</div>
              </div>
              <div className="relative bg-white p-4 aspect-[16/9]">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-sm text-gray-400">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 glass-card p-3 rounded-lg shadow-md hidden md:block animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white font-bold">✓</div>
                <div className="text-sm font-medium">Task Complete</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg shadow-md hidden md:block animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="text-sm font-medium">Real-time Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
