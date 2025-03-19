
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "SEWA transformed our customer service through WhatsApp. We've seen a 40% increase in response rates and 25% faster resolution times.",
    author: "Sarah Johnson",
    title: "Head of Customer Experience",
    company: "TechRetail Inc."
  },
  {
    id: 2,
    content: "The WhatsApp automation features have been a game-changer. Our sales team can now handle 3x more conversations with the same headcount.",
    author: "Michael Chen",
    title: "Sales Director",
    company: "Global Services Ltd."
  },
  {
    id: 3,
    content: "Implementing SEWA's WhatsApp solution was surprisingly easy. We were up and running in days, not weeks, and our customer satisfaction scores have improved significantly.",
    author: "Emma Rodriguez",
    title: "Digital Transformation Lead",
    company: "Innovate Solutions"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow w-[400px] h-[400px] left-[5%] bottom-[10%]"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary animate-fade-in">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Trusted by businesses worldwide
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            See how businesses are using SEWA to transform their WhatsApp engagement strategy and drive results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -z-10 w-32 h-32 text-primary/10">
            <Quote size={128} />
          </div>
          
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`
                  transition-opacity duration-500 absolute inset-0 p-8 md:p-12
                  ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'}
                `}
              >
                <p className="text-xl md:text-2xl font-medium mb-8 italic">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="absolute right-8 bottom-8 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={goToPrev}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
