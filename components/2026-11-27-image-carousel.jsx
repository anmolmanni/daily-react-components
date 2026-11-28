// 2026-11-27 — ImageCarousel: a small, self-contained carousel that cycles
// through slides with previous/next buttons and clickable dot indicators.
// Uses useState; plain JSX, no external dependencies (slides are CSS
// gradients so the component works standalone).
import { useState } from "react";

const SLIDES = [
  { title: "Mountains", caption: "Peaks at sunrise", bg: "linear-gradient(135deg, #4facfe, #00f2fe)" },
  { title: "Forest", caption: "A quiet walk in the woods", bg: "linear-gradient(135deg, #43e97b, #38f9d7)" },
  { title: "Desert", caption: "Golden dunes at dusk", bg: "linear-gradient(135deg, #fa709a, #fee140)" },
  { title: "Ocean", caption: "Waves on the shore", bg: "linear-gradient(135deg, #30cfd0, #330867)" },
];

const buttonStyle = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  fontSize: 14,
};

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  const goTo = (i) => setIndex((i + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const slide = SLIDES[index];

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto", fontFamily: "sans-serif" }}>
      <div
        style={{
          height: 220,
          borderRadius: 12,
          background: slide.bg,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 28 }}>{slide.title}</h3>
        <p style={{ margin: "8px 0 0", opacity: 0.9 }}>{slide.caption}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
        <button onClick={prev} aria-label="Previous slide" style={buttonStyle}>
          ‹ Prev
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: i === index ? "#333" : "#ccc",
              }}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next slide" style={buttonStyle}>
          Next ›
        </button>
      </div>

      <p style={{ textAlign: "center", color: "#666", fontSize: 14 }}>
        Slide {index + 1} of {total}
      </p>
    </div>
  );
}
