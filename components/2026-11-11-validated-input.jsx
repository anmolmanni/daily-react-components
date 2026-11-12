// 2026-11-11 — ValidatedInput: a small form with live email + password
// validation. Shows an error message under each field and only enables
// the submit button when both fields are valid.
import { useState } from "react";

export default function ValidatedInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError =
    email.length === 0
      ? ""
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "Enter a valid email address.";
  const passwordError =
    password.length === 0
      ? ""
      : password.length >= 8
        ? ""
        : "Password must be at least 8 characters.";

  const isValid = emailError === "" && passwordError === "" && email !== "" && password !== "";

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "8px", maxWidth: "280px" }}>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {emailError && <p style={{ color: "red", margin: 0 }}>{emailError}</p>}

      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {passwordError && <p style={{ color: "red", margin: 0 }}>{passwordError}</p>}

      <button type="submit" disabled={!isValid}>
        Sign up
      </button>
      {submitted && <p>Welcome aboard, {email}!</p>}
    </form>
  );
}
