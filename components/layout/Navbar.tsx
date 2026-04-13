"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/academy", label: "Academy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isTransparent ? "transparent" : "white",
        borderBottom: isTransparent ? "none" : "1px solid #f0ebe3",
      }}
    >
      <nav
        className="container-custom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/tolani-logo.png"
            alt="Adorn Couture"
            style={{
              height: isTransparent ? "80px" : "65px",
              width: "auto",
              objectFit: "contain",
              transition: "all 0.3s",
              filter: isTransparent ? "brightness(0) invert(1)" : "none",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: isTransparent
                    ? "rgba(255,255,255,0.9)"
                    : pathname === link.href
                    ? "#722F37"
                    : "#4b5563",
                  transition: "color 0.2s",
                  borderBottom:
                    pathname === link.href ? "1px solid #722F37" : "none",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/academy/apply"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "0.6rem 1.5rem",
              backgroundColor: isTransparent ? "white" : "#722F37",
              color: isTransparent ? "#722F37" : "white",
              transition: "all 0.3s",
            }}
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{
            color: isTransparent ? "white" : "#1a1a1a",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #f0ebe3",
          }}
        >
          <ul
            className="container-custom"
            style={{
              listStyle: "none",
              padding: "1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.875rem 0",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "#722F37" : "#4b5563",
                    borderBottom: "1px solid #f9f6f3",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: "1rem" }}>
              <Link
                href="/academy/apply"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center" }}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}