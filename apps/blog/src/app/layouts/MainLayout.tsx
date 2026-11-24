import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./MainLayout.css"
import { Footer } from "../../shared/components/Footer";

export default function MainLayout() {
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!location.hash || location.hash === "#top") {
      topRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
      if (location.hash === "#top") topRef.current?.focus({ preventScroll: true });
    }
  }, [location.key, location.pathname, location.search, location.hash]);

  const isHome =
    location.pathname === "/" &&
    location.search === "";

  return (
    <div className="blog-layout" id="top" tabIndex={-1} ref={topRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main className="main" id="main-content" tabIndex={-1}>
        <div className="blog-layout__content">
          <Outlet />          
        </div>
        
      </main>
       {!isHome && <Footer />}
    </div>
  );
}