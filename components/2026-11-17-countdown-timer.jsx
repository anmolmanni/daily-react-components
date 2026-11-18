// 2026-11-17 — CountdownTimer: a small countdown timer with start, pause
// and reset controls. Defaults to 5 minutes; counts down once per second
// and stops at 00:00.
import { useState, useEffect, useRef } from "react";

export default function CountdownTimer({ initialSeconds = 300 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0) setIsRunning(false);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  return (
    <div>
      <h2>{secondsLeft === 0 ? "Time's up!" : display}</h2>
      <button onClick={() => setIsRunning((prev) => !prev)} disabled={secondsLeft === 0}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
