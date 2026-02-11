import { Link } from "react-router";

export function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-3 text-foreground">Terms of Service</h1>
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
              Welcome to Structured Tools. By accessing our website and purchasing our digital products, 
              you agree to comply with and be bound by these Terms of Service. Please read them carefully 
              before making a purchase.
            </p>
            <p className="mt-3">
              Structured Tools provides downloadable digital tools designed to help professionals analyze 
              problems, make decisions, and work more effectively. These terms govern your use of our 
              website and products.
            </p>
          </section>

          {/* Products & Licenses */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Products & Licenses</h2>
            <p className="mb-3">
              When you purchase a digital tool from Structured Tools, you receive:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">
                <strong className="text-foreground">Personal License:</strong> A non-exclusive, 
                non-transferable license to use the tool for your personal or professional work.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">Lifetime Access:</strong> Permanent access to 
                download and use the version purchased, plus any future updates we release for that tool.
              </li>
              <li className="list-disc">
                <strong className="text-foreground">Single User:</strong> Each license is intended 
                for use by one individual. Sharing files with colleagues or clients for collaboration 
                is permitted, but you may not resell or redistribute our tools.
              </li>
            </ul>
          </section>

          {/* Permitted Use */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Permitted Use</h2>
            <p className="mb-3">
              You may:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">
                Use the tool for personal or commercial work (your own business, consulting, analysis, etc.)
              </li>
              <li className="list-disc">
                Modify or customize the tool for your own needs
              </li>
              <li className="list-disc">
                Share outputs, results, or reports generated using the tool with clients or colleagues
              </li>
              <li className="list-disc">
                Use the tool across multiple devices that you personally own or control
              </li>
            </ul>
          </section>

          {/* Prohibited Use */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Prohibited Use</h2>
            <p className="mb-3">
              You may not:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">
                Resell, redistribute, or share the tool files with others who have not purchased their 
                own license
              </li>
              <li className="list-disc">
                Claim authorship or ownership of the tool
              </li>
              <li className="list-disc">
                Use the tool to create competing products or services
              </li>
              <li className="list-disc">
                Remove copyright notices, watermarks, or attribution from the tool or documentation
              </li>
              <li className="list-disc">
                Share your download links or access credentials publicly
              </li>
            </ul>
            <p className="mt-3">
              Violation of these terms may result in license termination and legal action.
            </p>
          </section>

          {/* Payment & Refunds */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Payment & Refunds</h2>
            <p className="mb-3">
              <strong className="text-foreground">Payment:</strong> All payments are processed securely 
              through Razorpay. Prices are listed in Indian Rupees (INR) and are inclusive of applicable 
              taxes unless otherwise stated.
            </p>
            <p className="mb-3">
              <strong className="text-foreground">Refund Policy:</strong> Due to the nature of digital 
              products (instant access upon purchase), all sales are final. We do not offer refunds 
              except in the following cases:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="list-disc">Technical issues that prevent you from downloading or accessing the tool</li>
              <li className="list-disc">Duplicate purchases made in error</li>
              <li className="list-disc">Product materially differs from the description provided</li>
            </ul>
            <p className="mt-3">
              Refund requests must be submitted within 14 days of purchase to support@structuredtools.co 
              with a detailed explanation. We will review each request on a case-by-case basis.
            </p>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Delivery</h2>
            <p>
              Digital products are delivered instantly after successful payment. You will receive:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Immediate access to a download page</li>
              <li className="list-disc">An email confirmation with download links and your license information</li>
              <li className="list-disc">Permanent access to re-download the tool from your order page</li>
            </ul>
            <p className="mt-3">
              If you do not receive access within 10 minutes of payment, please check your spam folder 
              or contact support@structuredtools.co.
            </p>
          </section>

          {/* Product Accuracy */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Product Accuracy & Disclaimer</h2>
            <p>
              Our tools are designed to help you think clearly and analyze problems, but they are 
              provided "as is" without warranties of any kind. While we strive for accuracy and 
              reliability:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">
                Tools are educational and analytical aids—not professional advice
              </li>
              <li className="list-disc">
                You are responsible for validating outputs and decisions made using our tools
              </li>
              <li className="list-disc">
                We are not liable for financial losses, business decisions, or other outcomes 
                resulting from use of our products
              </li>
              <li className="list-disc">
                Financial tools (e.g., options calculators) are for informational purposes only 
                and do not constitute investment advice
              </li>
            </ul>
            <p className="mt-3">
              Always consult qualified professionals (financial advisors, legal counsel, etc.) 
              before making important decisions.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Updates & Improvements</h2>
            <p>
              We regularly improve our tools and may release updates that include:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Bug fixes and performance improvements</li>
              <li className="list-disc">New features or enhanced functionality</li>
              <li className="list-disc">Updated documentation</li>
            </ul>
            <p className="mt-3">
              All updates are provided free of charge to existing customers. You will be notified 
              of significant updates via email. You are not required to update, and previous versions 
              remain accessible.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Intellectual Property</h2>
            <p>
              All intellectual property rights in the tools, documentation, and website content 
              belong to Structured Tools. This includes but is not limited to:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Tool design, code, and formulas</li>
              <li className="list-disc">Documentation and user guides</li>
              <li className="list-disc">Trademarks, logos, and branding</li>
              <li className="list-disc">Website design and content</li>
            </ul>
            <p className="mt-3">
              Your purchase grants you a license to use the tool as specified in these terms, but 
              does not transfer ownership or intellectual property rights.
            </p>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Support</h2>
            <p>
              We provide email support for all customers to help with:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Download and access issues</li>
              <li className="list-disc">Questions about how to use the tool</li>
              <li className="list-disc">Technical problems or bugs</li>
              <li className="list-disc">General inquiries</li>
            </ul>
            <p className="mt-3">
              We aim to respond to support requests within 2 business days. Support is provided in 
              English via email at support@structuredtools.co.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Structured Tools shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="space-y-2 ml-5 mt-3">
              <li className="list-disc">Your use or inability to use our tools</li>
              <li className="list-disc">Decisions or actions taken based on tool outputs</li>
              <li className="list-disc">Errors or inaccuracies in the tools</li>
              <li className="list-disc">Loss of data, profits, or business opportunities</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount you paid for the specific product in question.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our products if you violate 
              these Terms of Service, including but not limited to unauthorized redistribution, 
              commercial resale, or fraudulent activity.
            </p>
            <p className="mt-3">
              Upon termination, you must cease using the tools and delete all copies in your possession. 
              Termination does not entitle you to a refund.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time to reflect changes in our 
              practices, products, or legal requirements. When we make changes, we will update 
              the "Last updated" date at the top of this page.
            </p>
            <p className="mt-3">
              Continued use of our website and products after changes are posted constitutes acceptance 
              of the updated terms. Material changes will be communicated via email when possible.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl text-foreground mb-4">Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes arising from 
              these terms or your use of our products shall be subject to the exclusive jurisdiction 
              of the courts in [Your City/State], India.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-xl text-foreground mb-4">Contact Us</h2>
            <p className="mb-3">
              If you have questions about these Terms of Service, please contact us:
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
