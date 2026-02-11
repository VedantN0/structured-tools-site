import { Link } from "react-router";

export function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-3 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Introduction</h2>
            <p>
              Structured Tools provides digital products designed to help professionals think clearly, 
              analyze complex problems, and make better decisions. We are committed to protecting your 
              privacy and handling your data with transparency and care.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, use, and protect your information when you 
              visit our website and purchase our products.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Information We Collect</h2>
            <p className="mb-3">
              We collect minimal information necessary to provide our services:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">
                <strong className="text-foreground">Contact Information:</strong> If you contact our 
                support team, we collect your email address and any information you choose to provide 
                in your message.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">Payment Information:</strong> Payment details are 
                collected and processed securely by Razorpay, our payment processor. We do not directly 
                collect or store your credit card or banking information.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">Analytics Data:</strong> We use Google Analytics (GA4) 
                to collect anonymous usage data, including pages visited, time spent on site, browser type, 
                and approximate location (country/city level).
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl text-foreground mb-4">How We Use Information</h2>
            <p className="mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">
                <strong className="text-foreground">To deliver digital products:</strong> We process 
                your order and provide download access to your purchased tools.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">To process payments:</strong> We work with Razorpay 
                to securely process transactions.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">To improve website performance:</strong> Analytics 
                data helps us understand how visitors use our site and identify areas for improvement.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">To respond to support inquiries:</strong> We use 
                your contact information to provide customer support and answer questions.
              </li>
            </ul>
          </section>

          {/* Payment Processing */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Payment Processing</h2>
            <p>
              All payments are processed through Razorpay, a secure third-party payment gateway that 
              complies with PCI-DSS standards. Structured Tools does not collect, store, or have access 
              to your credit card details, debit card details, or net banking credentials.
            </p>
            <p className="mt-3">
              When you make a purchase, you are redirected to Razorpay's secure payment interface. 
              Razorpay handles all payment data according to their privacy policy and security standards.
            </p>
          </section>

          {/* Cookies & Analytics */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Cookies & Analytics</h2>
            <p>
              We use Google Analytics (GA4) to understand how visitors interact with our website. 
              Google Analytics uses cookies to collect anonymous information such as:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Pages viewed and time spent on each page</li>
              <li className="list-disc">Browser type and device information</li>
              <li className="list-disc">Approximate geographic location (country/city)</li>
              <li className="list-disc">Referral sources (how you found our site)</li>
            </ul>
            <p className="mt-3">
              This data is anonymized and aggregated, and does not personally identify individual users. 
              You can opt out of Google Analytics by using browser extensions like Google Analytics 
              Opt-out Browser Add-on.
            </p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We only share 
              data with trusted service providers necessary to operate our business:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">
                <strong className="text-foreground">Razorpay:</strong> For payment processing
              </li>
              <li className="list-disc">
                <strong className="text-foreground">Google Analytics:</strong> For website analytics 
                (anonymized data only)
              </li>
            </ul>
            <p className="mt-3">
              These service providers are bound by their own privacy policies and security practices. 
              We may also disclose information if required by law or to protect our legal rights.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy or as required by law. Specifically:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">
                Transaction records are kept for accounting and legal compliance purposes
              </li>
              <li className="list-disc">
                Support correspondence is retained to maintain service quality and resolve issues
              </li>
              <li className="list-disc">
                Analytics data is stored according to Google Analytics' retention policies
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Request access to the personal information we hold about you</li>
              <li className="list-disc">Request correction of inaccurate information</li>
              <li className="list-disc">Request deletion of your personal information (subject to legal obligations)</li>
              <li className="list-disc">Opt out of analytics tracking using browser settings or extensions</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at the email address below.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. When we make significant changes, we will update the "Last updated" 
              date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-xl text-foreground mb-4">Contact Us</h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy or how we handle your information, 
              please contact us:
            </p>
            <p>
              <strong className="text-foreground">Email:</strong>{' '}
              <a 
                href="mailto:support@structuredtools.co" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                support@structuredtools.co
              </a>
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
