import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdPlayArrow } from "react-icons/md";

// Jikan API for anime covers (free, no auth):
const API_URL = "https://api.jikan.moe/v4/anime?limit=8&order_by=popularity";

export default function LatestReleases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setMovies(
            data.data.map((item) => ({
              id: item.mal_id,
              title: item.title,
              image: item.images?.jpg?.large_image_url || item.images?.jpg?.image_url,
            }))
          );
        }
      })
      .catch(() => {
        setMovies([
          { id: 1, title: "Kaiju No. 8", image: "https://cdn.vox-cdn.com/thumbor/I_2ss211f26T32H3-S2-s_tMPWE=/0x0:1920x1080/1200x800/filters:focal(807x379:1113x685)/cdn.vox-cdn.com/uploads/chorus_image/image/73003293/kaiju_no_8_kv_2.0.jpg" },
          { id: 2, title: "My Hero Academia", image: "https://m.media-amazon.com/images/M/MV5BNmQ5YzA2ODYtY2Y0Zi00YTc3LWI0ZTMtM2JhYjU2OTI4ZTVkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg" },
          { id: 3, title: "Gundam Seed Freedom", image: "https://images.kinorium.com/movie/poster/2988182/w1500_50337837.jpg" },
          { id: 4, title: "The War of the Rohirrim", image: "https://m.media-amazon.com/images/M/MV5BNGQ0Y2JjMGUtZTg4MC00Y2UxLWFkY2MtYjMyY2RkODQyMWVlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" },
          { id: 5, title: "Solo Leveling", image: "https://m.media-amazon.com/images/M/MV5BYzhmZTI5YjktZWQ4MC00ZDAaLTk3MWMtNzVlMDI5ZDI1NGE0XkEyXkFqcGdeQXVyMTEyOTY3NDY@._V1_.jpg" },
          { id: 6, title: "Frieren: Beyond Journey's End", image: "https://m.media-amazon.com/images/M/MV5BMjYyYWI4ODItYjQwYy00MmMxLWJiNDMtMWQzMWM3N2QyNzg3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" },
        ]);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 w-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-6 bg-ocean rounded" />
        <h2 className="text-2xl font-bold text-white">Latest Releases</h2>
      </div>
      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {movies.map((movie,idx) => (
            <div key={`${movie.id}-${idx}`} className="flex-shrink-0 w-32 sm:w-36 md:w-40 group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#23242B]">
                <img
                  src={movie.image}
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-44 sm:h-52 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with play icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-10 h-10 bg-white/80 text-blue-600 rounded-full flex items-center justify-center">
                    <MdPlayArrow size={22} />
                  </button>
                </div>
              </div>
              <p className="text-white text-center mt-3 font-semibold text-xs sm:text-sm truncate">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-ocean text-white hover:bg-ocean/90 transition shadow-lg">
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
} 