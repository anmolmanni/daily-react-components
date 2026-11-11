// 2026-11-10 — ToggleSwitch: a simple on/off toggle switch built with useState.
import { useState } from "react";

export default function ToggleSwitch({ label = "Notifications", defaultOn = false }) {
  const [isOn, setIsOn] = useState(defaultOn);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={label}
      onClick={() => setIsOn((prev) => !prev)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "999px",
        background: isOn ? "#d1fae5" : "#f3f4f6",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      <span
        style={{
          width: "36px",
          height: "20px",
          borderRadius: "999px",
          background: isOn ? "#16a34a" : "#9ca3af",
          position: "relative",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: isOn ? "18px" : "2px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s",
          }}
        />
      </span>
      {label}: {isOn ? "On" : "Off"}
    </button>
  );
}
