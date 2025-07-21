import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FiSearch, FiTrash2 } from "react-icons/fi";
import heroBanner from '../assets/images/hero_banner.jpg';
import featured from '../assets/images/featured.jpg';

// --- Hero Slider Fake Data ---
const heroSlides = [
  {
    id: 1,
    title: "JUJUTSU KAISEN 0",
    subtitle: "Movie",
    image: heroBanner,
  },
  {
    id: 2,
    title: "FEATURED ANIME",
    subtitle: "Series",
    image: featured,
  },
];

const filters = [
  { label: "FORMAT", options: ["All", "Movie", "TV"] },
  { label: "GENRE", options: ["All", "Action", "Adventure", "Fantasy"] },
  { label: "LANGUAGE", options: ["All", "Japanese", "English"] },
  { label: "YEAR", options: ["All", "2023", "2022", "2021"] },
  { label: "RATING", options: ["All", "8+", "7+", "6+"] },
  { label: "SORT BY", options: ["Default", "Rating", "Year"] },
  { label: "STUDIO", options: ["All", "MAPPA", "Toei", "Ufotable"] },
];

const fetchMockAnime = async (count = 15) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    title: `Anime Title ${i + 1}`,
    image: `https://placewaifu.com/image/300/400?${i}`,
    type: "MOVIE",
    rating: parseFloat((7 + Math.random() * 2).toFixed(1)),
    year: 2021 + (i % 3),
  }));
};

export default function Catalogue() {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    fetchMockAnime(20).then((data) => {
      setAnimeList(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (label, value) => {
    setSelectedFilters((prev) => ({ ...prev, [label]: value }));
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setSearch(searchInput);
  };

  
  // Filtered and sorted anime
  let filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting logic
  const sortBy = selectedFilters["SORT BY"] || "Default";
  if (sortBy === "Rating") {
    filteredAnime = [...filteredAnime].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Year") {
    filteredAnime = [...filteredAnime].sort((a, b) => b.year - a.year);
  }

  // Pagination logic (must be after filteredAnime is defined)
  const totalPages = Math.ceil(filteredAnime.length / cardsPerPage);
  const paginatedAnime = filteredAnime.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  return (
    <div className="bg-[#181A20] min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="relative w-full max-w-7xl mx-auto mt-2 mb-8 rounded-3xl overflow-hidden shadow-lg min-h-[400px] md:min-h-[400px] lg:min-h-[480px] flex items-center justify-center">
          {heroSlides.map((item, idx) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${slide === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bN text-white mb-6 drop-shadow-lg tracking-wide">
                  {item.title}
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-2 font-pSB drop-shadow">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
          {/* Slider dots (dot indicator) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full border-2 ${slide === idx ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-blue-500'} inline-block`}
                style={{ display: heroSlides.length === 1 ? 'none' : 'inline-block' }}
              />
            ))}
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-[#23242B] py-6 px-4 md:px-12 rounded-2xl shadow-lg mb-8 max-w-7xl mx-auto">
          {/* Search Row */}
          <form className="flex items-stretch gap-2 mb-6 w-full" onSubmit={handleSearch} autoComplete="off">
            <div className="flex flex-grow items-center bg-[#181A20] rounded-full overflow-hidden border border-[#3a3b3c] focus-within:ring-2 focus-within:ring-blue-500 transition">
              <span className="pl-3 text-gray-400">
                <FiSearch size={18} />
              </span>
              <input
                type="text"
                placeholder="Search your fav anime..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e); }}
                className="flex-1 px-2 py-1 bg-transparent text-white focus:outline-none text-base min-w-0"
                aria-label="Search Anime"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-1 rounded-full shadow-md transition font-pM text-sm ml-2 min-w-[90px] md:min-w-[160px] max-w-[200px] flex-shrink-0">SEARCH</button>
            <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-1 rounded-full shadow-md transition font-pM text-sm ml-2 min-w-[90px] md:min-w-[160px] max-w-[200px] flex items-center gap-2 flex-shrink-0" aria-label="Clear All" onClick={() => { setSearchInput(""); setSearch(""); setSelectedFilters({}); }}>
              <FiTrash2 size={18} />
              CLEAR ALL
            </button>
          </form>
          {/* Filter/Sort Dropdowns Row + Clear All for mobile */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 w-full items-end">
            {filters.map((filter) => (
              <div key={filter.label} className="flex flex-col items-start min-w-0">
                <label className="text-xs font-pM text-[#b0b3b8] mb-1 pl-2 uppercase tracking-wide">{filter.label}</label>
                <select
                  className="bg-[#e5e7eb] text-[#181A20] px-3 py-2 rounded-full border-none focus:ring-2 focus:ring-blue-500 font-semibold text-sm min-w-0 w-full shadow-sm"
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
            {/* Remove any extra clear all button here */}
          </div>
        </div>

        {/* Anime Cards Grid */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 pb-16">
          {loading ? (
            <div className="col-span-full text-center text-white text-lg">Loading...</div>
          ) : filteredAnime.length === 0 ? (
            <div className="col-span-full text-center text-white text-lg">No anime found.</div>
          ) : (
            filteredAnime.map((anime) => (
              <div key={anime.id} className="flex flex-col items-center">
                {/* Card Image with overlay */}
                <div className="relative w-28 sm:w-32 md:w-32 lg:w-36 xl:w-40 h-40 md:h-44 lg:h-48 xl:h-52 rounded-3xl overflow-hidden group shadow-lg bg-[#23242B]">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Rating and Tag only visible on hover, no blue background */}
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-xl text-white text-xs font-nM flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>⭐ {anime.rating}</span>
                    <span>{anime.type}</span>
                  </div>
                  {/* Play button overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button className="w-10 h-10 bg-white/80 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                      <MdPlayArrow />
                    </button>
                  </div>
                </div>
                {/* Title below card */}
                <p className="text-sm text-center leading-tight text-white mt-2 w-28 sm:w-32 md:w-32 lg:w-36 xl:w-40 truncate font-nM">
                  {anime.title}
                </p>
              </div>
            ))
          )}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pb-10 mt-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`font-pM text-lg px-2 md:px-3 py-1 text-white ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}
              aria-label="Previous Page"
              style={{ background: 'none', borderRadius: 0 }}
            >
              {'<'}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center font-pM text-lg border-2 ${page === currentPage ? 'bg-blue-500 text-white border-blue-500' : 'bg-[#23242B] text-white border-[#23242B] hover:bg-blue-500 hover:text-white'} transition-all duration-150 rounded-full`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`font-pM text-lg px-2 md:px-3 py-1 text-white ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-500'}`}
              aria-label="Next Page"
              style={{ background: 'none', borderRadius: 0 }}
            >
              {'>'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}