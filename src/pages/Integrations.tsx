
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, AlertCircle } from "lucide-react";

const Integrations = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrations = [
    {
      name: "Shopify",
      logo: "https://cdn.shopify.com/s/files/1/0533/2089/files/Shopify_logo_small.png?v=1511907825",
      description: "Connect your Shopify store to send order updates, abandoned cart reminders, and promotional messages via WhatsApp.",
      category: "E-commerce"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description: "Sync contacts, create leads, and manage customer conversations directly from your Salesforce CRM.",
      category: "CRM"
    },
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
      description: "Integrate WhatsApp messaging into your HubSpot workflow for seamless customer communication.",
      category: "CRM"
    },
    {
      name: "Zapier",
      logo: "https://cdn.zapier.com/zapier/images/logos/zapier-logo.svg",
      description: "Connect WhatsApp to over 3,000 apps with no code required. Create automated workflows in minutes.",
      category: "Automation"
    },
    {
      name: "Google Sheets",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_Sheets_logo.svg",
      description: "Automatically update spreadsheets with chat data or send automated messages based on spreadsheet changes.",
      category: "Productivity"
    },
    {
      name: "WordPress",
      logo: "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
      description: "Add WhatsApp chat buttons to your WordPress site and collect leads directly into your WhatsApp business account.",
      category: "CMS"
    },
    {
      name: "Magento",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Magento_logo.svg",
      description: "Enhance your Magento store with WhatsApp order notifications and customer support.",
      category: "E-commerce"
    },
    {
      name: "Zendesk",
      logo: "https://d1eipm3vz40hy0.cloudfront.net/images/social/zendesk-logo.jpg",
      description: "Integrate WhatsApp conversations into your Zendesk support workflow for unified customer service.",
      category: "Support"
    },
    {
      name: "Mailchimp",
      logo: "https://mailchimp.com/release/plums/cxp/images/freddie.8d73e35bc202ce3e51e9.svg",
      description: "Sync contacts between WhatsApp and Mailchimp for coordinated marketing campaigns across channels.",
      category: "Marketing"
    },
    {
      name: "WooCommerce",
      logo: "https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg",
      description: "Connect your WooCommerce store to send order confirmations, shipping updates, and abandoned cart recovery messages.",
      category: "E-commerce"
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      description: "Send payment links and invoices via WhatsApp, and notify customers about payment status.",
      category: "Payments"
    },
    {
      name: "Slack",
      logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
      description: "Get notifications in Slack when customers message you on WhatsApp. Reply without leaving Slack.",
      category: "Collaboration"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Integrations</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect SEWA with your favorite business tools for seamless workflows and enhanced productivity.
            </p>
          </div>

          {/* Removed the categories section as requested */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                {/* Coming soon overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full p-3 mb-3">
                    <Clock className="h-8 w-8" />
                  </div>
                  <p className="font-semibold text-xl text-green-600 dark:text-green-400">Coming Soon</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 mr-4">
                    <img src={integration.logo} alt={integration.name} className="h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{integration.name}</h3>
                    <span className="text-sm text-muted-foreground">{integration.category}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{integration.description}</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see the integration you need?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're constantly adding new integrations. Contact us to request an integration or learn about our API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Request Integration</Button>
              <Button variant="outline">Explore API</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
