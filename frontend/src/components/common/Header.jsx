import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Bot } from "lucide-react";
import logo from "../../assets/aniocean_logo.png";

function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef();

  // Close modal on ESC
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      inputRef.current?.focus();
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-opacity-25 flex items-center justify-center z-50 mx-4 font-nM"
    >
      <div
        className="flex items-center gap-4 px-4 py-1.5 rounded-xl bg-surface/50 backdrop-blur-md shadow border border-white/10 mx-auto p-6 w-full max-w-md relative"
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <button
          aria-label="Close search"
          onClick={onClose}
          className="absolute top-5 right-4 text-white hover:text-ocean transition"
        >
          <X size={24} />
        </button>
        <div className="flex items-center">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search anime..."
            className="flex items-center my-2 gap-4 px-4 py-1.5 rounded-xl bg-surface/50 backdrop-blur-md shadow border border-white/10 mx-auto text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-ocean"
            // You can add your search handler here
          />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "MOVIES", path: "/movies" },
    { name: "CATALOGUE", path: "/catalogue" },
    { name: "COMMUNITY", path: "/community" },
    { name: "NEWS", path: "/news" },
  ];

  const openSearch = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
  };
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 md:px-8 lg:px-16 font-nM mt-2">
        <div className="w-full container mx-auto sm:px-6 md:px-6 lg:px-8 py-3 flex items-center relative">
          {/* Left: Logo (desktop only) */}
          <Link
            to="/"
            className="hidden lg:flex items-center absolute left-0 top-1/2 -translate-y-1/2"
          >
            <img src={logo} alt="AniOcean Logo" className="w-20 md:w-28 lg:w-32" />
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center gap-8 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-md shadow border border-white/10 mx-auto ">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `text-white hover:text-ocean transition duration-200 ${
                    isActive ? "text-ocean font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Right section (desktop only) */}
          <div className="hidden lg:flex items-center gap-3 absolute right-0 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 border-1 border-white/10 py-1.5 rounded-full bg-background text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean w-full max-w-[160px]"
              />
              <Search
                size={18}
                className="absolute left-3 top-2 text-gray-400"
              />
            </div>
            <button className="p-2 rounded-full bg-background hover:bg-ocean transition">
              <Bot size={20} className="text-white" />
            </button>
            <Link
            to="/signup"
            className="px-4 py-1.5 bg-ocean hover:bg-ocean/80 text-white rounded-full text-sm transition"
          >
            Login
          </Link>

          </div>

          {/* Mobile: Hamburger + Logo + actions */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
                aria-label="Open main menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              {/* Logo (mobile only, centered inside flex gap container) */}
              <Link to="/" className="flex justify-center">
                <img src={logo} alt="AniOcean Logo" className="w-24" />
              </Link>
            </div>
            {/* Right Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={openSearch}
                className="p-2 rounded-full bg-background hover:bg-ocean transition"
                aria-label="Open search popup"
              >
                <Search size={20} className="text-white" />
              </button>
              <button className="p-2 rounded-full bg-background hover:bg-ocean transition">
                <Bot size={20} className="text-white" />
              </button>
                <Link
                  to="/signup"
                  className="px-4 py-1.5 bg-ocean hover:bg-ocean/80 text-white rounded-full text-sm transition"
                >
                  Login
                </Link>


            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Menu (nav items only, no search/chatbot/login) */}
        <div
          className={`md:hidden bg-surface/95 backdrop-blur-lg px-4 pb-4 rounded-b-2xl border-t border-white/10 transition-all duration-600 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100 py-3 visible"
              : "max-h-0 opacity-0 py-0 invisible"
          }`}
          style={{ overflow: "hidden" }}
        >
          <nav className="flex flex-col gap-3 mt-2">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="text-white hover:text-ocean transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Search Modal Popup */}
      <SearchModal isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
