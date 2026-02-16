import { Link } from "react-router";
import { Brain, Layers, Lock, Zap } from "lucide-react";

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 text-foreground leading-tight max-w-3xl mx-auto">
          Digital Tools for
          <br />
          Structured Thinking
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Downloadable tools that help professionals analyze complex problems, 
          make better decisions, and think with clarity.
        </p>
        <Link
          to="/products"
          className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          Browse Tools
        </Link>
      </section>

      {/* Value Proposition */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
          <div className="space-y-4">
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
              <Brain className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg text-foreground">Built for Clarity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Each tool is designed to help you break down complexity into 
              manageable, structured components. No fluff, just clear frameworks 
              that make hard problems easier to solve.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
              <Layers className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg text-foreground">Professional Grade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're evaluating business decisions, analyzing financial 
              data, or solving technical problems, our tools bring rigor and 
              structure to your workflow.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
              <Lock className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg text-foreground">Own Your Tools</h3>
            <p className="text-muted-foreground leading-relaxed">
              One-time purchase, lifetime access. Download once and use forever: no 
              subscriptions, no cloud dependencies, no recurring fees. Your tools, 
              your data, your control.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center">
              <Zap className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg text-foreground">Instantly Usable</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every tool comes ready to use with comprehensive documentation. 
              Download, open, and start working immediately.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border text-center">
        <h2 className="text-2xl sm:text-3xl mb-6 text-foreground">What We Build</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Structured Tools creates digital utilities across multiple domains: from 
          decision frameworks and analytical models to financial calculators and 
          planning tools. Each tool solves a specific problem with precision.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 text-left">
            <h3 className="text-sm mb-2 text-foreground">Thinking Tools</h3>
            <p className="text-sm text-muted-foreground">
              Decision frameworks, prioritization matrices, and structured analysis tools
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-left">
            <h3 className="text-sm mb-2 text-foreground">Financial Tools</h3>
            <p className="text-sm text-muted-foreground">
              Systematic trading strategies, analytical frameworks, and risk-aware execution models
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-left">
            <h3 className="text-sm mb-2 text-foreground">More Categories</h3>
            <p className="text-sm text-muted-foreground">
              We're expanding into project planning, data analysis, and workflow optimization
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-border">
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl mb-5 text-foreground">Our Philosophy</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p>
              We believe good tools should amplify your thinking, not replace it. 
              They should be transparent, auditable, and completely under your control.
            </p>
            <p>
              That's why we build downloadable digital tools you own forever. No 
              black boxes, no vendor lock-in, no recurring fees. Just clean, structured 
              solutions you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl mb-6 text-foreground">Explore Our Tools</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
          Browse our growing catalog of professional-grade tools designed for 
          structured thinking and rigorous analysis.
        </p>
        <Link
          to="/products"
          className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          View All Tools
        </Link>
      </section>
    </div>
  );
}
