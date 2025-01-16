"use client";

import React, {useEffect, useState} from "react";
import NavLinks from "../../ui/NavLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark fixed-top  ${
        isScrolled ? "sticky" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          JP.
        </a>
        <button
          className="custom-toggler navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
