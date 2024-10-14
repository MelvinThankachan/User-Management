import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white px-6 py-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="input-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          {error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : (
            <p className="text-blue-500 text-sm">
              Password must be at least 6 characters long.
            </p>
          )}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="mt-5 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline text-base"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
