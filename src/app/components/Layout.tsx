import { Link, Outlet, useLocation } from "react-router";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();
  
  // Hide navigation on checkout, thank you, and download pages for cleaner experience
  const hideNav = ['/checkout', '/thank-you', '/download'].some(path => 
    location.pathname.includes(path)
  );

  function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "G-74T1CBYNFW", {
          page_path: location.pathname + location.search,
        });
      }
    }, [location]);

    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">

      <>
        <AnalyticsTracker />
      </>

      {!hideNav && (
        <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <Link to="/" className="text-xl tracking-tight text-foreground hover:text-muted-foreground transition-colors">
              Structured Tools
            </Link>
            <nav className="flex items-center gap-8">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tools
              </Link>
              <a 
                href="mailto:support@structuredtools.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
      )}
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      {!hideNav && (
        <footer className="border-t border-border bg-card mt-auto">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm mb-4 text-foreground">Structured Tools</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital tools that help professionals think clearly, analyze problems, and make better decisions.
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-4 text-foreground">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:support@structuredtools.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                © 2026 Structured Tools. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}