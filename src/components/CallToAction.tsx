import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow w-[500px] h-[500px] right-[5%] top-[20%]"></div>
      <div className="hero-glow w-[400px] h-[400px] left-[10%] bottom-[10%]"></div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="relative glass-card bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <MessageSquare className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
              Ready to transform your WhatsApp Business strategy?
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Join thousands of businesses using SEWA WhatsApp to connect with
              customers where they already are. Start your free trial today.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button size="lg" className="w-full sm:w-auto btn-primary">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
