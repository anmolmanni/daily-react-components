// 2026-11-25 — Stopwatch
// A small stopwatch: start, pause, reset, and record lap times.
import { useState, useEffect, useRef } from "react";

function format(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${minutes}:${seconds}.${centiseconds}`;
}

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const startedAt = useRef(null);
  const base = useRef(0);

  useEffect(() => {
    if (!running) return;
    startedAt.current = Date.now();
    const id = setInterval(() => {
      setElapsed(base.current + (Date.now() - startedAt.current));
    }, 10);
    return () => clearInterval(id);
  }, [running]);

  function handleStartPause() {
    if (running) {
      base.current = elapsed;
      setRunning(false);
    } else {
      setRunning(true);
    }
  }

  function handleReset() {
    setRunning(false);
    base.current = 0;
    setElapsed(0);
    setLaps([]);
  }

  function handleLap() {
    if (running) setLaps((prev) => [...prev, elapsed]);
  }

  return (
    <div>
      <p style={{ fontSize: "32px", fontFamily: "monospace" }}>
        {format(elapsed)}
      </p>
      <button onClick={handleStartPause}>
        {running ? "Pause" : "Start"}
      </button>{" "}
      <button onClick={handleLap} disabled={!running}>
        Lap
      </button>{" "}
      <button onClick={handleReset}>Reset</button>
      {laps.length > 0 && (
        <ol>
          {laps.map((lap, i) => (
            <li key={i}>
              Lap {i + 1}: {format(lap)}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
