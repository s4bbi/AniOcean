import React from "react";
import { MdPlayArrow } from "react-icons/md";

export default function CatalogGrid({ animeList = [] }) {
  if (!animeList.length) {
    return (
      <div className="text-center text-white/40 py-16 text-sm">
        No anime found. Try adjusting the filters or search.
      </div>
    );
  }

  return (
    <section className="bg-background text-white px-6 md:px-18 pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="cursor-pointer group transition duration-300 ease-in-out"
          >
            {/* Thumbnail */}
            <div
              className="relative h-60 rounded-2xl overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${anime.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Hover Rating + Tag */}
              <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition px-2 py-1 bg-ocean/80 rounded-xl text-white text-xs font-semibold flex items-center justify-between">
                <span>⭐ {anime.rating ?? "N/A"}</span>
                {anime.tag && <span>{anime.tag}</span>}
              </div>

              {/* Hover Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="w-10 h-10 bg-white/80 text-ocean rounded-full flex items-center justify-center font-bold text-xl">
                  <MdPlayArrow />
                </button>
              </div>
            </div>

            {/* Title */}
            <p
              className="text-sm text-center font-nM text-white mt-2 truncate"
              title={anime.title}
            >
              {anime.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
