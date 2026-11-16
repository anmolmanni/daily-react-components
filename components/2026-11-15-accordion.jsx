// 2026-11-15 — Accordion: a small collapsible FAQ-style accordion.
// Click a section header to expand or collapse it. Only one section
// stays open at a time. Uses useState to track the open section.
// Plain JSX, no dependencies beyond React.
import { useState } from "react";

const SECTIONS = [
  {
    id: "what",
    title: "What is an accordion?",
    body: "An accordion is a list of sections where only one section is expanded at a time, keeping long content compact.",
  },
  {
    id: "how",
    title: "How does it work?",
    body: "Clicking a header toggles that section open. Clicking the open header again collapses it, leaving all sections closed.",
  },
  {
    id: "why",
    title: "Why use one?",
    body: "Accordions help organize FAQs, settings, and long pages so readers can scan the headings and open only what they need.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(SECTIONS[0].id);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, overflow: "hidden" }}>
      {SECTIONS.map((section) => {
        const isOpen = section.id === openId;
        return (
          <div key={section.id} style={{ borderBottom: "1px solid #eee" }}>
            <button
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : section.id)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 16px",
                border: "none",
                background: isOpen ? "#f3f4f6" : "none",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {section.title}
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div style={{ padding: "4px 16px 16px" }}>{section.body}</div>}
          </div>
        );
      })}
    </div>
  );
}
