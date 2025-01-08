import React from "react";

const socialLinks = [
  {name: "GitHub", icon: "bi-github", href: "https://github.com"},
  {name: "LinkedIn", icon: "bi-linkedin", href: "https://linkedin.com"},
  {name: "Instagram", icon: "bi-instagram", href: "https://instagram.com"},
  {name: "TikTok", icon: "bi-tiktok", href: "https://tiktok.com"},
];
const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link) => (
        <li key={link.name} className="social-icons">
          <a
            href={link.href}
            className="home-social-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi ${link.icon}`} />
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialLinks;
