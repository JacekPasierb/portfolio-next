import React from "react";

const socialLinks = [
  {name: "GitHub", icon: "bi-github", href: "https://github.com"},
  {name: "LinkedIn", icon: "bi-linkedin", href: "https://linkedin.com"},
  {name: "Instagram", icon: "bi-instagram", href: "https://instagram.com"},
  {name: "TikTok", icon: "bi-tiktok", href: "https://tiktok.com"},
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Opracowanie Jacek Pasierb </p>
          </div>
          <div className="col-md-4">
            <p>Copyright © {currentYear} JP</p>
          </div>
          <div className="col-md-4">
            <ul className="footer-social-links d-flex justify-content-center">
              {socialLinks.map((link) => (
                <li key={link.name} className="social-icons">
                  <a
                    href={link.href}
                    className="footer-social-icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`bi ${link.icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
