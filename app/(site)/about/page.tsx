import Link from "next/link";

const values = [
  { number: "01", title: "Elegance", desc: "We believe fashion is an art form. Every piece we create reflects our commitment to timeless elegance and refined craftsmanship." },
  { number: "02", title: "Quality", desc: "From fabric selection to final stitch, we use only premium materials and techniques that stand the test of time." },
  { number: "03", title: "Empowerment", desc: "Through our academy, we empower the next generation of Nigerian fashion designers with world-class education." },
  { number: "04", title: "Authenticity", desc: "We celebrate African heritage and identity, fusing traditional aesthetics with contemporary global fashion trends." },
];

const team = [
  { name: "Omotolani Olusegun", role: "Founder & Creative Director", bio: "With over 10 years in the fashion industry, Omotolani founded Adorn Couture to bridge the gap between luxury fashion and accessible education in Nigeria." },
  { name: " Olabanji Abiola", role: "Head of Academy", bio: "A graduate of the London College of Fashion, Olabanji brings international expertise to our curriculum, ensuring students receive world-class training." },
  { name: "Omotolani Abiola", role: "Lead Designer", bio: "Specializing in bridal and evening wear, O has dressed some of Nigeria's most prominent women for their most special occasions." },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Designs Created" },
  { value: "150+", label: "Graduates" },
  { value: "5+", label: "Years of Excellence" },
];

export const metadata = {
  title: "About | Adorn Couture",
  description: "Learn about Adorn Couture — our story, values, and the team behind the brand.",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <style>{`
        .values-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
        @media(min-width: 768px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        .team-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media(min-width: 768px) { .team-grid { grid-template-columns: repeat(3, 1fr); } }
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; }
        @media(min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
        .about-story-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
        @media(min-width: 1024px) { .about-story-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "10rem", paddingBottom: "7rem", backgroundColor: "#1a1a1a", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/academyimage.png)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a1a1a 60%, rgba(114,47,55,0.8) 100%)" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "1.5rem", display: "block" }}>Our Story</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: "white", lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: "700px" }}>
            Fashion With Purpose,
            <br />
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Education</span> With Passion
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: "550px" }}>
            Adorn Couture was born from a simple belief — that every woman deserves to feel extraordinary, and every aspiring designer deserves world-class training.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ backgroundColor: "#FAF7F4", borderBottom: "1px solid #f0ebe3" }}>
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} style={{ textAlign: "center", padding: "2.5rem 1rem", borderRight: index < stats.length - 1 ? "1px solid #f0ebe3" : "none" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#722F37", lineHeight: 1, marginBottom: "0.5rem" }}>{stat.value}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div style={{ paddingTop: "6rem", paddingBottom: "6rem", backgroundColor: "white" }}>
        <div className="container-custom">
          <div className="about-story-grid">
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#722F37", fontWeight: 500, marginBottom: "1rem", display: "block" }}>Who We Are</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "2rem", lineHeight: 1.1 }}>
                A Lagos Fashion House Like No Other
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Founded in 2020 in the heart of Lagos, Adorn Couture began as a small atelier with a big dream — to create fashion that celebrates the modern African woman while nurturing the next generation of fashion talent.",
                  "Today, we operate two distinct verticals: a premium ready-to-wear collection that has dressed thousands of women across Nigeria, and a fashion academy that has trained over 150 aspiring designers.",
                  "Every piece we create and every student we teach carries our DNA — a relentless pursuit of excellence, creativity, and authentic African elegance.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.9 }}>{text}</p>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ backgroundColor: "#FAF7F4", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #f0ebe3" }}>
                <div style={{ textAlign: "center", padding: "3rem" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "5rem", fontWeight: 700, color: "#722F37", lineHeight: 1, marginBottom: "0.5rem" }}>5+</p>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#9ca3af" }}>Years of Excellence</p>
                  <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A84C", margin: "1.5rem auto" }} />
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.7 }}>Building dreams, one stitch at a time</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "120px", height: "120px", backgroundColor: "#722F37", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "white", lineHeight: 1, textAlign: "center" }}>AC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ backgroundColor: "#1a1a1a", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "1rem" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white" }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} style={{ padding: "3rem", borderRight: index % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none", borderBottom: index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "3rem", fontWeight: 700, color: "rgba(255,255,255,0.1)", lineHeight: 1, marginBottom: "1rem" }}>{value.number}</p>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "white", marginBottom: "1rem" }}>{value.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div style={{ backgroundColor: "white", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#722F37", fontWeight: 500, marginBottom: "1rem" }}>The People Behind The Brand</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a" }}>Meet Our Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} style={{ borderTop: "3px solid #722F37", paddingTop: "2rem" }}>
                <div style={{ width: "64px", height: "64px", backgroundColor: "#722F37", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "white" }}>{member.name[0]}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.35rem" }}>{member.name}</h3>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#722F37", marginBottom: "1rem", fontWeight: 500 }}>{member.role}</p>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.8 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: "#FAF7F4", borderTop: "1px solid #f0ebe3", paddingTop: "6rem", paddingBottom: "6rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#722F37", fontWeight: 500, marginBottom: "1rem" }}>Join Us</p>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem" }}>Ready to Be Part of Our Story?</h2>
        <p style={{ fontSize: "0.95rem", color: "#6b7280", maxWidth: "450px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>Whether you are looking for your next statement piece or ready to launch your fashion career — we are here for you.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#722F37", color: "white", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Shop Collection</Link>
          <Link href="/academy/apply" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #722F37", color: "#722F37", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Apply to Academy</Link>
        </div>
      </div>
    </div>
  );
}