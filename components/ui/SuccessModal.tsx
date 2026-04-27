"use client";
import { useEffect } from "react";
import Link from "next/link";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "application" | "contact";
  name: string;
}

export default function SuccessModal({ isOpen, onClose, type, name }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isApplication = type === "application";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "480px",
          padding: "2.5rem 2rem",
          textAlign: "center",
          position: "relative",
          animation: "modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes scaleIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes checkDraw {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "none", border: "none", cursor: "pointer",
            color: "#9ca3af", padding: "0.25rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div style={{ width: "120px", height: "120px", margin: "0 auto 2rem", animation: "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="60" cy="60" r="54" fill="#f0fdf4" stroke="#22c55e" strokeWidth="4"/>
            <polyline
              points="35,62 52,79 85,45"
              stroke="#22c55e"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset="0"
              style={{ animation: "checkDraw 0.6s ease 0.3s both" }}
            />
          </svg>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.4rem, 4vw, 1.75rem)",
            fontWeight: 700, color: "#1a1a1a",
            marginBottom: "0.75rem", lineHeight: 1.2,
          }}>
            {isApplication ? "Application Submitted!" : "Message Sent!"}
          </h2>
          <p style={{
            fontSize: "0.95rem", color: "#6b7280",
            lineHeight: 1.8, maxWidth: "340px", margin: "0 auto",
          }}>
            {isApplication
              ? `Thank you ${name}! We have received your application and will be in touch within 48 hours.`
              : `Thank you ${name}! We have received your message and will get back to you within 24 hours.`}
          </p>
        </div>

        <div style={{ height: "1px", backgroundColor: "#f0ebe3", marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {isApplication ? (
            <>
              <Link href="/academy/courses" onClick={onClose} style={{
                display: "block", backgroundColor: "#722F37", color: "white",
                padding: "0.875rem", fontSize: "0.78rem", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
              }}>
                Explore Courses
              </Link>
              <button onClick={onClose} style={{
                display: "block", width: "100%", border: "1px solid #e5e7eb",
                backgroundColor: "transparent", color: "#6b7280", padding: "0.875rem",
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
              }}>
                Close
              </button>
            </>
          ) : (
            <>
              <a href="https://wa.me/2349043371380" target="_blank" rel="noopener noreferrer" style={{
                display: "block", backgroundColor: "#25D366", color: "white",
                padding: "0.875rem", fontSize: "0.78rem", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
              }}>
                Chat on WhatsApp
              </a>
              <button onClick={onClose} style={{
                display: "block", width: "100%", border: "1px solid #e5e7eb",
                backgroundColor: "transparent", color: "#6b7280", padding: "0.875rem",
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
              }}>
                Close
              </button>
            </>
          )}
        </div>

        <p style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: "1.25rem" }}>
          A confirmation email has been sent to your inbox
        </p>
      </div>
    </div>
  );
}
