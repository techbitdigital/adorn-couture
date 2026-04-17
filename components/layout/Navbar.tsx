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
    <>
      <style>{`
        .nav-links { display: none; }
        .nav-cta { display: none; }
        .nav-hamburger { display: flex; }
        @media(min-width: 768px) {
          .nav-links { display: flex; align-items: center; gap: 2.5rem; list-style: none; }
          .nav-cta { display: flex; }
          .nav-hamburger { display: none; }
        }
        .mobile-menu { display: none; }
        .mobile-menu.open { display: block; }
        @media(max-width: 767px) {
        .nav-logo { height: 45px !important; }
        }
      `}</style>

      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isTransparent ? "transparent" : "white",
        borderBottom: isTransparent ? "none" : "1px solid #f0ebe3",
      }}>
        <nav className="container-custom" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/tolani-logo.png"
              alt="Adorn Couture"
              className="nav-logo"
              style={{
                height: isTransparent ? "70px" : "55px",
                width: "auto",
                objectFit: "contain",
                transition: "all 0.3s",
                filter: isTransparent ? "brightness(0) invert(1)" : "none",
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
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
                    borderBottom: pathname === link.href ? "1px solid #722F37" : "none",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta">
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
                textDecoration: "none",
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-hamburger"
            style={{
              color: isTransparent ? "white" : "#1a1a1a",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #f0ebe3",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <ul style={{
            listStyle: "none",
            padding: "0 1.5rem",
            display: "flex",
            flexDirection: "column",
          }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "1rem 0",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: pathname === link.href ? "#722F37" : "#4b5563",
                    borderBottom: "1px solid #f9f6f3",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ padding: "1.25rem 0" }}>
              <Link
                href="/academy/apply"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.875rem 1.5rem",
                  backgroundColor: "#722F37",
                  color: "white",
                  fontSize: "0.78rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}