import { Outlet, useLocation } from "react-router-dom";
import "./MainLayout.css"
import { Footer } from "../../shared/components/Footer";

export default function MainLayout() {
  const location = useLocation();

  const isHome =
    location.pathname === "/" &&
    location.search === "";

  return (
    <div className="blog-layout">
      <main className="main">
        <div className="blog-layout__content">
          <Outlet />          
        </div>
        
      </main>
       {!isHome && <Footer />}
    </div>
  );
}