// 2026-11-22 — FetchList: fetches a list of users (simulated async fetch)
// and shows a loading state, an error state with retry, and the loaded list.
import { useEffect, useState } from "react";

// Pretend API payload; the setTimeout in useEffect simulates network latency.
const MOCK_USERS = [
  { id: 1, name: "Ava Chen", role: "Designer" },
  { id: 2, name: "Liam Patel", role: "Developer" },
  { id: 3, name: "Maya Singh", role: "Product Manager" },
];

export default function FetchList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (cancelled) return;
      // Simulate a flaky first request so the error + retry path is real.
      if (attempt === 0) {
        setError("Could not load users. Check your connection and try again.");
        setLoading(false);
        return;
      }
      setUsers(MOCK_USERS);
      setLoading(false);
    }, 900);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [attempt]);

  if (loading) return <p>Loading users…</p>;

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => setAttempt((n) => n + 1)}>Retry</button>
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.role}
        </li>
      ))}
    </ul>
  );
}
