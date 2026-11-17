// 2026-11-16 — SearchFilterList: a searchable list that filters items
// live as you type. Uses useState for the query and the filtered list.
import { useState } from "react";

const ITEMS = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Vite",
  "Git",
];

export default function SearchFilterList() {
  const [query, setQuery] = useState("");

  const filtered = ITEMS.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search technologies..."
        aria-label="Search list"
      />
      {filtered.length === 0 ? (
        <p>No matches for &quot;{query}&quot;.</p>
      ) : (
        <ul>
          {filtered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <p>
        {filtered.length} of {ITEMS.length} shown
      </p>
    </div>
  );
}
