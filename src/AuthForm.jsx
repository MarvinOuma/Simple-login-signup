import React, { useState } from "react";
import { signup, login } from "./auth";
import { loginWithGoogle } from "./googleAuth";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      alert("Success!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await loginWithGoogle();
      alert("Google login success!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", marginBottom: 10 }}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button onClick={handleGoogle} style={{ width: "100%", marginBottom: 10 }}>
        Continue with Google
      </button>
      <button onClick={() => setIsLogin(!isLogin)} style={{ width: "100%" }}>
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
