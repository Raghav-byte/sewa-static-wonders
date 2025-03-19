
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <p className="mb-4">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SEWA website and service operated by SEWA, a product of Simpo.ai ("us", "we", or "our").
            </p>
            
            <p className="mb-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            
            <p className="mb-4">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Communications</h2>
            <p className="mb-4">
              By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Subscriptions</h2>
            <p className="mb-4">
              Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
            </p>
            
            <p className="mb-4">
              At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or SEWA cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting SEWA customer support team.
            </p>
            
            <p className="mb-4">
              A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide SEWA with accurate and complete billing information including full name, address, state, zip code, telephone number, and valid payment information. By submitting such payment information, you automatically authorize SEWA to charge all Subscription fees incurred through your account to any such payment instruments.
            </p>
            
            <p className="mb-4">
              Should automatic billing fail to occur for any reason, SEWA will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Free Trial</h2>
            <p className="mb-4">
              SEWA may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
            </p>
            
            <p className="mb-4">
              You may be required to enter your billing information in order to sign up for the Free Trial.
            </p>
            
            <p className="mb-4">
              If you do enter your billing information when signing up for the Free Trial, you will not be charged by SEWA until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
            </p>
            
            <p className="mb-4">
              At any time and without notice, SEWA reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Fee Changes</h2>
            <p className="mb-4">
              SEWA, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
            </p>
            
            <p className="mb-4">
              SEWA will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
            </p>
            
            <p className="mb-4">
              Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refunds</h2>
            <p className="mb-4">
              Except when required by law, paid Subscription fees are non-refundable.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Content</h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            
            <p className="mb-4">
              By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>
            
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Copyright Policy</h2>
            <p className="mb-4">
              We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.
            </p>
            
            <p className="mb-4">
              If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to copyright@sewa-app.com, with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Links To Other Web Sites</h2>
            <p className="mb-4">
              Our Service may contain links to third party web sites or services that are not owned or controlled by SEWA.
            </p>
            
            <p className="mb-4">
              SEWA has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
            </p>
            
            <p className="mb-4">
              You acknowledge and agree that SEWA shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <p className="mb-4">
              If you wish to terminate your account, you may simply discontinue using the Service. You may also contact us to request the deletion of your account.
            </p>
            
            <p className="mb-4">
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p className="mb-4">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at support@sewa-app.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
