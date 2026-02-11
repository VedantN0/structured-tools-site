import { Link, useNavigate, useParams } from "react-router";
import { CheckCircle2, Download } from "lucide-react";
import { useSearchParams } from "react-router";

export function ThankYouPage() {
  const navigate = useNavigate();

  const { productId, orderId } = useParams<{
  productId: string;
  orderId: string;
  }>();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!productId || !orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Invalid order</h1>
          <button
            onClick={() => navigate("/products")}
            className="text-primary underline"
          >
            Go back to products
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-8 py-12 text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-11 h-11 text-primary" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl mb-4 text-foreground">
          Purchase Complete
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Your order has been confirmed. You now have lifetime access to your tool.
        </p>

        {/* Order Details */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8 text-left">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Order Reference</div>
              <div className="text-foreground font-mono text-sm">{orderId}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">Date</div>
              <div className="text-foreground text-sm">{new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Access Your Download</h3>
                <p className="text-sm text-muted-foreground">
                  Visit your download page to get your files and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <button
            onClick={() => navigate(`/download/${productId}/${orderId}?token=${token}`)}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            Go to Download Page
          </button>
          
          <Link
            to="/products"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Browse More Tools
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Need help?
          </p>
          <a
            href="mailto:support@structuredtools.com"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </div>
  );
}
