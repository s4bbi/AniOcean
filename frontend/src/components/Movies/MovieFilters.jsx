import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import CustomDropdown from "./CustomDropdown";

export default function MovieFilters({ filter, onChange }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section className="mb-8 bg-background font-pL">
      <div className="container max-w-full px-4 sm:px-6 lg:px-16">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap items-center gap-4">
          {/* Search with icon */}
          <div className="relative flex-grow min-w-[200px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              name="search"
              placeholder="Search your favs"
              value={filter.search}
              onChange={onChange}
              className="w-full pl-10 pr-3 py-2 rounded-full bg-background text-white placeholder-gray-400 border border-white focus:outline-none focus:ring-1 focus:ring-[#00AEEF] transition"
            />
          </div>

          {/* Filters */}
          {renderFilters(filter, onChange)}

          {/* Apply Button */}
          {/* Uncomment if needed:
          <button
            className="bg-ocean px-6 py-2 rounded-full font-semibold hover:bg-ocean/80 transition flex-shrink-0"
            onClick={onApply}
          >
            Apply
          </button>
          */}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-wrap items-center gap-4">
          {/* Search with icon */}
          <div className="relative flex-grow min-w-[200px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              name="search"
              placeholder="Search your favs"
              value={filter.search}
              onChange={onChange}
              className="w-full pl-10 pr-3 py-2 rounded-full bg-background text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-ocean transition"
            />
          </div>

          {/* Filters Button */}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 bg-ocean px-4 py-2 rounded-full font-semibold text-white hover:bg-ocean/80 transition whitespace-nowrap"
            aria-expanded={mobileFiltersOpen}
            aria-controls="mobile-filter-panel"
          >
            <FaSlidersH />
            Filters
          </button>
        </div>

        {/* Mobile Filters Panel with animation */}
        <div
          id="mobile-filter-panel"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileFiltersOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4">
            {renderFilters(filter, onChange)}
          </div>
        </div>
      </div>
    </section>
  );
}

// Filters section reused by both layouts
function renderFilters(filter, onChange) {
  return (
    <>
      <CustomDropdown
        label="Genre"
        name="genre"
        value={filter.genre}
        onChange={onChange}
        options={[
          { label: "All Genres", value: "" },
          { label: "Action", value: "Action" },
          { label: "Adventure", value: "Adventure" },
          { label: "Drama", value: "Drama" },
          // Add more genres here
        ]}
      />

      <CustomDropdown
        label="Language"
        name="lang"
        value={filter.lang}
        onChange={onChange}
        options={[
          { label: "All Languages", value: "" },
          { label: "Japanese", value: "Japanese" },
          { label: "English", value: "English" },
          // Add more languages here
        ]}
      />

      <CustomDropdown
        label="Year"
        name="year"
        value={filter.year}
        onChange={onChange}
        options={[
          { label: "All Years", value: "" },
          { label: "2025", value: "2025" },
          { label: "2024", value: "2024" },
          // Add more years here
        ]}
      />

      <CustomDropdown
        label="Rating"
        name="rating"
        value={filter.rating}
        onChange={onChange}
        options={[
          { label: "All Ratings", value: "" },
          { label: "9+", value: "9" },
          { label: "8+", value: "8" },
          // Add more ratings here
        ]}
      />

      <CustomDropdown
        label="Sort By"
        name="sortBy"
        value={filter.sortBy}
        onChange={onChange}
        options={[
          { label: "Default", value: "" },
          { label: "Title", value: "title" },
          { label: "Rating", value: "rating" },
          { label: "Year", value: "year" },
        ]}
      />
    </>
  );
}