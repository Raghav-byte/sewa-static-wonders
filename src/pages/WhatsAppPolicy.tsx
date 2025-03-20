
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhatsAppPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            WhatsApp Business Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <p className="mb-4">
              This WhatsApp Business Policy outlines the guidelines and requirements for using SEWA's WhatsApp Business API services. By using our service, you agree to comply with all applicable WhatsApp policies as well as our specific implementation guidelines.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              WhatsApp Business API Usage
            </h2>
            
            <p className="mb-4">
              When using SEWA to connect to the WhatsApp Business API, you must adhere to the following principles:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Respect user privacy and data protection laws</li>
              <li>Obtain proper consent before sending messages to users</li>
              <li>Maintain the quality and relevance of your communications</li>
              <li>Follow WhatsApp's guidelines for business messaging</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Messaging Guidelines
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Message Types</h3>
            <p className="mb-4">
              There are two types of WhatsApp messages that can be sent through the Business API:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Session Messages:</strong> Messages sent within a 24-hour period after a user-initiated conversation.</li>
              <li><strong>Template Messages:</strong> Pre-approved message formats used outside the 24-hour messaging window.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Session Messaging Rules</h3>
            <p className="mb-4">
              Within a 24-hour session window, businesses may send free-form messages without template restrictions. These messages:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Must be in response to a user-initiated message</li>
              <li>Can include promotional content during this window</li>
              <li>Should be relevant to the user's initial inquiry</li>
              <li>Must comply with WhatsApp's content policies</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Template Messaging Rules</h3>
            <p className="mb-4">
              For sending messages outside the 24-hour window, pre-approved templates must be used. These templates:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Must be submitted for approval before use</li>
              <li>Should focus on service-related information, not promotional content</li>
              <li>Can include variables for personalization</li>
              <li>Must clearly identify your business</li>
              <li>Cannot be misleading or deceptive</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Prohibited Content
            </h2>
            
            <p className="mb-4">
              The following content is prohibited when using WhatsApp Business API through SEWA:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Content that promotes illegal activities</li>
              <li>Adult content or pornography</li>
              <li>Content related to gambling, alcohol, or tobacco where restricted</li>
              <li>Weapons, ammunition, or explosives</li>
              <li>Unauthorized pharmaceutical products</li>
              <li>Content that infringes on intellectual property rights</li>
              <li>Discriminatory or hateful content</li>
              <li>Misleading health claims</li>
              <li>Financial scams or fraudulent offers</li>
              <li>Multi-level marketing schemes</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Opt-in Requirements
            </h2>
            
            <p className="mb-4">
              Before messaging users on WhatsApp through SEWA, you must:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Obtain clear and explicit consent from users to receive WhatsApp messages</li>
              <li>Inform users about the types of messages they will receive</li>
              <li>Provide a clear way for users to opt out</li>
              <li>Maintain records of user consent</li>
              <li>Respect user preferences and opt-out requests immediately</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Quality Rating & Business Verification
            </h2>
            
            <p className="mb-4">
              WhatsApp assigns quality ratings to businesses based on:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>User block rates</li>
              <li>Message delivery success rates</li>
              <li>Complaint frequency</li>
              <li>Template rejection rates</li>
              <li>Compliance with WhatsApp policies</li>
            </ul>
            
            <p className="mb-4">
              Low quality ratings may result in restrictions on your WhatsApp Business account, including messaging limits or account suspension.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Business Verification
            </h2>
            
            <p className="mb-4">
              To use the WhatsApp Business API through SEWA, your business must complete WhatsApp's verification process, which includes:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Confirming your business identity</li>
              <li>Verifying your business name and address</li>
              <li>Confirming your business category</li>
              <li>Reviewing your intended use cases</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Policy Changes
            </h2>
            
            <p className="mb-4">
              WhatsApp may update its Business Policy from time to time. SEWA will make reasonable efforts to inform you of any significant changes, but it is your responsibility to stay informed about current WhatsApp policies.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Compliance Responsibility
            </h2>
            
            <p className="mb-4">
              While SEWA provides tools to help you comply with WhatsApp's policies, ultimate responsibility for compliance rests with you. Non-compliance may result in restrictions on your account, including temporary or permanent suspension of WhatsApp messaging capabilities.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this WhatsApp Business Policy, you can contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>By email: support@sewa-app.com</li>
              <li>
                By visiting our contact page:{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsAppPolicy;
