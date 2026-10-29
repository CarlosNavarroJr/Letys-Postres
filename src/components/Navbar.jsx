import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Treats", href: "#treats" },
    { label: "Custom Cakes", href: "#custom-cakes" },
    { label: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="navbar-container" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Lety's Postres
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <span className="navbar-cart" aria-label="Cart: 0 items">
            <span aria-hidden="true">🛍️</span>
            <span>0</span>
          </span>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true">{menuOpen ? "x" : "☰"}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
