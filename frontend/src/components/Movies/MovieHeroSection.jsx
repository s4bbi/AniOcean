import React from "react";
import { MdPlayArrow, MdAdd } from "react-icons/md";

export default function MovieHeroSection({ movie }) {
  return (
    <section
      className="h-screen w-full bg-cover bg-center text-white px-6 md:px-8 lg:px-16"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%), url(${movie.image})`,
      }}
    >
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto pt-[80px] pb-24 flex flex-col justify-center h-full z-10">
        {/* Trending or badge label */}
        {movie.badge && (
          <div className="mb-2 text-lg text-[#D93036] font-pSB uppercase">
            {movie.badge}
          </div>
        )}

        {/* Movie Title */}
        <h1 className="text-4xl md:text-8xl font-bN leading-tight mb-4">
          {movie.title}
        </h1>

        {/* Tags: genre, type, release info */}
        <div className="flex gap-4 flex-wrap text-sm text-gray-300 mb-4 font-nM">
          {movie.type && (
            <span className="bg-white/10 px-2 py-0.5 rounded-full">
              {movie.type.toUpperCase()}
            </span>
          )}
          {movie.release && (
            <span className="bg-white/10 px-2 py-0.5 rounded-full">
              {movie.release}
            </span>
          )}
          {movie.genre && (
            <span className="bg-white/10 px-2 py-0.5 rounded-full">
              {movie.genre.toUpperCase()}
            </span>
          )}
        </div>

        {/* Description */}
        {movie.description && (
          <p className="text-gray-300 max-w-xl font-nM text-sm md:text-base mb-6">
            {movie.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 md:pt-10">
          <button className="bg-ocean text-white px-8 py-4 rounded-full flex items-center gap-2 text-sm font-nM hover:bg-ocean/90 transition">
            <MdPlayArrow size={20} /> WATCH NOW
          </button>
          <button className="border-2 border-[#00AEEF] text-white px-8 py-4 rounded-full flex items-center gap-2 text-sm font-nM hover:bg-white/10 transition">
            <MdAdd size={20} /> ADD TO WATCHLIST
          </button>
        </div>
      </div>
    </section>
  );
}
