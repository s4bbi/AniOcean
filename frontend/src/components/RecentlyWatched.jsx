import React from "react";
import { FaPlay } from "react-icons/fa";
import recent1 from "../assets/images/recent_1.jpg";
import recent2 from "../assets/images/recent_2.jpg";

const recentlyWatchedData = [
  {
    id: 1,
    title: "Jujutsu Kaisen 0",
    image: recent1,
    progress: 75,
  },
  {
    id: 2,
    title: "One Piece Film: Red",
    image: recent2,
    progress: 40,
  },
];

export default function RecentlyWatched() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-6 bg-ocean rounded" />
        <h2 className="text-2xl font-pM text-white">Recently Watched</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {recentlyWatchedData.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-72 md:w-80 group">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-14 h-14 bg-white/80 text-blue-600 rounded-full flex items-center justify-center">
                  <FaPlay size={24} />
                </button>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gray-700">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-white text-center mt-3 font-nM">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 