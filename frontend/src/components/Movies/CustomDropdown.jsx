import React, { useState, useEffect, useRef } from "react";

export default function CustomDropdown({ label, name, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div ref={containerRef} className="relative min-w-[120px] text-white">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-background border border-white/10 rounded-full px-3 py-2 text-left hover:ring-2 hover:ring-ocean focus:outline-none focus:ring-2 focus:ring-ocean transition"
      >
        <span className="block truncate">{selectedOption ? selectedOption.label : label}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-background border border-white/10 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {options.map((option) => (
            <li
              key={option.value || option.label}
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                onChange({ target: { name, value: option.value } });
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onChange({ target: { name, value: option.value } });
                  setOpen(false);
                }
              }}
              tabIndex={0}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-ocean hover:text-white ${
                value === option.value ? "font-semibold bg-ocean text-white" : "text-gray-300"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
