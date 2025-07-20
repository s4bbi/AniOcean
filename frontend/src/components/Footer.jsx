import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/aniocean_logo.png";

export default function Footer() {
  return (
    <footer className="bg-background text-white px-6 py-10 font-pR">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        {/* Top Section: Logo + Navigation Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center w-full lg:w-auto pb-10">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="AniOcean Logo" className="w-24 md:w-28 lg:w-32" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-300l">
            <div className="space-y-1">
              <Link to="/about" className="hover:text-[#00AEEF] block">About Us</Link>
            </div>

            <div className="space-y-1">
              <Link to="/faq" className="hover:text-[#00AEEF] block">FAQ</Link>
              <Link to="/contact" className="hover:text-[#00AEEF] block">Contact Support</Link>
            </div>

            <div className="space-y-1">
              <Link to="/terms" className="hover:text-[#00AEEF] block">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-[#00AEEF] block">Privacy Policy</Link>
              <Link to="/dmca" className="hover:text-[#00AEEF] block">DMCA</Link>
            </div>

            <div className="space-y-1">
              <a href="https://discord.gg/your-link" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] block">Join Discord</a>
              <a href="https://reddit.com/r/aniocean" target="_blank" rel="noopener noreferrer" className="hover:text-[#00AEEF] block">Reddit Forum</a>
              <Link to="/suggest" className="hover:text-[#00AEEF] block">Suggest an Anime</Link>
              <Link to="/feedback" className="hover:text-[#00AEEF] block">Give Feedback</Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm">Get updates on new anime drops and features.</p>
          <form className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="bg-[#808083]/90 text-white placeholder-gray-300 px-4 py-2 md:px-6 md:py-4 rounded-full w-full"
            />
            <button
              type="submit"
              className="bg-[#00AEEF] text-white px-4 py-2 md:px-6 md:py-4 rounded-full hover:bg-[#0095cc] transition"
            >
              Subscribe
            </button>
          </form>

        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-400 text-xs pt-6 border-t border-gray-700">
          <p>© 2025 Anime Ocean. All rights reserved.</p>
          <p className="mt-1">
            Disclaimer: This site AnimeOcean does not store any files on its server.
            All contents are provided by non-affiliated third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
