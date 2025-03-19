import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  // Scroll to top on page load (matching Terms of Service)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none">
            {/* Our Mission */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              We aim to revolutionize business communication by providing intelligent, scalable, and user-friendly automation solutions.
              Our mission is to empower businesses of all sizes with the tools they need to connect with their customers effectively.
            </p>

            {/* Our Vision */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="mb-4">
              To be the leading platform in AI-driven customer interactions, making every conversation meaningful and efficient.
              We envision a world where businesses can provide exceptional customer service through seamless WhatsApp automation.
            </p>

            {/* Our Core Values */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Core Values</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Innovation</h3>
            <p className="mb-4">
              We constantly evolve to bring cutting-edge solutions to our customers. Our team is dedicated to staying at the forefront of technology
              and implementing new ideas that transform how businesses communicate.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Customer First</h3>
            <p className="mb-4">
              Our clients' success is at the heart of everything we do. We prioritize understanding their needs and challenges,
              and we measure our success by the value we bring to their businesses.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Transparency</h3>
            <p className="mb-4">
              We believe in open communication and building trust with our users. We're committed to being clear about our services,
              pricing, and policies, and we value honest feedback from our community.
            </p>
            
            {/* Join Us CTA */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Join Us on This Journey</h2>
            <p className="mb-4">
              Experience the future of WhatsApp automation. Let's build smarter customer engagement together.
              We invite you to be part of our growing community of forward-thinking businesses.
            </p>
            
            <div className="mt-8">
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;