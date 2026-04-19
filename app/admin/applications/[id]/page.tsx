import connectDB from "@/lib/mongodb";
import Application from "@/lib/models/ApplicationModel";
import { notFound } from "next/navigation";
import Link from "next/link";
import ApplicationActions from "./ApplicationActions";

type Props = { params: Promise<{ id: string }> };

export default async function ApplicationDetailPage({ params }: Props) {
  const { id } = await params;
  await connectDB();
  const app = await Application.findById(id);
  if (!app) notFound();

  const courseMap: Record<string, string> = {
    "fashion-design-fundamentals": "Fashion Design Fundamentals",
    "advanced-pattern-making": "Advanced Pattern Making & Draping",
    "fashion-business-entrepreneurship": "Fashion Business & Entrepreneurship",
    "luxury-bridal-design": "Luxury Bridal Design",
  };

  return (
    <div>
      <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href="/admin/applications" style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "none" }}>← Back</Link>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1a1a1a" }}>Application Detail</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>

        {/* Main Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.5rem" }}>Applicant Information</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { label: "Full Name", value: app.fullName },
                { label: "Email", value: app.email },
                { label: "Phone", value: app.phone },
                { label: "Experience Level", value: app.experienceLevel },
              ].map((field) => (
                <div key={field.label}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 600, marginBottom: "0.35rem" }}>{field.label}</p>
                  <p style={{ fontSize: "0.95rem", color: "#1a1a1a", fontWeight: 500 }}>{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.5rem" }}>Course Selection</h2>
            <div style={{ backgroundColor: "#FAF7F4", padding: "1.25rem", borderLeft: "4px solid #722F37" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 600, marginBottom: "0.35rem" }}>Selected Course</p>
              <p style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 600 }}>{courseMap[app.course] || app.course}</p>
            </div>
          </div>

          {app.message && (
            <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem" }}>Message from Applicant</h2>
              <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>{app.message}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.25rem" }}>Application Status</h2>
            <span style={{
              display: "inline-block",
              fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.5rem 1rem", marginBottom: "1.5rem",
              backgroundColor: app.status === "pending" ? "#fef3c7" : app.status === "approved" ? "#dcfce7" : app.status === "enrolled" ? "#dbeafe" : "#fee2e2",
              color: app.status === "pending" ? "#92400e" : app.status === "approved" ? "#166534" : app.status === "enrolled" ? "#1e40af" : "#991b1b",
            }}>
              {app.status}
            </span>
            <ApplicationActions id={app._id.toString()} currentStatus={app.status} />
          </div>

          <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.25rem" }}>Quick Actions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href={["mailto:", app.email].join("")} style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#722F37", color: "white", padding: "0.75rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                Send Email
              </a>
              <a href={["https://wa.me/", app.phone.replace(/\D/g, "")].join("")} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#25D366", color: "white", padding: "0.75rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                WhatsApp
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "white", border: "1px solid #f0ebe3", padding: "1.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 600, marginBottom: "0.5rem" }}>Submitted On</p>
            <p style={{ fontSize: "0.95rem", color: "#1a1a1a", fontWeight: 500 }}>
              {new Date(app.createdAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}