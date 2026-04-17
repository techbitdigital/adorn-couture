"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    padding: "0.875rem 1rem",
    fontSize: "0.9rem",
    color: "#1a1a1a",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: "0.5rem",
  };

  const contactInfo = [
    { icon: MapPin, label: "Our Location", value: "Lagos, Nigeria" },
    { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
    { icon: Mail, label: "Email", value: "hello@adorncouture.com" },
    { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9am - 6pm" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <style>{`
        .cform-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
        @media(min-width: 1024px) { .cform-grid { grid-template-columns: 2fr 3fr; } }
        .cinput-row { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media(min-width: 640px) { .cinput-row { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* Header */}
      <div style={{ paddingTop: "8rem", paddingBottom: "4rem", backgroundColor: "#FAF7F4", borderBottom: "1px solid #f0ebe3" }}>
        <div className="container-custom">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#722F37", fontWeight: 500, marginBottom: "1rem", display: "block" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem", lineHeight: 1.1 }}>Contact Us</h1>
          <p style={{ fontSize: "1rem", color: "#6b7280", maxWidth: "500px", lineHeight: 1.8 }}>We would love to hear from you. Reach out for orders, academy inquiries, or any questions.</p>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="cform-grid">

          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "2.5rem" }}>Reach Us Directly</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                    <div style={{ width: "44px", height: "44px", backgroundColor: "#FAF7F4", border: "1px solid #f0ebe3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} style={{ color: "#722F37" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.25rem", fontWeight: 500 }}>{item.label}</p>
                      <p style={{ fontSize: "0.95rem", color: "#1a1a1a", fontWeight: 500 }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ borderTop: "1px solid #f0ebe3", paddingTop: "2rem" }}>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "1.25rem", lineHeight: 1.7 }}>Prefer to chat directly? Reach us on WhatsApp for faster responses.</p>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#25D366", color: "white", padding: "0.875rem 1.75rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "5rem 2rem", backgroundColor: "#FAF7F4", border: "1px solid #f0ebe3" }}>
                <div style={{ width: "60px", height: "60px", backgroundColor: "#722F37", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <span style={{ color: "white", fontSize: "1.5rem" }}>✓</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem" }}>Message Sent!</h2>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "2rem", lineHeight: 1.7 }}>Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#722F37", background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid #722F37", paddingBottom: "2px", fontFamily: "inherit" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="cinput-row">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle} />
                  </div>
                </div>
                <div className="cinput-row">
                  <div>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" required style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." required rows={6} style={{ ...inputStyle, resize: "none" }} />
                </div>
                {status === "error" && (
                  <p style={{ fontSize: "0.85rem", color: "#dc2626" }}>Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#722F37", color: "white", padding: "1rem 2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "inherit", alignSelf: "flex-start", opacity: status === "loading" ? 0.7 : 1 }}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}