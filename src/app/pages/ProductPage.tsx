import { useParams, Link, useNavigate } from "react-router";
import { getProductById } from "../data/products";
import { Check, ArrowLeft, Download } from "lucide-react";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-2xl sm:text-3xl mb-4 text-foreground">Tool Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The tool you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Tools
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            {/* Header */}
            <div>
              <div className="inline-block px-3 py-1 bg-muted rounded text-xs text-muted-foreground mb-4">
                {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-foreground leading-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {product.description}
              </p>
            </div>

            {/* Format Info */}
            <div className="bg-muted/50 border border-border rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-foreground mb-0.5">Delivered as</div>
                  <div className="text-sm text-muted-foreground">{product.format}</div>
                </div>
              </div>
            </div>

            {/* Who It's For */}
            <div>
              <h2 className="text-lg sm:text-xl mb-6 text-foreground">Who this is for</h2>
              <ul className="space-y-3">
                {product.whoItsFor.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-lg sm:text-xl mb-6 text-foreground">What's included</h2>
              <ul className="space-y-3">
                {product.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-lg sm:text-xl mb-6 text-foreground">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 shadow-sm">
              <div className="mb-6 md:mb-8">
                <div className="text-sm text-muted-foreground mb-2">Price</div>
                <div className="text-3xl sm:text-4xl text-foreground mb-1">
                  ${(product.price / 100).toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-muted-foreground">
                  One-time payment
                </div>
              </div>

              <button
                onClick={() => navigate(`/checkout/${product.id}`)}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg hover:bg-primary/90 transition-colors mb-6 shadow-sm"
              >
                Buy Now
              </button>

              <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>Instant download</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>Free updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>Email support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
