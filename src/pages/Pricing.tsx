
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Check, X, HelpCircle } from "lucide-react";

const Pricing = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For small businesses just getting started with WhatsApp",
      priceMonthly: "Free",
      priceAnnual: "Free",
      features: [
        "1,000 conversations per month",
        "1 WhatsApp Number",
        "2 Team Members",
        "Basic Chatbot Builder",
        "Template Message Support",
        "Message History (30 days)",
        "Business Hours Support",
        "Basic Analytics"
      ],
      notIncluded: [
        "Multi-agent Assignment",
        "Advanced Automation",
        "CRM Integration",
        "Custom Reports",
        "Dedicated Account Manager"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business",
      description: "For growing businesses with active customer engagement",
      priceMonthly: 1000,
      priceAnnual: 10000,
      features: [
        "5,000 conversations per month",
        "2 WhatsApp Numbers",
        "10 Team Members",
        "Advanced Chatbot Builder",
        "Template Message Support",
        "Message History (90 days)",
        "Priority Support",
        "Advanced Analytics",
        "Multi-agent Assignment",
        "Team Performance Reports",
        "Basic Integrations",
        "Broadcast Campaigns"
      ],
      notIncluded: [
        "Custom Chatbot Development",
        "Dedicated Account Manager",
        "Custom API Access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex WhatsApp needs",
      priceMonthly: "Contact Us",
      priceAnnual: "Contact Us",
      features: [
        "Unlimited conversations",
        "Multiple WhatsApp Numbers",
        "Unlimited Team Members",
        "AI-powered Chatbot Builder",
        "Template Message Support",
        "Unlimited Message History",
        "24/7 Priority Support",
        "Custom Analytics Dashboard",
        "Multi-agent Assignment",
        "Advanced Team Management",
        "All Integrations",
        "Broadcast Campaigns",
        "Custom Chatbot Development",
        "Dedicated Account Manager",
        "Custom API Access",
        "White-label Options",
        "Advanced Security Features"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const comparisons = [
    {
      feature: "WhatsApp Numbers",
      starter: "1",
      business: "2",
      enterprise: "Multiple"
    },
    {
      feature: "Monthly Conversations",
      starter: "1,000",
      business: "5,000",
      enterprise: "Unlimited"
    },
    {
      feature: "Team Members",
      starter: "2",
      business: "10",
      enterprise: "Unlimited"
    },
    {
      feature: "Chatbot Builder",
      starter: "Basic",
      business: "Advanced",
      enterprise: "AI-powered"
    },
    {
      feature: "Message History",
      starter: "30 days",
      business: "90 days",
      enterprise: "Unlimited"
    },
    {
      feature: "Support",
      starter: "Business Hours",
      business: "Priority",
      enterprise: "24/7 Priority"
    },
    {
      feature: "Analytics",
      starter: "Basic",
      business: "Advanced",
      enterprise: "Custom Dashboard"
    },
    {
      feature: "Multi-agent Assignment",
      starter: false,
      business: true,
      enterprise: true
    },
    {
      feature: "Team Performance Reports",
      starter: false,
      business: true,
      enterprise: true
    },
    {
      feature: "Integrations",
      starter: false,
      business: "Basic",
      enterprise: "All + Custom"
    },
    {
      feature: "Broadcast Campaigns",
      starter: false,
      business: true,
      enterprise: true
    },
    {
      feature: "Custom Chatbot Development",
      starter: false,
      business: false,
      enterprise: true
    },
    {
      feature: "Dedicated Account Manager",
      starter: false,
      business: false,
      enterprise: true
    },
    {
      feature: "White-label Options",
      starter: false,
      business: false,
      enterprise: true
    }
  ];

  const faqs = [
    {
      question: "What is a conversation in your pricing?",
      answer: "A conversation is defined as a 24-hour session between your business and a customer. Multiple messages within this window count as a single conversation for billing purposes."
    },
    {
      question: "Do I need to be verified for WhatsApp Business API?",
      answer: "Yes, all businesses using the WhatsApp Business API need to complete WhatsApp's verification process. Our team will guide you through this process when you sign up."
    },
    {
      question: "Can I keep my existing WhatsApp business number?",
      answer: "Yes, you can migrate your existing WhatsApp business number to our platform. Our support team will assist you with the migration process."
    },
    {
      question: "What happens if I exceed my monthly conversation limit?",
      answer: "If you exceed your plan's conversation limit, additional conversations will be billed at a per-conversation rate. You'll receive notifications as you approach your limit."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade your plan at any time. The new charges will be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for our Starter and Business plans so you can experience SEWA before committing to a subscription."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that's right for your business and scale as you grow
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'font-semibold' : ''}`}>Monthly</span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual} 
                aria-label="Toggle annual billing"
              />
              <span className={`ml-3 ${isAnnual ? 'font-semibold' : ''}`}>
                Annual
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  Save 16%
                </Badge>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`border rounded-xl p-8 relative ${
                  plan.popular ? 'shadow-lg ring-2 ring-primary' : 'shadow-sm'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  {typeof plan.priceMonthly === 'string' ? (
                    <span className="text-4xl font-bold">
                      {plan.priceMonthly}
                    </span>
                  ) : (
                    <span className="text-4xl font-bold">
                      ₹{isAnnual 
                        ? Number((plan.priceAnnual / 12)).toFixed(2) 
                        : plan.priceMonthly}
                    </span>
                  )}
                  {typeof plan.priceMonthly !== 'string' && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                  {isAnnual && typeof plan.priceAnnual !== 'string' && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Billed annually (₹{plan.priceAnnual}/year)
                    </div>
                  )}
                </div>
                <Button className="w-full mb-8">{plan.cta}</Button>
                
                <div className="space-y-4">
                  <p className="font-semibold">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-semibold mt-6">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <X className="h-5 w-5 text-gray-400 shrink-0 mr-3 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Compare Plans</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 w-1/4">Features</th>
                    <th className="text-center py-4 px-4">Starter</th>
                    <th className="text-center py-4 px-4">Business</th>
                    <th className="text-center py-4 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.starter === 'boolean' ? (
                          item.starter ? 
                            <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          item.starter
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.business === 'boolean' ? (
                          item.business ? 
                            <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          item.business
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.enterprise === 'boolean' ? (
                          item.enterprise ? 
                            <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          item.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-start">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-primary/5 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We offer tailored WhatsApp solutions for enterprises with specific requirements. Contact our sales team to discuss your needs.
              </p>
              <Button size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
