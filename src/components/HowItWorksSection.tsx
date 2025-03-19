import React from "react";
import {
  CheckCircle2,
  Smartphone,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider"; // Ensure correct path

const steps = [
  {
    number: "01",
    title: "Connect your WhatsApp Business account",
    description:
      "Get approved for WhatsApp Business API through our simple onboarding process.",
    points: [
      "Quick approval process",
      "No technical expertise required",
      "Guided setup by our team",
    ],
    icon: <Smartphone className="w-12 h-12 text-primary" />,
  },
  {
    number: "02",
    title: "Build automated workflows",
    description:
      "Create message templates and automated responses for different customer scenarios.",
    points: [
      "Drag-and-drop message builder",
      "Pre-approved message templates",
      "AI-powered response suggestions",
    ],
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
  },
  {
    number: "03",
    title: "Engage and analyze",
    description:
      "Start conversations with customers and track performance with detailed analytics.",
    points: [
      "Real-time conversation dashboard",
      "Customer engagement metrics",
      "Conversion tracking",
    ],
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
  },
];

const HowItWorksSection = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section
      id="how-it-works"
      className={`py-20 md:py-32 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-green-50"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary animate-fade-in">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            How SEWA WhatsApp works
          </h2>
          <p
            className="text-lg text-muted-foreground animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Get started in minutes with our intuitive platform designed for
            simplicity and power.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-1/2 top-full h-20 md:h-32 w-0.5 bg-gradient-to-b from-primary/50 to-primary/0 hidden sm:block"></div>
              )}

              <div
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12`}
              >
                {/* Step number and image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold absolute -top-6 -left-6 z-10">
                      {step.number}
                    </div>
                    <div
                      className={`aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden shadow-lg border p-8 transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-100"
                      }`}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-medium mb-2">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-2 transition-colors duration-300"
                      >
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
