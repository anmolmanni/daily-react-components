// 2026-11-21 — Toast: a small notification that pops up when triggered
// and auto-dismisses after 3 seconds (or when the ✕ is clicked).
// Uses useState for the visible toast and useEffect for the auto-dismiss timer.
import { useState, useEffect } from "react";

export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (message) => setToast({ id: Date.now(), message });

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => showToast("Saved successfully!")}>
        Show toast
      </button>
      <button
        onClick={() => showToast("Something went wrong.")}
        style={{ marginLeft: 8 }}
      >
        Show error toast
      </button>

      {toast && (
        <div
          key={toast.id}
          role="status"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            background: "#222",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          {toast.message}
          <button
            onClick={() => setToast(null)}
            aria-label="Dismiss"
            style={{
              marginLeft: 12,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
