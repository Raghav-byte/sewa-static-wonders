// src/pages/Pricing.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, AlertCircle } from "lucide-react";

const Pricing = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isAnnual, setIsAnnual] = useState(false);

  const toggleAnnual = () => {
    setIsAnnual(!isAnnual);
  };

  const tiers = [
    {
      name: "Basic",
      price: 99,
      features: [
        "Access to core features",
        "Up to 5 team members",
        "Basic reporting",
      ],
    },
    {
      name: "Pro",
      price: 299,
      features: [
        "Everything in Basic",
        "Unlimited team members",
        "Advanced reporting",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: 999,
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 support",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is SEWA?",
      answer:
        "SEWA is a WhatsApp Business Solution Provider (BSP) that helps businesses connect with their customers on WhatsApp.",
    },
    {
      question: "How does SEWA work?",
      answer:
        "SEWA provides a platform for businesses to send and receive messages, automate conversations, and integrate with other business systems.",
    },
    {
      question: "What are the benefits of using SEWA?",
      answer:
        "SEWA helps businesses improve customer engagement, increase sales, and provide better customer support.",
    },
    {
      question: "How much does SEWA cost?",
      answer:
        "SEWA offers a variety of pricing plans to fit your needs. Contact us for a custom quote.",
    },
    {
      question: "How do I get started with SEWA?",
      answer:
        "Contact us to schedule a demo and learn how SEWA can help your business.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that's right for you. Upgrade or downgrade at any
              time.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-lg">Monthly</span>
              <Switch id="annual" checked={isAnnual} onCheckedChange={toggleAnnual} />
              <span className="text-lg">Annual</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PriceCard
                key={index}
                name={tier.name}
                price={tier.price}
                features={tier.features}
                isAnnual={isAnnual}
              />
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us to learn more about our pricing plans and how SEWA can
              help your business.
            </p>
            <Button>Contact Us</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface PriceCardProps {
  name: string;
  price: number;
  features: string[];
  isAnnual: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  price,
  features,
  isAnnual,
}) => {
  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">{name}</CardTitle>
        <CardDescription className="text-center">
          {isAnnual
            ? `₹${(price * 10).toFixed(2)}/year`
            : `₹${price}/month`}
        </CardDescription>
        <p className="text-sm text-muted-foreground">
          {isAnnual
            ? `₹${(price * 10).toFixed(2)}/year (₹${(price * 10 / 12).toFixed(2)}/mo)`
            : `₹${price}/month`}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="list-none space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-center">
        <Button>Choose Plan</Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
