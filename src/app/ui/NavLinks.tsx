"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const links = [
  {name: "Home", href: "/", icon: <i className="bi bi-house-door"></i>},
  {
    name: "O mnie",
    href: "/about",
    icon: <i className="bi bi-person"></i>,
  },
  {
    name: "Moje projekty",
    href: "/projects",
    icon: <i className="bi bi-person-workspace"></i>,
  },
  {
    name: "Moje CV",
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
