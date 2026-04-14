import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/data/courses";
import { formatPrice } from "@/lib/utils";
import { Clock, CheckCircle, Users, Award } from "lucide-react";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const levelColor = course.level === "Beginner" ? "#16a34a" : course.level === "Intermediate" ? "#C9A84C" : "#722F37";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <style>{".cg{display:grid;grid-template-columns:1fr;gap:4rem} @media(min-width:1024px){.cg{grid-template-columns:2fr 1fr}} .curr-grid{display:grid;grid-template-columns:1fr;gap:1rem} @media(min-width:640px){.curr-grid{grid-template-columns:1fr 1fr}}"}</style>

      <div style={{ paddingTop: "6rem", paddingBottom: "4rem", background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f23 100%)" }}>
        <div className="container-custom">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <Link href="/" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <Link href="/academy" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Academy</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <Link href="/academy/courses" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Courses</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <span style={{ fontSize: "0.72rem", color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>{course.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: levelColor, border: ["1px solid ", levelColor].join(""), padding: "0.3rem 0.875rem" }}>{course.level}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
              <Clock size={14} />
              <span>{course.duration}</span>
            </div>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "700px" }}>{course.title}</h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "600px" }}>{course.description}</p>
        </div>
      </div>

      <div className="container-custom" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="cg">
          <div>
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "2rem" }}>What You Will Learn</h2>
              <div className="curr-grid">
                {course.curriculum.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "1rem", backgroundColor: "#FAF7F4", borderLeft: "3px solid #722F37" }}>
                    <CheckCircle size={16} style={{ color: "#722F37", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "2rem" }}>Why Choose This Course</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {[
                  { icon: Users, title: "Small Class Sizes", desc: "Max 15 students per class for personalized attention" },
                  { icon: Award, title: "Certification", desc: "Receive an industry-recognized certificate on completion" },
                  { icon: Clock, title: "Flexible Schedule", desc: "Morning and evening classes available" },
                  { icon: CheckCircle, title: "Expert Tutors", desc: "Learn from working fashion professionals" },
                ].map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} style={{ padding: "1.5rem", border: "1px solid #f0ebe3" }}>
                      <Icon size={20} style={{ color: "#722F37", marginBottom: "0.75rem" }} />
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>{perk.title}</h3>
                      <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>{perk.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div style={{ border: "1px solid #f0ebe3", padding: "2rem", position: "sticky", top: "6rem" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}>Course Fee</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.5rem", fontWeight: 700, color: "#722F37", marginBottom: "0.5rem" }}>{formatPrice(course.price)}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6b7280", fontSize: "0.85rem", marginBottom: "2rem" }}>
                <Clock size={14} style={{ color: "#C9A84C" }} />
                <span>Duration: {course.duration}</span>
              </div>
              <div style={{ height: "1px", backgroundColor: "#f0ebe3", marginBottom: "2rem" }} />
              <Link href="/academy/apply" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#722F37", color: "white", padding: "1rem 2rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", marginBottom: "1rem", width: "100%" }}>
                Apply for This Course
              </Link>
              <p style={{ fontSize: "0.72rem", color: "#9ca3af", textAlign: "center", marginBottom: "2rem" }}>Applications reviewed within 48 hours</p>
              <div style={{ height: "1px", backgroundColor: "#f0ebe3", marginBottom: "1.5rem" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Small class sizes (max 15)", "Certificate upon completion", "Flexible morning and evening schedules", "Expert industry tutors"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C9A84C", flexShrink: 0 }} />
                    <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#1a1a1a", paddingTop: "4rem", paddingBottom: "4rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>Ready to Start?</p>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Begin Your Fashion Journey Today</h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem", lineHeight: 1.8 }}>Join our community of aspiring designers and take the first step toward your dream career.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/academy/apply" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: "#722F37", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Apply Now</Link>
          <Link href="/academy/courses" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)", padding: "0.875rem 2.5rem", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>View All Courses</Link>
        </div>
      </div>
    </div>
  );
}