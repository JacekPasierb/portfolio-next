"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const links = [
  {name: "Home", href: "/", icon: <i className="bi bi-house-door"></i>},
  {
    name: "About",
    href: "/about",
    icon: <i className="bi bi-person"></i>,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <i className="bi bi-person-workspace"></i>,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: <i className="bi bi-file-person"></i>,
  },
];

const NavLinks = () => {
  const pathname = usePathname();

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
