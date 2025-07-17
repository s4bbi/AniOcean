import React, { useRef } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const latestAnime = [
  {
    title: "Toilet-Bound Hanako-kun Season 2 Part 2",
    img: "/path/to/image1.jpg",
    rating: 8.1,
    tag: "TV",
  },
  {
    title: "Gachiakuta",
    img: "/path/to/image2.jpg",
    rating: 7.6,
    tag: "TV",
  },
  {
    title: "DAN DA DAN Season 2",
    img: "/path/to/image3.jpg",
    rating: 8.6,
    tag: "TV",
  },
  {
    title: "The Demon Hunter Season 2",
    img: "/path/to/image4.jpg",
    rating: 7.3,
    tag: "TV",
  },
  {
    title: "Call of the Night Season 2",
    img: "/path/to/image5.jpg",
    rating: 7.9,
    tag: "TV",
  },
  {
    title: "Rascal Does Not Dream of Santa Claus",
    img: "/pth/to/image6.jpg",
    rating: 8.2,
    tag: "TV",
  },
];

export default function LatestEpisodes() {
  const carouselRef = useRef();

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="latest" className="max-w-7xl mx-auto py-12 bg-background text-white px-6 sm:px-0 relative font-nM">
      {/* Section Heading */}
      <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
        Latest Episodes
      </h2>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pr-8"
        >
          {latestAnime.map((anime, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56"
            >
              {/* Poster */}
              <div
                className="relative w-full h-60 rounded-2xl overflow-hidden mb-2 group"
                style={{
                  backgroundImage: `url(${anime.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Rating and Tag on Hover */}
                {anime.rating && anime.tag && (
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition px-2 py-1 bg-ocean/80 rounded-xl text-white text-xs font-semibold flex items-center justify-between">
                    <span>⭐ {anime.rating}</span>
                    <span>{anime.tag}</span>
                  </div>
                )}

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="w-10 h-10 bg-white/80 text-ocean rounded-full flex items-center justify-center font-bold text-xl">
                    <MdPlayArrow />
                  </button>
                </div>
              </div>

              {/* Title */}
              <p className="text-sm text-center leading-tight text-white">
                {anime.title}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-ocean hover:bg-ocean/90 text-white p-2 rounded-full shadow transition"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
