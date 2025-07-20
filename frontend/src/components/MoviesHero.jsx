import React, { useState, useEffect } from "react";
import { FaPlay, FaPlus, FaCalendarAlt } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import slide1 from "../assets/images/slider_1.jpg";
import slide2 from "../assets/images/slider_2.jpg";
import slide3 from "../assets/images/slider_3.jpg";
import slide4 from "../assets/images/slider_4.jpg";

const heroSlides = [
  {
    title: "DEMON SLAYER: INFINITY CASTLE",
    tag: "#1 Trending now",
    status: "UPCOMING",
    date: "Sept 12, 2025",
    type: "MOVIE",
    genres: "ACTION/ADVENTURE",
    subDub: "SUB/DUB",
    description:
      "The Demon Slayer Corps plunge into Infinity Castle to defeat Muzan. However, the remaining Hashiras and other Demon Slayers face off against the Twelve Kizuki first.",
    backgroundImage: slide1,
  },
  {
    title: "JUJUTSU KAISEN 0",
    tag: "#2 Trending now",
    status: "AVAILABLE",
    date: "Aug 10, 2024",
    type: "MOVIE",
    genres: "ACTION/SUPERNATURAL",
    subDub: "SUB/DUB",
    description: "Yuta Okkotsu enrolls in Jujutsu High to control his curse and fight evil spirits.",
    backgroundImage: slide2,
  },
  {
    title: "ONE PIECE FILM: RED",
    tag: "#3 Trending now",
    status: "NEW RELEASE",
    date: "July 20, 2024",
    type: "MOVIE",
    genres: "ADVENTURE/COMEDY",
    subDub: "SUB/DUB",
    description: "Luffy and the Straw Hats attend a music festival that turns into a wild adventure.",
    backgroundImage: slide3,
  },
  {
    title: "BLACK CLOVER: SWORD OF THE WIZARD KING",
    tag: "#4 Fan favourite",
    status: "STREAMING",
    date: "Jun 16, 2023",
    type: "MOVIE",
    genres: "FANTASY/SHONEN",
    subDub: "SUB/DUB",
    description: "Asta faces powerful ex-Wizard Kings who return to challenge the Clover Kingdom.",
    backgroundImage: slide4,
  },
];

export default function MoviesHero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => setSlide(idx);
  const prevSlide = () => setSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((prev) => (prev + 1) % heroSlides.length);

  const heroData = heroSlides[slide];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:px-2 min-h-[420px] h-[90vw] max-h-[100vh] md:min-h-[480px] md:h-[40vw] md:max-h-[60vh] lg:min-h-[600px] lg:h-[32vw] lg:max-h-[50vh] text-white overflow-hidden shadow-lg">
      {/* Slides */}
      {heroSlides.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${slide === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img
            src={item.backgroundImage}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="relative z-10 px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 md:pt-0 pb-6 sm:pb-8 flex flex-col justify-end h-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-4 sm:mx-6 md:ml-16 lg:ml-24 md:p-0 -translate-y-14 sm:-translate-y-12 md:-translate-y-6 lg:-translate-y-20 xl:-translate-y-24">
            <p className="text-red-500 font-bold text-sm sm:text-lg mb-2">{item.tag}</p>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight sm:tracking-normal mb-4 leading-tight break-normal">
              {item.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300 mb-4">
              <span className="font-semibold text-yellow-400">{item.status}</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt /> {item.date}
              </span>
              <span className="font-semibold">{item.type}</span>
              <span>{item.genres}</span>
              <span>{item.subDub}</span>
            </div>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {item.description}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-full font-semibold transition">
                <FaPlay />
                <span>WATCH NOW</span>
              </button>
              <button className="flex items-center gap-2 bg-gray-700/60 hover:bg-gray-700/90 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-full font-semibold transition border border-gray-600">
                <FaPlus />
                <span>ADD TO WATCHLIST</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Slider Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border-2 border-white/50 text-white/80 hover:bg-white/10 transition">
        <FiChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border-2 border-white/50 text-white/80 hover:bg-white/10 transition">
        <FiChevronRight size={24} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${slide === idx ? "bg-blue-500" : "bg-gray-400/60"}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 