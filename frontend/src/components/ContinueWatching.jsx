import React from "react";

const dummyData = [
  {
    id: 1,
    title: "Jujutsu Kaisen",
    image: "",
    currentEp: 5,
    totalEp: 24,
  },
  {
    id: 2,
    title: "Attack on Titan",
    image: "",
    currentEp: 12,
    totalEp: 25,
  },
  {
    id: 3,
    title: "Chainsaw Man",
    image: "",
    currentEp: 3,
    totalEp: 12,
  },
];

export default function ContinueWatching() {
  return (
    <section id="continue-watching" className="max-w-7xl mx-auto py-12 bg-background text-white px-6 sm:px-0">
        <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
            Continue Watching
        </h2>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {dummyData.map(anime => (
          <div
            key={anime.id}
            className="min-w-[180px] max-w-[180px] bg-surface/60 backdrop-blur rounded-lg p-2 shadow-md"
          >
            <img
              src={anime.image}
              alt={anime.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-sm font-semibold truncate">{anime.title}</h3>
            <p className="text-xs text-gray-400 mb-1">
              EP {anime.currentEp} of {anime.totalEp}
            </p>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-ocean"
                style={{
                  width: `${(anime.currentEp / anime.totalEp) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
