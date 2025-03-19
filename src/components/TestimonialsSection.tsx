
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
    content: "SEWA has completely transformed how we manage our customer service operations. The automation features alone save us 20+ hours every week.",
    author: "Sarah Johnson",
    title: "Head of Customer Success",
    company: "TechVision Inc."
  },
  {
    id: 2,
    content: "The intuitive interface made it easy for our team to adopt. We saw an immediate 40% reduction in response times after implementing SEWA.",
    author: "Michael Chen",
    title: "Operations Director",
    company: "Global Services Ltd."
  },
  {
    id: 3,
    content: "I was skeptical at first, but SEWA has exceeded all our expectations. Our client satisfaction scores have increased by 35% in just three months.",
    author: "Emma Rodriguez",
    title: "Customer Experience Manager",
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
            Loved by service teams globally
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover how SEWA is helping businesses transform their service delivery and delight customers.
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
