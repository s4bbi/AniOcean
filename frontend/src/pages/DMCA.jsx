import React from "react";
import { ChevronRight, Play, Plus } from "lucide-react";
import bg from "../assets/images/dmca_banner.png"; // replace with your actual image
import { MdPlayArrow, MdAdd } from "react-icons/md";
import dmcaPolicy from "../data/DMCA.jsx"


export default function TermsOfService() {
  return (
    <section className="text-white">
      {/* Banner */}
      <div
        className="w-full bg-cover bg-center px-6 md:px-8 lg:px-16 text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%), url(${bg})`,
        }}
      >
        <div className="max-w-7xl mx-auto pt-24 pb-12">
          <h1 className="text-4xl md:text-8xl font-bN leading-tight shadow-md">
            DMCA
          </h1>
          <p className="text-gray-300 max-w-xl font-pR text-sm md:text-base">
            Last updated July 20th, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bmax-w-screen py-12 bg-background text-white px-6 md:px-18 space-y-16">
        {dmcaPolicy.map(({ title, content }) => (
          <div key={title} className="space-y-4">
            <h2 className="text-2xl font-pM flex items-center gap-3">
              <span className="w-1 h-6 bg-ocean rounded-sm"></span>
              {title}
            </h2>
            <p className="font-nM text-[#BFBFBF] leading-relaxed ml-4">{content}</p>
            <hr className="border-gray-700 my-6" />
          </div>
        ))}
      </div>
    </section>
  );
}
