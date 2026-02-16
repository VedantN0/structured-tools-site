import { Link } from "react-router";
import { products } from "../data/products";
import { ArrowRight, Plus } from "lucide-react";

export function ProductsPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-foreground">All Tools</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Professional digital tools for structured thinking, analysis, and decision-making. 
            One-time purchase, lifetime access.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {products
          .filter(product => product.isPublic !== false)
          .map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:shadow-md hover:border-foreground/20 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="inline-block px-3 py-1 bg-muted rounded text-xs text-muted-foreground">
                  {product.category}
                </div>
                <div className="text-lg sm:text-xl text-foreground">
                  ${(product.price / 100).toLocaleString('en-IN')}
                </div>
              </div>

              <h2 className="text-lg sm:text-xl mb-3 text-foreground group-hover:text-foreground/80 transition-colors">
                {product.name}
              </h2>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {product.shortDescription}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">
                  {product.format}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Indicator */}
        <div className="bg-muted/50 border border-border rounded-lg p-6 sm:p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg mb-4">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="text-lg mb-2 text-foreground">More Tools Coming Soon</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            We're actively building new tools across different categories. Follow our roadmap 
            or reach out if you have a specific tool in mind.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-lg sm:text-xl mb-4 text-foreground">Looking for Something Specific?</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                If you need a custom tool or have suggestions for what we should build next, 
                we'd love to hear from you.
              </p>
              <a
                href="mailto:support@structuredtools.com"
                className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Get in Touch →
              </a>
            </div>
            
            <div>
              <h2 className="text-lg sm:text-xl mb-4 text-foreground">All Tools Include</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Lifetime access and updates</li>
                <li>✓ Comprehensive documentation</li>
                <li>✓ No subscriptions or recurring fees</li>
                <li>✓ Email support</li>
                <li>✓ Instant download after purchase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
