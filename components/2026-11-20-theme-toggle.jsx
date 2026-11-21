// 2026-11-20 — ThemeToggle: a light/dark theme switcher that persists
// the choice in localStorage and applies it to the document root.
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return window.localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // storage unavailable (private mode) — theme still applies for this session
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      aria-pressed={dark}
      style={{
        padding: "8px 16px",
        borderRadius: "999px",
        border: "1px solid #888",
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#222",
        cursor: "pointer",
      }}
    >
      {dark ? "🌙 Switch to light mode" : "☀️ Switch to dark mode"}
    </button>
  );
}
