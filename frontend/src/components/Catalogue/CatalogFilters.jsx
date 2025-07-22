import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaSlidersH, FaTrash } from "react-icons/fa";
import CustomDropdown from "../common/CustomDropdown"; // Reusable dropdown

const initialState = {
  search: "",
  format: "",
  genre: "",
  language: "",
  year: "",
  rating: "",
  sortBy: "",
  studio: "",
};

export default function CatalogFilters() {
  const [filter, setFilter] = useState(initialState);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClear = () => setFilter(initialState);

  const handleSearch = () => {
    console.log("Apply filters:", filter);
    // Fetch data or filter logic here
  };

  return (
    <section className="w-full bg-background text-white my-8 font-pL">
      <div className="max-w-full mx-auto px-4 md:px-16">
        {/* Search + Action Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
          {/* Search Field */}
          <div className="relative flex-grow w-full md:w-[300px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              name="search"
              placeholder="SEARCH YOUR FAV ANIME"
              value={filter.search}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-background border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-ocean text-sm"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-between gap-6 w-48 px-4 py-2 rounded-full bg-ocean text-white hover:bg-[#00AEEF]/90 transition font-pL text-sm"
          >
            <span> Search </span>
            <FiSearch className="text-xs" />
          </button>

          {/* Clear All Button */}
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition font-pL text-sm"
          >
            Clear All
            <FaTrash className="text-xs" />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF] text-white hover:bg-ocean/90 text-sm font-pL"
            aria-expanded={mobileFiltersOpen}
            aria-controls="filters-mobile-panel"
          >
            <FaSlidersH />
            Filters
          </button>
        </div>

        {/* Dropdown Filters */}
        <div
          id="filters-mobile-panel"
          className={`transition-all duration-300 ease-in-out ${
            mobileFiltersOpen ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 md:mb-0`}
        >
          <div className="flex flex-wrap gap-4 font-pL">
            <CustomDropdown
              label="FORMAT"
              name="format"
              value={filter.format}
              onChange={handleChange}
              options={[
                { label: "TV", value: "TV" },
                { label: "Movie", value: "Movie" },
                { label: "OVA", value: "OVA" },
                { label: "ONA", value: "ONA" },
                { label: "Special", value: "Special" },
              ]}
            />

            <CustomDropdown
              label="GENRE"
              name="genre"
              value={filter.genre}
              onChange={handleChange}
              options={[
                { label: "Action", value: "Action" },
                { label: "Adventure", value: "Adventure" },
                { label: "Drama", value: "Drama" },
                { label: "Fantasy", value: "Fantasy" },
                { label: "Comedy", value: "Comedy" },
              ]}
            />

            <CustomDropdown
              label="LANGUAGE"
              name="language"
              value={filter.language}
              onChange={handleChange}
              options={[
                { label: "Japanese", value: "Japanese" },
                { label: "English", value: "English" },
                { label: "Korean", value: "Korean" },
              ]}
            />

            <CustomDropdown
              label="YEAR"
              name="year"
              value={filter.year}
              onChange={handleChange}
              options={[
                { label: "2025", value: "2025" },
                { label: "2024", value: "2024" },
                { label: "2023", value: "2023" },
              ]}
            />

            <CustomDropdown
              label="RATING"
              name="rating"
              value={filter.rating}
              onChange={handleChange}
              options={[
                { label: "9+", value: "9+" },
                { label: "8+", value: "8+" },
                { label: "7+", value: "7+" },
              ]}
            />

            <CustomDropdown
              label="SORT BY"
              name="sortBy"
              value={filter.sortBy}
              onChange={handleChange}
              options={[
                { label: "Title", value: "Title" },
                { label: "Rating", value: "Rating" },
                { label: "Year", value: "Year" },
              ]}
            />

            <CustomDropdown
              label="STUDIO"
              name="studio"
              value={filter.studio}
              onChange={handleChange}
              options={[
                { label: "MAPPA", value: "MAPPA" },
                { label: "Wit", value: "Wit" },
                { label: "Toei", value: "Toei" },
                { label: "Ufotable", value: "Ufotable" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
