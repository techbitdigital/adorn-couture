import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Designs Created" },
  { value: "150+", label: "Graduates" },
  { value: "5+", label: "Years of Excellence" },
];

export default function StatsSection() {
  return (
    <section style={{ backgroundColor: "#FAF7F4", borderTop: "1px solid #f0ebe3", borderBottom: "1px solid #f0ebe3" }}>
      <style>{".stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem} @media(min-width:768px){.stats-grid{grid-template-columns:repeat(4,1fr)}} .stat-item{text-align:center;padding:2rem 1rem;border-bottom:1px solid #f0ebe3} @media(min-width:768px){.stat-item{border-bottom:none;border-right:1px solid #f0ebe3}} .stat-item:last-child{border-right:none}"}</style>
      <div className="container-custom" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="stat-item">
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#722F37", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}