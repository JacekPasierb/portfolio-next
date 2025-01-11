import React from "react";
import { socialLinks } from "../data/data";


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
