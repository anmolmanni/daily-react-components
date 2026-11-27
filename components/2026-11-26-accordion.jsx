// 2026-11-26 — Accordion: a collapsible FAQ-style accordion.
// Click a heading to expand or collapse its panel; only one panel
// stays open at a time. Built with useState, plain JSX, no deps.
import { useState } from "react";

const ITEMS = [
  {
    title: "What is React?",
    body: "React is a JavaScript library for building user interfaces out of small, reusable components.",
  },
  {
    title: "What are hooks?",
    body: "Hooks like useState and useEffect let function components hold state and run side effects.",
  },
  {
    title: "Why use an accordion?",
    body: "Accordions keep long content tidy by showing one section at a time and hiding the rest until needed.",
  },
  {
    title: "What does this component do?",
    body: "It renders the three questions above and lets you open one answer at a time.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="accordion-item">
            <button
              type="button"
              className="accordion-header"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="accordion-body">{item.body}</div>}
          </div>
        );
      })}
    </div>
  );
}
