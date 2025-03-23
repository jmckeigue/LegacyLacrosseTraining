import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/legacylacrosselogo.png"; // adjust path if needed
import "../App.css"; // assuming styles like .header, .logo-img, etc. live here

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header & Navigation */}
      <header className="header">
        {/* Logo (Clicking Redirects to Home) */}
        <a href="/" className="logo-container">
          <img src={logo} alt="Legacy Lacrosse Logo" className="logo-img" />
          <h1 className="site-title">Legacy Lacrosse Training</h1>
        </a>

        <nav className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to="/booking" className="nav-item">Book a Session</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
        </nav>
      </header>

      {/* Page-specific content */}
      <Outlet />

      {/* Footer */}
      <footer className="py-6 bg-primary text-white text-center">
      <p>
          Contact us at{" "}
          <a href="mailto:legacylacrossetraining@gmail.com" className="underline">
            legacylacrossetraining@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
