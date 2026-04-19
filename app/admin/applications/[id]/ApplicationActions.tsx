"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const statuses = ["pending", "approved", "enrolled", "rejected"];

export default function ApplicationActions({ id, currentStatus }: { id: string; currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const updateStatus = async (newStatus: string) => {
    setLoading(true);
    try {
      await fetch(["/api/admin/applications/", id].join(""), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setStatus(newStatus);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 600, marginBottom: "0.5rem" }}>Update Status</p>
      {statuses.map((s) => (
        <button
          key={s}
          onClick={() => updateStatus(s)}
          disabled={loading || s === status}
          style={{
            padding: "0.6rem 1rem",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "1px solid",
            cursor: s === status ? "default" : "pointer",
            fontFamily: "inherit",
            backgroundColor: s === status ? "#722F37" : "white",
            color: s === status ? "white" : "#6b7280",
            borderColor: s === status ? "#722F37" : "#e5e7eb",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {s === status ? `✓ ${s}` : s}
        </button>
      ))}
    </div>
  );
}