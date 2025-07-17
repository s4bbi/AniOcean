import React, { useEffect, useState } from "react";
import {
  MdHome,
  MdAccessTime,
  MdNewReleases,
  MdWhatshot,
  MdStar,
  MdFavorite,
  MdCalendarToday,
} from "react-icons/md";

const sections = [
  { id: "home", icon: <MdHome size={20} />, label: "Home" },
  { id: "continue-watching", icon: <MdAccessTime size={20} />, label: "Continue Watching" },
  { id: "latest", icon: <MdNewReleases size={20} />, label: "Latest" },
  { id: "trending", icon: <MdWhatshot size={20} />, label: "Trending" },
  { id: "featured", icon: <MdStar size={20} />, label: "Featured" },
  { id: "favourites", icon: <MdFavorite size={20} />, label: "Favourites" },
  { id: "schedule", icon: <MdCalendarToday size={20} />, label: "Schedule" },
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden fixed top-1/2 -translate-y-1/2 left-8 z-50 md:flex md:flex-col gap-5 text-gray-400">
      {sections.map(({ id, icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="relative flex items-center"
          aria-label={id}
        >
          {/* Only icon has group hover */}
          <div
            className={`group relative transition-colors duration-200 ${
              activeSection === id ? "text-ocean" : "text-gray-400"
            }`}
          >
            {icon}

            {/* Tooltip appears only when hovering on icon */}
            <span className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-ocean text-white text-xs font-pL rounded-md px-2 py-1 ml-2 transition whitespace-nowrap z-10">
              {label}
            </span>
          </div>
        </a>
      ))}
    </aside>
  );
}
