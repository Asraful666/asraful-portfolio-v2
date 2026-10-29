"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation">
        <Link
          href="/#home"
          className="logo"
          onClick={() => setIsOpen(false)}
        >
          Asraful<span>.</span>
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close ✕" : "Menu ☰"}
        </button>

        <div
          id="navigation-links"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}