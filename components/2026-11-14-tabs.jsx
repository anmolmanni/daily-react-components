// 2026-11-14 — Tabs: a small tabbed interface.
// Click a tab to switch the active panel. Uses useState to track
// the active tab. Plain JSX, no dependencies beyond React.
import { useState } from "react";

const TABS = [
  { id: "overview", label: "Overview", content: "This is the overview panel. It shows a short summary." },
  { id: "details", label: "Details", content: "This is the details panel. Extra information lives here." },
  { id: "settings", label: "Settings", content: "This is the settings panel. Toggles and options would go here." },
];

export default function Tabs() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const activeTab = TABS.find((tab) => tab.id === activeId);

  return (
    <div>
      <div role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid #ccc" }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === activeId}
            onClick={() => setActiveId(tab.id)}
            style={{
              padding: "8px 16px",
              border: "none",
              borderBottom: tab.id === activeId ? "2px solid #2563eb" : "2px solid transparent",
              background: "none",
              fontWeight: tab.id === activeId ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" style={{ padding: 16 }}>
        {activeTab.content}
      </div>
    </div>
  );
}
