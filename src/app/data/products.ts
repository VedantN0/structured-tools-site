export interface Product {
  id: string;
  name: string;
  category: string;
  format: string;
  shortDescription: string;
  description: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  price: number;
  currency: "INR" | "USD";
  accessFile: string[],
  features: string[];
}

export const products: Product[] = [
  {
    id: "multi-timeframe-trading-strategy",
    name: "Python Crypto Trading Framework for Binance Spot Trading",
    category: "Trading Systems",
    format: "Source Code (Python) + Documentation (PDF)",
    shortDescription:
      "A rule-based, multi-timeframe trading system framework designed for structured analysis, and execution experimentation.",
    description:
      "A clean, educational trading system framework demonstrating how to design and implement a rule-based, multi-timeframe strategy. The project emphasizes deterministic execution, safe interaction with exchange APIs, and clear separation between strategy logic, execution, and configuration. This is not a plug-and-play trading bot, but a structured foundation for learning, experimentation, and extension.",
    whoItsFor: [
      "Traders exploring systematic and rule-based strategies",
      "Developers learning trading system architecture",
      "Quants experimenting with multi-timeframe logic",
      "Anyone interested in structured trading system design"
    ],
    whatsIncluded: [
      "Access to the GitHub repository",
      "Multi-timeframe strategy implementation (Python)",
      "Clear project structure and configuration system",
      "Execution modes (DRY_RUN, Testnet, Mainnet)",
      "Detailed access and usage instructions (PDF)",
      "Lifetime access to the repository"
    ],
    price: 2999,
    currency: "USD",
    accessFile: ["/downloads/multi-timeframe-strategy.pdf"],
    features: [
      "Multi-timeframe market analysis",
      "Rule-based strategy logic",
      "Deterministic bar-by-bar execution",
      "Safe exchange API interaction",
      "Extensible and modular architecture"
    ]
  },
  {
    id: "vendor-selection-spreadsheet",
    name: "Vendor Selection & Comparison Spreadsheet",
    category: "Decision & Analysis Tools",
    format: "Spreadsheet (Google Sheets / Excel)",
    shortDescription:
      "A structured spreadsheet for comparing vendors using weighted criteria and transparent scoring.",
    description:
      "A practical decision-support spreadsheet designed to help you compare multiple vendors or options using structured criteria and weighted scoring. The tool helps bring clarity to complex comparisons by organizing inputs, scoring factors consistently, and making trade-offs explicit.",
    whoItsFor: [
      "Founders and operators evaluating vendors",
      "Procurement and operations teams",
      "Consultants comparing service providers",
      "Anyone making structured vendor decisions"
    ],
    whatsIncluded: [
      "Access to the Google Sheets comparison tool",
      "Step-by-step usage instructions (PDF)",
      "Pre-configured scoring and weighting system",
      "Editable inputs for custom decision criteria",
      "Option to export as Excel",
      "Lifetime access"
    ],
    price: 999,
    currency: "USD",
    accessFile: ["/downloads/vendor-selection-spreadsheet.pdf"],
    features: [
      "Weighted criteria scoring",
      "Side-by-side vendor comparison",
      "Customizable inputs",
      "Clear decision structuring",
      "Reusable for multiple evaluations"
    ]
  },
  {
    id: "test-inr-product",
    name: "Test Product (INR)",
    category: "Testing",
    format: "Digital File (PDF)",
    shortDescription:
      "A low-cost INR test product to validate full payment pipeline.",
    description:
      "This is a test product used to validate Razorpay order creation, payment verification, download access, and analytics tracking in INR.",
    whoItsFor: [
      "Internal testing",
      "Pipeline validation",
      "Live payment verification"
    ],
    whatsIncluded: [
      "Test PDF download file",
      "Access verification flow",
      "Full Razorpay live mode test"
    ],
    price: 100, // 1 (upees)
    currency: "INR",
    accessFile: ["/downloads/test-inr.pdf"],
    features: [
      "Order creation test",
      "Payment verification test",
      "Download token validation",
      "GA4 purchase event validation"
    ]
  },
  {
    id: "test-usd-product",
    name: "Test Product (USD)",
    category: "Testing",
    format: "Digital File (PDF)",
    shortDescription:
      "A low-cost USD test product to validate international payment flow.",
    description:
      "This product is used to test international USD payments through Razorpay, including order creation, verification, and token-based download access.",
    whoItsFor: [
      "International payment testing",
      "USD flow validation",
      "Analytics testing"
    ],
    whatsIncluded: [
      "Test USD file download",
      "Razorpay USD transaction test",
      "Access control validation"
    ],
    price: 121, // $1.21 (dollars)
    currency: "USD",
    accessFile: ["/downloads/test-usd.pdf"],
    features: [
      "International payment test",
      "USD checkout validation",
      "Token-based download test",
      "GA4 purchase tracking"
    ]
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}