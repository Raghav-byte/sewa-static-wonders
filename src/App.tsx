
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import { Toaster } from "@/components/ui/toaster";
import AboutUs from "@/pages/About";
import Features from "@/pages/Features";
import Integrations from "@/pages/Integrations";
import Documentation from "@/pages/Documentation";
import ApiReference from "@/pages/ApiReference";
import MessageTemplates from "@/pages/MessageTemplates";
import CaseStudies from "@/pages/CaseStudies";
import HelpCenter from "@/pages/HelpCenter";
import Contact from "@/pages/Contact";
import WhatsAppPolicy from "@/pages/WhatsAppPolicy";
import Pricing from "@/pages/Pricing";
import Roadmap from "@/pages/Roadmap";

// AnimatePresence wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/api-reference" element={<ApiReference />} />
        <Route path="/message-templates" element={<MessageTemplates />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatsapp-policy" element={<WhatsAppPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
