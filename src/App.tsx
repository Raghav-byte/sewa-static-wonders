
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import LoadingSpinner from "@/components/LoadingSpinner";

// Only import the Index page eagerly as it's the landing page
import Index from "@/pages/Index";

// Lazy load all other pages to reduce initial bundle size
const NotFound = lazy(() => import("@/pages/NotFound"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const AboutUs = lazy(() => import("@/pages/About"));
const Features = lazy(() => import("@/pages/Features"));
const Integrations = lazy(() => import("@/pages/Integrations"));
const Documentation = lazy(() => import("@/pages/Documentation"));
const ApiReference = lazy(() => import("@/pages/ApiReference"));
const MessageTemplates = lazy(() => import("@/pages/MessageTemplates"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const HelpCenter = lazy(() => import("@/pages/HelpCenter"));
const Contact = lazy(() => import("@/pages/Contact"));
const WhatsAppPolicy = lazy(() => import("@/pages/WhatsAppPolicy"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Roadmap = lazy(() => import("@/pages/Roadmap"));

// AnimatePresence wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms-of-service" element={
          <Suspense fallback={<LoadingSpinner />}>
            <TermsOfService />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUs />
          </Suspense>
        } />
        <Route path="/features" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Features />
          </Suspense>
        } />
        <Route path="/integrations" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Integrations />
          </Suspense>
        } />
        <Route path="/documentation" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Documentation />
          </Suspense>
        } />
        <Route path="/api-reference" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ApiReference />
          </Suspense>
        } />
        <Route path="/message-templates" element={
          <Suspense fallback={<LoadingSpinner />}>
            <MessageTemplates />
          </Suspense>
        } />
        <Route path="/case-studies" element={
          <Suspense fallback={<LoadingSpinner />}>
            <CaseStudies />
          </Suspense>
        } />
        <Route path="/help-center" element={
          <Suspense fallback={<LoadingSpinner />}>
            <HelpCenter />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/whatsapp-policy" element={
          <Suspense fallback={<LoadingSpinner />}>
            <WhatsAppPolicy />
          </Suspense>
        } />
        <Route path="/pricing" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Pricing />
          </Suspense>
        } />
        <Route path="/roadmap" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Roadmap />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        } />
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
