import { useParams, Link, useNavigate } from "react-router";
import { getProductById } from "../data/products";
import { Lock, ArrowLeft, Shield } from "lucide-react";

export function CheckoutPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-24 text-center">
        <h1 className="text-3xl mb-4 text-foreground">Tool Not Found</h1>
        <Link
          to="/products"
          className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Tools
        </Link>
      </div>
    );
  }

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: product.price, // already in paise
        productId: product.id,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Create order failed:", err);
      alert("Unable to start payment. Please try again.");
      return;
    }

    const order = await response.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Structured Tools",
      description: product.name,
      order_id: order.id,
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            productId: product.id,
          }),
        });

        const result = await verifyRes.json();

        if (result.success) {
          navigate(
            `/download/${product.id}/${result.orderId}?token=${result.token}`
          );
        } else {
          alert("Payment verification failed. Please contact support.");
        }
      },
      theme: {
        color: "#1D546D",
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Product
          </Link>

          <h1 className="text-3xl text-foreground">Checkout</h1>
        </div>

        <div className="grid grid-cols-5 gap-12">
          {/* Left Column */}
          <div className="col-span-3 space-y-8">
            {/* Order Summary */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-lg mb-6 text-foreground">Order Summary</h2>

              <div className="flex items-start justify-between pb-6 border-b border-border">
                <div>
                  <div className="text-foreground mb-1">{product.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {product.format} • Lifetime access
                  </div>
                </div>

                <div className="text-lg text-foreground">
                  ₹{(product.price / 100).toLocaleString("en-IN")}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="text-lg text-foreground">Total</div>
                <div className="text-2xl text-foreground">
                  ₹{(product.price / 100).toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-lg mb-6 text-foreground">Payment</h2>

              <div className="mb-8 space-y-6">
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground mb-1">
                        Secure Payment via Razorpay
                      </div>
                      <div className="text-xs text-muted-foreground">
                        You'll be redirected to Razorpay's secure payment
                        gateway to complete your purchase.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    All payments are processed securely. We never see or store
                    your payment details.
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg shadow-sm"
              >
                Proceed to Payment
              </button>

              <p className="text-xs text-muted-foreground text-center mt-6">
                By completing this purchase, you agree to our{" "}
                <a href="#" className="text-foreground hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-foreground hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm mb-4 text-foreground">
                After Payment
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">1.</span>
                  <span>Complete payment via Razorpay</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">2.</span>
                  <span>Receive instant access to your tool</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground shrink-0">3.</span>
                  <span>Download files and start using immediately</span>
                </li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm mb-4 text-foreground">
                Your Purchase Includes
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Instant download access</li>
                <li>✓ Lifetime access to files</li>
                <li>✓ Free updates forever</li>
                <li>✓ Email support</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Questions before purchasing?
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
      </div>
    </div>
  );
}
