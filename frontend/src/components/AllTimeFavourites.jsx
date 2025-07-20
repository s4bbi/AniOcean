import React, { useRef } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const allTimeFavs = [
  {
    title: "One Piece",
    img: "/assets/images/onepiece.jpg",
    rating: 8.7,
    tag: "TV",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    img: "/assets/images/fma.jpg",
    rating: 9.1,
    tag: "TV",
  },
  {
    title: "Attack on Titan",
    img: "/assets/images/aot.jpg",
    rating: 9.0,
    tag: "TV",
  },
  {
    title: "Death Note",
    img: "/assets/images/deathnote.jpg",
    rating: 8.9,
    tag: "TV",
  },
  {
    title: "Steins;Gate",
    img: "/assets/images/steinsgate.jpg",
    rating: 8.8,
    tag: "TV",
  },
  {
    title: "Naruto: Shippuden",
    img: "/assets/images/naruto.jpg",
    rating: 8.6,
    tag: "TV",
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    img: "/assets/images/demonslayer.jpg",
    rating: 8.5,
    tag: "TV",
  },
  {
    title: "Your Name",
    img: "/assets/images/yourname.jpg",
    rating: 8.4,
    tag: "Movie",
  },
];


export default function AllTimeFavourites() {
  const carouselRef = useRef();

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="latest" className="max-w-screen py-12 bg-background text-white px-6 md:px-18">
      {/* Section Heading */}
      <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
        All Time Favourites
      </h2>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pr-8"
        >
          {allTimeFavs.map((anime, index) => (
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
