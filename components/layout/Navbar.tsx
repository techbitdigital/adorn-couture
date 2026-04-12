"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl font-bold text-wine-DEFAULT tracking-wide">
            ADORN
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
            Couture
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200 hover:text-wine-DEFAULT relative group",
                  pathname === link.href
                    ? "text-wine-DEFAULT font-medium"
                    : "text-gray-600"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-wine-DEFAULT transition-all duration-200",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/academy/apply"
            className="text-sm font-medium bg-wine-DEFAULT text-white px-5 py-2.5 hover:bg-wine-dark transition-colors duration-200 tracking-wide"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-wine-DEFAULT transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-custom flex flex-col py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block py-3 text-sm tracking-wide border-b border-gray-50 transition-colors hover:text-wine-DEFAULT",
                  pathname === link.href
                    ? "text-wine-DEFAULT font-medium"
                    : "text-gray-600"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/academy/apply"
              className="block text-center text-sm font-medium bg-wine-DEFAULT text-white px-5 py-3 hover:bg-wine-dark transition-colors tracking-wide"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
