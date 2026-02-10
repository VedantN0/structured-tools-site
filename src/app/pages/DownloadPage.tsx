import { useParams, Link, useSearchParams } from "react-router";
import { Download, FileText, HelpCircle } from "lucide-react";
import { getProductById } from "../data/products";

export function DownloadPage() {
  const { productId, orderId } = useParams<{
    productId: string;
    orderId: string;
  }>();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  // Basic param + token presence check
  if (!productId || !orderId || !token) {
    return <AccessDenied />;
  }

  const product = getProductById(productId);

  if (!product) {
    return <AccessDenied />;
  }

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
            Order reference:{" "}
            <span className="font-mono text-sm">{orderId}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-8">
            {/* Download Card */}
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
                    Download your files and documentation below.
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
                    Download File
                  </a>
                ))}
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-muted/50 border border-border rounded-lg p-8">
              <h2 className="text-lg mb-4 text-foreground">Getting Started</h2>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li>1. Download the files above</li>
                <li>2. Extract if required</li>
                <li>3. Read the documentation</li>
                <li>4. Save this page for future access</li>
              </ol>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm mb-1 text-foreground">Need Help?</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Contact support if you face issues accessing files.
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

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm mb-3 text-foreground">Your Access</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>✓ Lifetime access</li>
                <li>✓ Free updates</li>
                <li>✓ Email support</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <Link
                to="/products"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Browse more tools →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Access denied</h1>
        <Link to="/products" className="text-primary underline">
          Browse tools
        </Link>
      </div>
    </div>
  );
}
