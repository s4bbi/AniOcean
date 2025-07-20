import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import luffy from "../assets/luffy-bg.png"; // Your Luffy image

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0C10] via-[#0F1A26] to-[#071E2C] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Glowing background balls */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00AEEF] rounded-full blur-[120px] opacity-50 z-0"></div>

      {/* Content Container */}
      <div className="z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:items-stretch mt-10">

        {/* Signup Form */}
        <div className="w-full md:w-2/5 h-[570px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-md text-white font-pR flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-pM text-center mb-6">
            Even Luffy had to sign up once!
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-300 focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-300 focus:outline-none"
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree to the{" "}
                <Link to="/terms" className="text-[#00AEEF] underline">
                  Terms of Service
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#00AEEF] hover:bg-[#0095cc] rounded-md transition"
            >
              Signup
            </button>

            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00AEEF] underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Manga Image */}
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
