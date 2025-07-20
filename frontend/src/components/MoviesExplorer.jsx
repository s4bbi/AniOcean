import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";

const filters = [
  { label: "GENRE", options: ["All", "Action", "Adventure", "Fantasy", "Comedy", "Drama"] },
  { label: "LANGUAGE", options: ["All", "Japanese", "English"] },
  { label: "YEAR", options: ["All", "2025", "2024", "2023", "2022", "2021", "2020"] },
  { label: "RATING", options: ["All", "9+", "8+", "7+", "6+"] },
  { label: "SORT BY", options: ["Default", "Rating", "Year"] },
];

const fallbackMovies = [
  { id: 1, title: "Fake Movie One", image: "", rating: "8.2", year: 2024 },
  { id: 2, title: "Fake Movie Two", image: "", rating: "7.5", year: 2023 },
  { id: 3, title: "Fake Movie Three", image: "", rating: "9.1", year: 2022 },
  { id: 4, title: "Fake Movie Four", image: "", rating: "6.8", year: 2021 },
  { id: 5, title: "Fake Movie Five", image: "", rating: "7.9", year: 2020 },
  { id: 6, title: "Fake Movie Six", image: "", rating: "8.4", year: 2025 },
  { id: 7, title: "Fake Movie Seven", image: "", rating: "7.0", year: 2024 },
  { id: 8, title: "Fake Movie Eight", image: "", rating: "8.0", year: 2023 },
  { id: 9, title: "Fake Movie Nine", image: "", rating: "9.0", year: 2022 },
  { id: 10, title: "Fake Movie Ten", image: "", rating: "7.3", year: 2021 },
];

export default function MoviesExplorer() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("movies");

  useEffect(() => {
    setMovies(fallbackMovies);
    setLoading(false);
  }, []);

  const handleFilterChange = (label, value) => {
    setSelectedFilters((prev) => ({ ...prev, [label]: value }));
  };

  const handleApply = (e) => e && e.preventDefault();

  let filtered = [...movies];

  const ratingFilter = selectedFilters["RATING"] || "All";
  if (ratingFilter !== "All") {
    const threshold = parseInt(ratingFilter);
    filtered = filtered.filter((m) => parseFloat(m.rating) >= threshold);
  }

  const yearFilter = selectedFilters["YEAR"] || "All";
  if (yearFilter !== "All") {
    filtered = filtered.filter((m) => `${m.year}` === yearFilter);
  }

  const sortBy = selectedFilters["SORT BY"] || "Default";
  if (sortBy === "Rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Year") {
    filtered = [...filtered].sort((a, b) => b.year - a.year);
  }

  const MovieCard = ({ movie }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-48 rounded-2xl overflow-hidden group shadow-lg bg-[#23242B] flex items-center justify-center">
        <span className="text-white text-sm font-bold px-2 text-center">{movie.title}</span>
        <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-blue-600/80 rounded-xl text-white text-xs font-semibold flex items-center justify-between">
          <span>⭐ {movie.rating}</span>
          <span>MOVIE</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <button className="w-10 h-10 bg-white/80 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
            <MdPlayArrow />
          </button>
        </div>
      </div>
      <p className="text-sm text-center leading-tight text-white mt-2 w-28 truncate">
        {movie.title}
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8" id="movies-explorer">
      <div className="bg-[#0F1117] py-6 px-8 rounded-2xl shadow-lg mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-ocean rounded" />
          <h2 className="text-2xl font-bold text-white">Search your favs</h2>
        </div>
        <form className="grid grid-cols-3 md:grid-cols-5 gap-2 items-end" onSubmit={handleApply} autoComplete="off">
          {filters.map((filter) => (
            <div key={filter.label} className="flex flex-col items-start min-w-0">
              <label className="text-[11px] text-[#b0b3b8] mb-1 pl-2 uppercase tracking-wide font-semibold hidden md:block">
                {filter.label}
              </label>
              <select
                className="bg-[#e5e7eb] text-[#181A20] px-3 py-2 rounded-full border-none focus:ring-2 focus:ring-blue-500 font-semibold text-xs md:text-sm min-w-0 w-full shadow-sm"
                value={selectedFilters[filter.label] || filter.options[0]}
                onChange={(e) => handleFilterChange(filter.label, e.target.value)}
              >
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            type="submit"
            className="col-span-3 md:col-span-1 flex items-center justify-center bg-ocean hover:bg-ocean/90 text-white px-6 py-2 rounded-full shadow-md transition font-semibold text-xs md:text-sm mt-2 md:mt-0"
          >
            APPLY
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full pb-16">
        {loading ? (
          <div className="col-span-full text-center text-white text-lg">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full text-center text-white text-lg">No movies found.</div>
        ) : (
          filtered.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex gap-6 mb-6 pl-1 text-lg font-bold uppercase text-gray-400">
          {[
            { key: "ANIME MOVIES", value: "movies" },
            { key: "ORIGINALS", value: "originals" },
            { key: "MANGA ADAPTATION", value: "manga" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`${activeTab === tab.value ? "text-white" : ""}`}
            >
              {tab.key}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full pb-16">
        {filtered.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id + "-tab"} movie={movie} />
        ))}
      </div>
    </div>
  );
}
