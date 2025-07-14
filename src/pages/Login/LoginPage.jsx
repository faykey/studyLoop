import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/LandingPage/Header";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-green-50 relative py-16 px-4">
         <div className="absolute bottom-[300px] md:top-[100px] md:left-[80px] left-[10px] w-12 h-12 bg-yellow-300 rounded-full opacity-70 z-0"></div>
        <div className="absolute top-[100px] md:right-40 right-9 w-10 h-10 bg-blue-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[120px] lg:top-[280px] lg:right-[65%] right-[50px] w-12 h-12 bg-green-200 rounded-full opacity-90 md:hidden lg:block z-10"></div>
        <div
          className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl relative z-10 overflow-hidden text-center"
          style={{
            border: "4px solid hsla(220, 14%, 96%, 1)",
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>

          <div className="relative z-10">
            <div className="text-4xl mb-2">👋</div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-sm text-gray-600 mb-6">
              Ready to continue your learning streak?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full mt-1 p-3 rounded-xl focus:outline-none text-green-700 font-medium placeholder-[hsla(142,71%,45%,1)]"
                  style={{
                    backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                  }}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full mt-1 p-3 rounded-xl focus:outline-none text-green-700 font-medium placeholder-[hsla(142,71%,45%,1)]"
                  style={{
                    backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-xl transition"
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
                className="text-sm text-blue-600 font-medium no-underline"
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
                className="w-full mt-2 px-10 py-2 rounded-xl font-bold transition-transform duration-200 active:scale-95"
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
    </div>
  );
};

export default LoginPage;
