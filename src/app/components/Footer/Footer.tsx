import React from "react";
import style from "./Footer.module.css";

import SocialBox from "../SocialBox/SocialBox";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${style.footer} text-center`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Opracowanie Jacek Pasierb </p>
          </div>
          <div className="col-md-4">
            <p>Copyright © {currentYear} JP</p>
          </div>
          <div className="col-md-4">
            <SocialBox />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
