import { useParams, Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { Download, FileText, HelpCircle } from "lucide-react";
import { getProductById } from "../data/products";

export function DownloadPage() {
  const { productId, orderId } = useParams<{
    productId: string;
    orderId: string;
  }>();

  console.log("Download params:", { productId, orderId });

  const navigate = useNavigate();

  const product = productId ? getProductById(productId) : undefined;

  console.log("Resolved product:", product);

  if (!productId || !orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Invalid or expired download link</h1>
          <Link
            to="/products"
            className="text-primary underline"
          >
            Browse tools
          </Link>
        </div>
      </div>
    );
  }


  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-24 text-center">
        <h1 className="text-3xl mb-4">Invalid download link</h1>
        <p className="text-muted-foreground mb-6">
          We could not find this product. Please contact support.
        </p>
        <Link to="/products">← Back to Tools</Link>
      </div>
    );
  }


  // Access check (ADD THIS HERE)
  useEffect(() => {
    fetch(`/api/check-access?orderId=${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.allowed) {
          navigate("/products");
        }
      })
      .catch(() => {
        navigate("/products");
      });
  }, [orderId, navigate]);


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Home
          </Link>
          <h1 className="text-4xl mb-3 text-foreground">Download Access</h1>
          <p className="text-muted-foreground">
            Order reference: <span className="font-mono text-sm">{orderId}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Download */}
          <div className="col-span-2 space-y-8">
            {/* Main Download Card */}
            <div className="bg-card border border-border rounded-lg p-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl mb-2 text-foreground">
                    Access files for {product.name}
                  </h2>
                  <p className="text-muted-foreground">
                    Download your tool files and documentation. This includes everything
                    you need to start using your new tool immediately.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {product.accessFile.map((file, index) => (
                  <a
                    key={index}
                    href={file}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Download className="w-5 h-5" />
                    Download Access File
                  </a>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-lg mb-6 text-foreground">What you're downloading</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-border">
                  <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground mb-1 text-sm">Main Tool File</h3>
                    <p className="text-sm text-muted-foreground">
                      The primary file containing your tool (spreadsheet, code, or other format)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-border">
                  <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground mb-1 text-sm">Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      User guide with setup instructions, examples, and best practices
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground mb-1 text-sm">Updates Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Instructions for accessing future versions and updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-muted/50 border border-border rounded-lg p-8">
              <h2 className="text-lg mb-4 text-foreground">Getting Started</h2>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">1.</span>
                  <span>Download the files using the button above</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">2.</span>
                  <span>Extract the downloaded archive to your preferred location</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">3.</span>
                  <span>Read the documentation to understand how to use the tool</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">4.</span>
                  <span>Save your license key in a secure location for future reference</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">5.</span>
                  <span>Bookmark this page or save the update access link</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column - Info & Support */}
          <div className="col-span-1 space-y-6">
            {/* Support */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm mb-1 text-foreground">Need Help?</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Our support team is here to help you get started.
                  </p>
                </div>
              </div>
              <a
                href="mailto:hello@structuredtools.co"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Contact Support →
              </a>
            </div>

            {/* Access Details */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm mb-3 text-foreground">Your Access</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>✓ Download anytime</li>
                <li>✓ Lifetime access</li>
                <li>✓ Free updates</li>
                <li>✓ Email support</li>
                <li>✓ No expiration</li>
              </ul>
            </div>

            {/* More Tools */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Explore more tools
              </p>
              <Link
                to="/products"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Browse Catalog →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
