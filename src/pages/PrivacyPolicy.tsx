
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <p className="mb-4">
              This Privacy Policy describes how SEWA ("we," "us," or "our") collects, uses, and discloses your information 
              when you use our service (the "Service"), and tells you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
            <p className="mb-4">
              While using our Service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address</li>
              <li>First and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
              <li>Business information</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Data</h3>
            <p className="mb-4">
              Usage Data is collected automatically when using the Service. It may include information such as your device's IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Your Personal Data</h2>
            <p className="mb-4">SEWA may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
              <li><strong>To manage your account</strong>: to manage your registration as a user of the Service.</li>
              <li><strong>For the performance of a contract</strong>: the development, compliance and undertaking of the purchase contract for the products, items or services you have purchased.</li>
              <li><strong>To contact you</strong>: To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
              <li><strong>To provide you</strong> with news, special offers and general information about other goods, services and events which we offer.</li>
              <li><strong>To manage your requests</strong>: To attend and manage your requests to us.</li>
              <li><strong>For business transfers</strong>: We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
              <li><strong>For other purposes</strong>: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Retention of Your Personal Data</h2>
            <p className="mb-4">
              SEWA will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Transfer of Your Personal Data</h2>
            <p className="mb-4">
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. This means that this information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p className="mb-4">
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Your Personal Data</h2>
            <p className="mb-4">
              The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p className="mb-4">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we will take steps to remove that information from our servers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
            <p className="mb-4">
              Our Service may contain links to other websites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="mb-4">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mb-4">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, you can contact us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>By email: support@sewa-app.com</li>
              <li>By visiting the contact page on our website: <a href="#" className="text-primary hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
