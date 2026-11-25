// 2026-11-24 — ProfileCard: a simple profile card UI with a follow toggle.
// Self-contained React component using useState; no external dependencies.

import { useState } from "react";

export default function ProfileCard({ name = "Anmol Manni", role = "Front-End Developer", bio = "Building small React components, one day at a time.", followers = 128 }) {
  const [following, setFollowing] = useState(false);
  const [count, setCount] = useState(followers);

  const toggleFollow = () => {
    setFollowing((prev) => !prev);
    setCount((prev) => (following ? prev - 1 : prev + 1));
  };

  return (
    <div
      style={{
        maxWidth: 320,
        padding: 20,
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          margin: "0 auto 12px",
          borderRadius: "50%",
          background: "#4f46e5",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        {name.charAt(0)}
      </div>
      <h2 style={{ margin: "0 0 4px", fontSize: 20 }}>{name}</h2>
      <p style={{ margin: "0 0 8px", color: "#6b7280", fontSize: 14 }}>{role}</p>
      <p style={{ margin: "0 0 12px", fontSize: 14 }}>{bio}</p>
      <p style={{ margin: "0 0 16px", fontSize: 14 }}>
        <strong>{count}</strong> followers
      </p>
      <button
        onClick={toggleFollow}
        style={{
          padding: "8px 20px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          background: following ? "#e5e7eb" : "#4f46e5",
          color: following ? "#111827" : "#fff",
          fontWeight: 600,
        }}
      >
        {following ? "Following ✓" : "Follow"}
      </button>
    </div>
  );
}
