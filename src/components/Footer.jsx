import "../styles/Footer.css";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Pasteles", href: "#treats" },
    { label: "Custom Cakes", href: "#custom-cakes" },
    { label: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-column -footer-about">
          <h2 className="footer-logo">Lety's Postres</h2>

          <p>Pasteles hechos en casa, para cualquier ocasion.</p>
        </div>

        <nav className="footer-column" aria-label="Footer Navigation">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>Interesado en encargar algo?</p>
          <p>Email y contacto vendra pronto</p>

          <a href="#cake-request" className="footer-request-link">
            Pedidos Especialles
          </a>
        </div>

        <div className="footer-column">
          <h3>Horario</h3>

          <p>Horas disponibles</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Dulce Delights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
