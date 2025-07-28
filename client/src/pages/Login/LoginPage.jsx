// pages/Auth/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/LandingPage/Header";
import { loginUser } from "../../utils/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser(form.email, form.password);

      if (res.token) {
        localStorage.setItem("token", res.token);
        navigate("/home");
      } else {
        throw new Error("Invalid credentials or missing token.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Login failed.");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-green-50 relative py-16 px-4">
        {/* ...background circles... */}
        <div
          className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl relative z-10 overflow-hidden text-center"
          style={{ border: "4px solid hsla(220, 14%, 96%, 1)" }}
        >
          <div className="text-4xl mb-2">👋</div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-sm text-gray-600 mb-6">
            Ready to continue your learning streak?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full mt-1 p-3 rounded-xl focus:outline-none"
                style={{ backgroundColor: "hsla(60, 100%, 50%, 0.38)" }}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full mt-1 p-3 rounded-xl focus:outline-none"
                style={{ backgroundColor: "hsla(60, 100%, 50%, 0.38)" }}
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-xl"
              style={{
                backgroundColor: "hsla(142, 71%, 45%, 1)",
                boxShadow: "0 4px 6px hsla(88, 100%, 33%, 1)",
              }}
            >
              Log In 🚀
            </button>
          </form>

          <div className="mt-4 border-b border-gray-200 pb-4">
            <button
              onClick={() => navigate("/reset-password")}
              className="text-sm text-blue-600 font-medium"
            >
              Forgot your password?
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-700">
              New to{" "}
              <span
                onClick={() => navigate("/ask")}
                className="cursor-pointer font-semibold"
              >
                AskVault?
              </span>
            </p>

            <button
              onClick={() => navigate("/signup")}
              className="w-full mt-2 px-10 py-2 rounded-xl font-bold"
              style={{
                backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                color: "hsla(217, 91%, 60%, 1)",
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
