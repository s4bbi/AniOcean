import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import luffy from "../assets/luffy-bg.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0C10] via-[#0F1A26] to-[#071E2C] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow Balls */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] opacity-50 z-0"></div>

      {/* Container */}
      <div className="z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10 md:mt-0 md:items-stretch">

        {/* Form Section */}
        <div className="w-full md:w-2/5 h-[570px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-md text-white font-pR flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
            Welcome Back, Pirate!
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-white/10 rounded-md placeholder-gray-300 focus:outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 bg-white/10 rounded-md placeholder-gray-300 focus:outline-none"
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#00AEEF]" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-[#00AEEF] hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#00AEEF] hover:bg-[#0095cc] rounded-md transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#00AEEF] underline">
                Signup
              </Link>
            </p>
          </form>
        </div>

        {/* Manga Image Section */}
        <div className="w-full md:w-1/2 max-w-md h-[570px] hidden md:flex items-center">
          <img
            src={luffy}
            alt="Luffy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
