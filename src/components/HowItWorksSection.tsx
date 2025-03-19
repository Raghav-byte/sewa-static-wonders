
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Define your service workflow",
    description: "Map out your service processes step by step. Create triggers, actions and decision points.",
    points: [
      "Drag-and-drop workflow builder",
      "Pre-built templates for common service scenarios",
      "Visual process mapping"
    ]
  },
  {
    number: "02",
    title: "Configure automations",
    description: "Set up automated actions that trigger based on specific conditions and events.",
    points: [
      "No-code automation setup",
      "Conditional logic capabilities",
      "Scheduled and event-based triggers"
    ]
  },
  {
    number: "03",
    title: "Deploy and optimize",
    description: "Launch your workflows and continuously improve them with analytics and feedback.",
    points: [
      "One-click deployment",
      "Performance monitoring",
      "A/B testing capabilities"
    ]
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary animate-fade-in">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            How SEWA works
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Get started in minutes with our intuitive platform designed for simplicity and power.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-1/2 top-full h-20 md:h-32 w-0.5 bg-gradient-to-b from-primary/50 to-primary/0 hidden sm:block"></div>
              )}
              
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                {/* Step number and image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold absolute -top-6 -left-6 z-10">
                      {step.number}
                    </div>
                    <div className="aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100">
                      {/* This would be an image in a real implementation */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                        <div className="text-center text-gray-400">
                          <div className="text-sm">Step {step.number} Illustration</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
