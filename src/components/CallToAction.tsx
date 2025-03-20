
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="hero-glow w-[500px] h-[500px] right-[5%] top-[20%]"></div>
      <div className="hero-glow w-[400px] h-[400px] left-[10%] bottom-[10%]"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-grid-pattern opacity-5 -z-10"></div>

      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          className="relative glass-card bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-16 overflow-hidden border border-white/10 dark:border-gray-800/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.div 
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-sewa-400/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="p-4 rounded-full bg-primary/10 dark:bg-primary/20">
                <MessageSquare className="h-10 w-10 text-primary" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to transform your WhatsApp Business strategy?
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of businesses using SEWA WhatsApp to connect with
              customers where they already are. Start your free trial today.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="w-full sm:w-auto btn-primary group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
