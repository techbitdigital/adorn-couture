import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

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
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                ADORN
              </span>
              <span className="text-[10px] tracking-[0.3em] text-burgundy-300 uppercase">
                Couture
              </span>
            </Link>
            <p className="text-sm text-burgundy-200 leading-relaxed mb-6">
              Elegance redefined. Fashion and education in perfect harmony.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 border border-burgundy-800 hover:border-white hover:text-white text-burgundy-300 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-burgundy-300 mb-5">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-burgundy-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-burgundy-300 mb-5">
              Academy
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.academy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-burgundy-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-burgundy-300 mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-burgundy-200">
                <MapPin size={15} className="mt-0.5 shrink-0 text-burgundy-400" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3 text-sm text-burgundy-200">
                <Phone size={15} className="shrink-0 text-burgundy-400" />
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-burgundy-200">
                <Mail size={15} className="shrink-0 text-burgundy-400" />
                <a href="mailto:hello@adorncouture.com" className="hover:text-white transition-colors">
                  hello@adorncouture.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-burgundy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-burgundy-400">
            © {new Date().getFullYear()} Adorn Couture. All rights reserved.
          </p>
          <p className="text-xs text-burgundy-400">
            Crafted with elegance in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
