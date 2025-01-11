"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect} from "react";
import { links } from "../data/data";



const NavLinks = () => {
  const pathname = usePathname();
  useEffect(() => {
    const nav = document.querySelector(".navbar-collapse");
    const hamburger = document.querySelector(".navbar-toggler");
    document.addEventListener("click", () => {
      if (nav?.classList.contains("show")) {
        hamburger?.classList.add("collapsed");
        nav.classList.remove("show");
      }
    });
  }, []);

  return (
    <>
      {links.map((link) => (
        <li className="nav-item" key={link.name}>
          <Link
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
            href={link.href}
          >
            {link.icon}
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
