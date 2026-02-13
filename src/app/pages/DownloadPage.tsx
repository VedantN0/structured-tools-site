import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { Download, FileText, HelpCircle } from "lucide-react";
import { getProductById } from "../data/products";
import { useSearchParams } from "react-router-dom";

export function DownloadPage() {
  const { productId, orderId } = useParams<{
    productId: string;
    orderId: string;
  }>();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [accessState, setAccessState] = useState<
    "checking" | "allowed" | "denied"
  >("checking");

  const product = productId ? getProductById(productId) : undefined;

  // --------------------------------------------------
  // Invalid params
  // --------------------------------------------------
  if (!productId || !orderId || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Invalid or expired download link</h1>
          <Link to="/products" className="text-primary underline">
            Browse tools
          </Link>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // Product not found
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Access check (NEW, correct)
  // --------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    async function validateAccess() {
      try {
        const res = await fetch("/api/validate-download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId,
            orderId,
            token,
          }),
        });

        const data = await res.json();

        if (cancelled) return;

        if (res.ok && data.ok) {
          setAccessState("allowed");
        } else {
          setAccessState("denied");
        }
      } catch {
        if (!cancelled) {
          setAccessState("denied");
        }
      }
    }

    validateAccess();

    return () => {
      cancelled = true;
    };
  }, [productId, orderId, token]);

  useEffect(() => {
    if (accessState === "allowed") {
      const alreadyTracked = sessionStorage.getItem(`purchase_${orderId}`);
      if (alreadyTracked) return;

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17951610766/Kl40CLqc_PcbEI6v_-9C",
          transaction_id: orderId,
          value: product.price / 100,
          currency: product.currency,
          items: [
            {
              item_id: product.id,
              item_name: product.name,
            },
          ],
        });

        sessionStorage.setItem(`purchase_${orderId}`, "true");
      }
    }
  }, [accessState, orderId, product]);

  // --------------------------------------------------
  // Loading state
  // --------------------------------------------------
  if (accessState === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Verifying access…</p>
      </div>
    );
  }

  // --------------------------------------------------
  // Access denied
  // --------------------------------------------------
  if (accessState === "denied") {
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


  // --------------------------------------------------
  // Access granted (UI unchanged)
  // --------------------------------------------------
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

          <h1 className="text-4xl mb-3 text-foreground">
            Download Access
          </h1>

          <p className="text-muted-foreground">
            Order reference:{" "}
            <span className="font-mono text-sm">{orderId}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
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
                    Download your tool files and documentation.
                    This includes everything you need to start
                    using your new tool immediately.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {Array.isArray(product.accessFile) ? (
                  product.accessFile.map((file, index) => (
                    <a
                      key={index}
                      href={file}
                      download
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      <Download className="w-5 h-5" />
                      Download Access File
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No downloadable files configured for this product.
                  </p>
                )}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-lg mb-6 text-foreground">
                What you're downloading
              </h2>

              <div className="space-y-4">
                {[
                  "Main Tool File",
                  "Documentation",
                  "Updates Access",
                ].map((title, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 ${
                      i !== 2 ? "pb-4 border-b border-border" : ""
                    }`}
                  >
                    <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-foreground mb-1 text-sm">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {title === "Main Tool File" &&
                          "The primary file containing your tool (spreadsheet, code, or other format)"}
                        {title === "Documentation" &&
                          "User guide with setup instructions, examples, and best practices"}
                        {title === "Updates Access" &&
                          "Instructions for accessing future versions and updates"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm mb-1 text-foreground">
                    Need Help?
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Our support team is here to help you get started.
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@structuredtools.com"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Contact Support →
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm mb-3 text-foreground">
                Your Access
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>✓ Download anytime</li>
                <li>✓ Lifetime access</li>
                <li>✓ Free updates</li>
                <li>✓ Email support</li>
                <li>✓ No expiration</li>
              </ul>
            </div>

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
