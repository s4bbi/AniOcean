import React, { useRef } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

export default function LatestReleases({ movies }) {
  const carouselRef = useRef();

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8 max-w-screen bg-background text-white px-6 md:px-18 pb-12 relative">
      <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
        Latest Releases
      </h2>

      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pr-8"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 cursor-pointer"
            >
              <div
                className="relative w-full h-60 rounded-2xl overflow-hidden mb-2 group"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Rating and (optional) tag on hover */}
                <div className="font-pL absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition px-2 py-1 bg-ocean/80 rounded-xl text-white text-xs font-semibold flex items-center justify-between">
                  <span>⭐ {movie.rating ?? "N/A"}</span>
                  {movie.tag && <span>{movie.tag}</span>}
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="w-10 h-10 bg-white/80 text-ocean rounded-full flex items-center justify-center font-bold text-xl">
                    <MdPlayArrow />
                  </button>
                </div>
              </div>

              <p className="text-sm text-center leading-tight text-white truncate font-nM pt-2" title={movie.title}>
                {movie.title}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-ocean hover:bg-ocean/90 text-white p-2 rounded-full shadow transition"
          aria-label="Scroll latest releases right"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
