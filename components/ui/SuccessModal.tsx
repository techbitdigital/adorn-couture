"use client";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
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
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#9ca3af",
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Lottie Animation */}
        <div style={{ width: "220px", height: "220px", margin: "0 auto" }}>
          <Player
            autoplay
            keepLastFrame
            src="https://assets3.lottiefiles.com/packages/lf20_jbrw3hcz.json"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Content */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.4rem, 4vw, 1.75rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}>
            {isApplication ? "Application Submitted!" : "Message Sent!"}
          </h2>
          <p style={{
            fontSize: "0.95rem",
            color: "#6b7280",
            lineHeight: 1.8,
            maxWidth: "340px",
            margin: "0 auto",
          }}>
            {isApplication
              ? `Thank you ${name}! We've received your application and will be in touch within 48 hours.`
              : `Thank you ${name}! We've received your message and will get back to you within 24 hours.`}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#f0ebe3", marginBottom: "1.5rem" }} />

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {isApplication ? (
            <>
              <Link
                href="/academy/courses"
                onClick={onClose}
                style={{
                  display: "block",
                  backgroundColor: "#722F37",
                  color: "white",
                  padding: "0.875rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Explore Courses
              </Link>
              <button
                onClick={onClose}
                style={{
                  display: "block",
                  width: "100%",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "transparent",
                  color: "#6b7280",
                  padding: "0.875rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Close
              </button>
            </>
          ) : (
            <>
              <a
                href="https://wa.me/2349043371380"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "0.875rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={onClose}
                style={{
                  display: "block",
                  width: "100%",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "transparent",
                  color: "#6b7280",
                  padding: "0.875rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Close
              </button>
            </>
          )}
        </div>

        {/* Bottom Note */}
        <p style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: "1.25rem" }}>
          A confirmation email has been sent to your inbox
        </p>
      </div>
    </div>
  );
}