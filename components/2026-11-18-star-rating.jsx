// 2026-11-18 — StarRating: an interactive 5-star rating picker.
// Click a star to set the rating; hovering previews a rating.
// Uses useState only, plain JSX, no external dependencies.
import { useState } from "react";

export default function StarRating({ maxStars = 5, onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const active = hover || rating;

  function handleClick(value) {
    setRating(value);
    if (onRate) onRate(value);
  }

  return (
    <div>
      <div role="radiogroup" aria-label="Rate this">
        {Array.from({ length: maxStars }, (_, i) => {
          const value = i + 1;
          const filled = value <= active;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={value === rating}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: filled ? "#f5a623" : "#ccc",
                padding: "0 2px",
              }}
            >
              ★
            </button>
          );
        })}
      </div>
      <p>
        {rating > 0
          ? `You rated this ${rating} out of ${maxStars} star${rating > 1 ? "s" : ""}.`
          : "Click a star to rate."}
      </p>
      {rating > 0 && (
        <button type="button" onClick={() => setRating(0)}>
          Clear rating
        </button>
      )}
    </div>
  );
}
