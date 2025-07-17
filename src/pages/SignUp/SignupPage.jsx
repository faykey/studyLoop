import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../Components/SuccessModal";
import Header from "../../Components/LandingPage/Header";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen py-16 bg-green-50 relative z-10">
       
        <div className="absolute bottom-[300px] md:top-[100px] md:left-[80px] left-[10px] w-12 h-12 bg-yellow-300 rounded-full opacity-70 z-0"></div>
        <div className="absolute top-[100px] md:right-40 right-9 w-10 h-10 bg-blue-200 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-[120px] lg:top-[280px] lg:right-[65%] right-[50px] w-12 h-12 bg-green-200 rounded-full opacity-90 md:hidden lg:block z-10"></div>

           {/* Form */}
        <div
          className="bg-white w-[90%] max-w-md rounded-2xl p-8 shadow-xl text-center relative z-10 overflow-hidden"
          style={{
            border: "3px solid hsla(220, 14%, 96%, 1)",
          }}
        >
          
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>

          <div className="text-4xl mb-2">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800">Join AskVault!</h1>
          <p className="text-sm text-gray-600 mb-6">
            Start your learning journey today
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your awesome name"
                className="w-full mt-1 p-3 rounded-xl focus:outline-none placeholder-[hsla(142,71%,45%,1)]"
                style={{
                  backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                }}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 p-3 rounded-xl focus:outline-none placeholder-[hsla(142,71%,45%,1)]"
                style={{
                  backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                }}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 p-3 rounded-xl focus:outline-none placeholder-[hsla(142,71%,45%,1)]"
                style={{
                  backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                }}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm password"
                className="w-full mt-1 mb-2 p-3 rounded-xl focus:outline-none placeholder-[hsla(142,71%,45%,1)]"
                style={{
                  backgroundColor: "hsla(60, 100%, 50%, 0.38)",
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-xl hover:brightness-110 transition"
              style={{
                backgroundColor: "hsla(142, 71%, 45%, 1)",
                boxShadow: "0 4px 6px hsla(88, 100%, 33%, 1)",
              }}
            >
              Create Account 🎯
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By signing up, you agree to our{" "}
            <u className="no-underline">Terms of Service</u> and{" "}
            <u className="no-underline">Privacy Policy</u>.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            No spam, just learning! 🧠
          </p>

          <div className="mt-10 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-700 mb-2">Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="w-full px-10 py-2 rounded-xl font-bold transition-transform duration-200 active:scale-95"
              style={{
                backgroundColor: "hsla(60, 100%, 50%, 0.25)",
                color: "hsla(217, 91%, 60%, 1)",
              }}
            >
              Log In
            </button>
          </div>
        </div>

        {showSuccess && <SuccessModal />}
      </div>
    </>
  );
};

export default SignupPage;
