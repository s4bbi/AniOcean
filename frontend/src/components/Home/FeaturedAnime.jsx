import React from "react";
import { MdPlayArrow, MdAdd } from "react-icons/md";
import bgImg from "../../assets/images/featured.jpg"; // Update this path accordingly

export default function FeaturedAnime() {
  return (
    <section
      id="featured"
      className="relative w-full text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-0" />

      <div className="relative z-10 max-w-screen mx-auto px-6 md:px-18 py-20">
        {/* Section title */}
        <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
          <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
          Anime Ocean Featured this week
        </h2>

        {/* Anime title */}
        <h2 className="text-4xl md:text-6xl font-bN mb-4">GINTAMA</h2>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base max-w-2xl mb-8 font-nM leading-relaxed">
          After a one-year hiatus, Shinpachi Shimura returns to Edo, only to
          stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya
          members, have become completely different characters! Fleeing from the
          Yorozuya headquarters in confusion, Shinpachi finds that all the denizens
          of Edo have undergone impossibly extreme changes in both appearance and
          personality. Most unbelievably, his sister...
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
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
