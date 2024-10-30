// src/components/TestAuth.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function TestAuth() {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Logged in successfully!");
    } catch (error) {
      alert("Failed to log in: " + error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    alert("Logged out successfully!");
  };

  return (
    <div>
      <h2>Test Authentication</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default TestAuth;
