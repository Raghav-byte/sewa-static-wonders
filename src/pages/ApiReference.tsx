
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

const ApiReference = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = React.useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete documentation of the SEWA WhatsApp API endpoints, request parameters, and response formats.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button>Getting Started</Button>
              <Button variant="outline">Authentication</Button>
              <Button variant="outline">Webhooks</Button>
              <Button variant="outline">SDKs</Button>
              <Button variant="outline">Changelog</Button>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Authentication</h2>
                <p className="mb-4">
                  All API requests require authentication using your API key. You can obtain your API key from the dashboard.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 relative">
                  <button 
                    className="absolute top-3 right-3" 
                    onClick={() => handleCopy("Authorization: Bearer YOUR_API_KEY")}
                  >
                    {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                  </button>
                  <code className="text-sm">
                    <pre>Authorization: Bearer YOUR_API_KEY</pre>
                  </code>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Sending Messages</h2>
                <p className="mb-4">
                  Send text messages, media, and templates to your WhatsApp contacts.
                </p>

                <Tabs defaultValue="request">
                  <TabsList className="mb-4">
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                      <code className="text-sm">
                        <pre>
{`POST /api/v1/messages
Content-Type: application/json

{
  "recipient": "1234567890",
  "type": "text",
  "text": {
    "body": "Hello, world!"
  }
}`}
                        </pre>
                      </code>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                      <code className="text-sm">
                        <pre>
{`{
  "message_id": "wamid.abcdefg12345",
  "status": "sent",
  "timestamp": "2023-01-01T12:00:00Z"
}`}
                        </pre>
                      </code>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Sending Template Messages</h2>
                <p className="mb-4">
                  Send pre-approved template messages with customized variables.
                </p>

                <Tabs defaultValue="request">
                  <TabsList className="mb-4">
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                      <code className="text-sm">
                        <pre>
{`POST /api/v1/messages
Content-Type: application/json

{
  "recipient": "1234567890",
  "type": "template",
  "template": {
    "name": "sample_shipping_confirmation",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "John"
          },
          {
            "type": "text",
            "text": "12345"
          }
        ]
      }
    ]
  }
}`}
                        </pre>
                      </code>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                      <code className="text-sm">
                        <pre>
{`{
  "message_id": "wamid.abcdefg12345",
  "status": "sent",
  "timestamp": "2023-01-01T12:00:00Z"
}`}
                        </pre>
                      </code>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>
            </div>

            <div className="mt-12 bg-primary/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3">Need help with implementation?</h3>
              <p className="text-muted-foreground mb-6">
                Our developer support team is ready to assist you with any integration challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Contact Developer Support</Button>
                <Button variant="outline">Join Developer Community</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiReference;
