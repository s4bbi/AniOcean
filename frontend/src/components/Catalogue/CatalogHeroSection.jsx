import React from "react";
import bg from "../../assets/images/catalog_banner.png";

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
        <h1 className="text-4xl md:text-8xl font-bN leading-tight mb-4">ANIME CATALOGUE</h1>

        {/* Description */}
        <p className="text-gray-300 max-w-xl font-nM text-sm md:text-base mb-6">
          Find anime across genres, studios, and seasons
        </p>

      </div>

     
    </section>
  );
}
