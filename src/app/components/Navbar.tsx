"use client";

import React, {useEffect, useState} from "react";
import NavLinks from "../ui/NavLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Nasłuchiwanie na zdarzenie scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Ustawienie tła na ciemne, kiedy przewiniesz stronę o więcej niż 50px
      } else {
        setIsScrolled(false); // Przywrócenie przezroczystego tła
      }
    };

    window.addEventListener("scroll", handleScroll); // Dodanie nasłuchiwania na scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Czyszczenie event listenera
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
          <ul className="navbar-nav ms-auto">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
