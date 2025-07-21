import React from "react";
import { ChevronRight, Play, Plus } from "lucide-react";
import bg from "../../assets/images/hero_banner.jpg"; // replace with your actual image
import { MdPlayArrow, MdAdd } from "react-icons/md";


export default function HeroSection() {
  return (
    <section
        className="h-screen w-full bg-cover bg-center text-white px-6 md:px-8 lg:px-16 "
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%), url(${bg})`,
        }}
    >
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto pt-[80px] pb-24 flex flex-col justify-center h-full z-10 ">
        <div className="mb-2 text-lg text-[#D93036] font-pSB">#1 Trending now</div>
        <h1 className="text-4xl md:text-8xl font-bN leading-tight mb-4">ONE PIECE</h1>

        {/* Tags */}
        <div className="flex gap-4 flex-wrap text-sm text-gray-300 mb-4 font-nM">
          <span className="bg-white/10 px-2 py-0.5 rounded-full">ONGOING</span>
          <span className="bg-white/10 px-2 py-0.5 rounded-full">TV</span>
          <span className="bg-white/10 px-2 py-0.5 rounded-full">EP 1135</span>
          <span className="bg-white/10 px-2 py-0.5 rounded-full">ADVENTURE/FANTASY</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-xl font-nM text-sm md:text-base mb-6">
          One Piece is a legendary Japanese anime series created by Eiichiro Oda
          that follows the epic journey of Monkey D. Luffy, a cheerful and fearless
          boy with rubber powers, as he sails across dangerous seas in search of
          the ultimate treasure known as the One Piece to become the King of the Pirates.
        </p>

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
