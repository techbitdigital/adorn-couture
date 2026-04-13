import Link from "next/link";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Collections" },
    { href: "/shop?category=evening", label: "Evening Wear" },
    { href: "/shop?category=casual", label: "Casual Wear" },
    { href: "/shop?category=bridal", label: "Bridal" },
  ],
  academy: [
    { href: "/academy", label: "About Academy" },
    { href: "/academy/courses", label: "Our Courses" },
    { href: "/academy/apply", label: "Apply Now" },
  ],
};

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "white" }}>
      <div className="container-custom" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <img src="/tolani-logo.png" alt="Adorn Couture" style={{ height: "60px", width: "auto", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Elegance redefined. Fashion and education in perfect harmony.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all 0.2s" }}>
                  <Share2 size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem", fontWeight: 500 }}>Shop</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem", fontWeight: 500 }}>Academy</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {footerLinks.academy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem", fontWeight: 500 }}>Contact</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
                <MapPin size={14} style={{ marginTop: "3px", flexShrink: 0, color: "#C9A84C" }} />
                Lagos, Nigeria
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
                <Phone size={14} style={{ flexShrink: 0, color: "#C9A84C" }} />
                <a href="tel:+2348000000000" style={{ color: "rgba(255,255,255,0.6)" }}>+234 800 000 0000</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
                <Mail size={14} style={{ flexShrink: 0, color: "#C9A84C" }} />
                <a href="mailto:hello@adorncouture.com" style={{ color: "rgba(255,255,255,0.6)" }}>hello@adorncouture.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Adorn Couture. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            Crafted with elegance in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}