'use client';

import React, { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Nasłuchiwanie na zdarzenie scroll
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);  // Ustawienie tła na ciemne, kiedy przewiniesz stronę o więcej niż 50px
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
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isScrolled ? "sticky" : "bg-transparent"
      }`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          JP.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-house-door"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-workspace"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-file-person"></i> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
