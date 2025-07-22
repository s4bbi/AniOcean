import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

/**
 * Reusable custom dropdown with polished styling and animation.
 *
 * Props:
 * - label: Default placeholder text
 * - name: Input name (e.g. "genre")
 * - value: Currently selected value
 * - onChange: (e) => void
 * - options: Array of strings or objects { label, value, disabled? }
 */
export default function CustomDropdown({ label, name, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Normalize options
  const normalized = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const selected = normalized.find((opt) => opt.value === value);

  return (
    <div className="relative min-w-[130px]" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex justify-between items-center 
          bg-background text-white text-sm font-pL
          px-4 py-2 rounded-full shadow transition
          border border-white/40
          hover:bg-white/90
          focus:outline-none focus:ring-2 focus:ring-ocean`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{selected?.label || label}</span>
        <MdKeyboardArrowDown className={`ml-2 text-lg transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full z-20 mt-2 w-full rounded-xl bg-background text-white shadow-xl border border-white/30 py-1 max-h-60 overflow-auto animate-fadein"
        >
          {normalized.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              tabIndex={opt.disabled ? -1 : 0}
              onClick={() => {
                if (!opt.disabled) {
                  onChange({ target: { name, value: opt.value } });
                  setOpen(false);
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !opt.disabled) {
                  onChange({ target: { name, value: opt.value } });
                  setOpen(false);
                }
              }}
              className={`px-4 py-2 text-sm cursor-pointer select-none rounded-lg transition
                ${
                  opt.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : value === opt.value
                    ? "bg-ocean text-white font-semibold"
                    : "hover:bg-ocean/10 text-white"
                }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
