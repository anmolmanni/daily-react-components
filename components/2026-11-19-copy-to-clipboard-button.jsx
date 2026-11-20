// 2026-11-19 — CopyToClipboardButton
// A small button that copies a given text to the clipboard and
// briefly shows a "Copied!" confirmation state.
import { useState } from "react";

export default function CopyToClipboardButton({ text = "Hello, GitHub!" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers without clipboard API access.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <code>{text}</code>
      <button onClick={handleCopy} disabled={copied}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
