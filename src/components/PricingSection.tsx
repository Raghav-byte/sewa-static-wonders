
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  messageVolume: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingPlans: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with WhatsApp.",
    price: {
      monthly: "$29",
      yearly: "$24",
    },
    messageVolume: "Up to 1,000 messages/month",
    features: [
      "WhatsApp Business API access",
      "1 shared team inbox",
      "Basic chatbot automation",
      "Email support",
      "Message templates (5)",
      "Basic analytics"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses with increased messaging needs.",
    price: {
      monthly: "$79",
      yearly: "$69",
    },
    messageVolume: "Up to 10,000 messages/month",
    features: [
      "Everything in Starter, plus:",
      "Up to 5 team members",
      "Advanced chatbot automation",
      "Priority support",
      "Message templates (15)",
      "Advanced analytics",
      "CRM integration",
      "Appointment scheduling"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For organizations with high-volume messaging requirements.",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    messageVolume: "Unlimited messages",
    features: [
      "Everything in Growth, plus:",
      "Unlimited team members",
      "Enterprise-grade security",
      "Dedicated account manager",
      "Custom message templates",
      "Custom integrations",
      "SLA guarantees",
      "24/7 priority support",
      "Advanced AI capabilities"
    ],
    cta: "Contact Sales"
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary animate-fade-in">
            Flexible Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            WhatsApp solutions for every business
          </h2>
          <p className="text-lg text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Choose the plan that best fits your messaging needs. All plans come with a 14-day free trial.
          </p>
          
          <div className="inline-flex items-center p-1 bg-secondary rounded-full mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-white shadow-sm text-foreground' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-white shadow-sm text-foreground' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-xs font-normal text-primary">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`
                relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up 
                ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}
              `}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-2">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      {plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] !== "Custom" && (
                      <span className="text-muted-foreground ml-2 mb-1">
                        /mo {billingCycle === 'yearly' && 'billed annually'}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-primary font-medium mb-6">{plan.messageVolume}</p>
                
                <Button 
                  className={`w-full mb-8 ${plan.popular ? 'bg-primary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-muted-foreground mb-4">Need a custom WhatsApp solution?</p>
          <Button variant="outline" size="lg">
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
