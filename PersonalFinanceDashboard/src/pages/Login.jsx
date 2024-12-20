import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth  } from "../components/auth/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Use context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Call context login
      navigate("/dashboard"); // Redirect on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg bg-white">
        <div className="w-1/2 bg-blue-900 text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-gray-300">Log in to access your account.</p>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Sign In
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Don’t have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
