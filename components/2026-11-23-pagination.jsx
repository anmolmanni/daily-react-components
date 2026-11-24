// 2026-11-23 — Pagination: a paginated list with prev/next buttons and
// numbered page controls. Pure React, no external dependencies.
import { useState } from "react";

const ITEMS = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);
const PAGE_SIZE = 6;

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = ITEMS.slice(start, start + PAGE_SIZE);

  const goTo = (next) => setPage(Math.min(Math.max(next, 1), totalPages));

  return (
    <div>
      <ul>
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => goTo(page - 1)} disabled={page === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goTo(i + 1)}
            disabled={page === i + 1}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => goTo(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
}
