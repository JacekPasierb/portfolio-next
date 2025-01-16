import React from "react";
import style from "./SocialBox.module.css";
import {socialLinks} from "../../data/data";

const SocialBox = () => {
  return (
    <ul className={`${style.socialList}  d-flex justify-content-center`}>
      {socialLinks.map((link) => (
        <li key={link.name} className={`${style.socialItem} `}>
          <a
            href={link.href}
            className={`${style.socialLink} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi ${link.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialBox;
