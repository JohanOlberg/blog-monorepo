import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="layout">

      <header className="header">
        <div className="header-container">
          <div className="logo">My Blog</div>

          <button className="search-button">
            Search
          </button>
        </div>
      </header>

      <main className="main">
        <div className="content">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h3>About</h3>
            <p>
              A modern blog platform for sharing ideas, tutorials,
              and stories about technology and development.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Articles</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: contact@myblog.com</p>
            <p>Phone: +1 (000) 123-4567</p>
            <p>Location: London, UK</p>
          </div>

          <div className="footer-section">
            <h3>Follow</h3>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 My Blog. All rights reserved.
        </div>
      </footer>

    </div>
  );
}