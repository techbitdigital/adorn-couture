import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import StatsSection from "@/components/sections/StatsSection";
import AcademyHighlight from "@/components/sections/AcademyHighlight";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedCollection />
      <AcademyHighlight />

      {/* Contact CTA Banner */}
     {/* Contact CTA Banner */}
      <section style={{ padding: "5rem 0", backgroundColor: "#FAF7F4", borderTop: "1px solid #f0ebe3" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <p className="tag" style={{ marginBottom: "1rem", display: "block" }}>Get In Touch</p>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem" }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", maxWidth: "450px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Whether you are looking for your next statement piece or ready to launch your fashion career — we are here for you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#722F37", color: "white", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", minWidth: "220px" }}>
              Contact Us
            </Link>
            <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #722F37", color: "#722F37", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", minWidth: "220px" }}>
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
