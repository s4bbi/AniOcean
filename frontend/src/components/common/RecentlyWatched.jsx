import React from "react";

export default function RecentlyWatched({ movies }) {
  return (
    <section className="max-w-7xl py-12 bg-background text-white px-6 md:px-18">
      <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
        Recently Watched
      </h2>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[280px] bg-surface/60 backdrop-blur p-2 shadow-md overflow-hidden"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-44 object-cover rounded-3xl mb-2"
            />
            <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
            {/* You can add any additional info here if needed */}
          </div>
        ))}
      </div>
    </section>
  );
}
