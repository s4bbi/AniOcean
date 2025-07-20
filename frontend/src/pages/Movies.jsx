import React from "react";
import VerticalNav from "../components/VerticalNav";
import MoviesHero from "../components/MoviesHero";
import RecentlyWatched from "../components/RecentlyWatched";
import LatestReleases from "../components/LatestReleases";
import MoviesExplorer from "../components/MoviesExplorer";

export default function Movies() {
  return (
    <div className="bg-[#181A20] min-h-screen w-full relative overflow-x-hidden">
      {/* VerticalNav floats and overlaps hero and page */}
      <VerticalNav />
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-7xl px-0 md:px-4 lg:px-8">
          {/* Hero section with negative left margin to overlap under nav on large screens */}
          <section id="movies-hero" className="relative z-10 mt-0 md:mt-4">
            <MoviesHero />
          </section>
          <section id="recently-watched" className="w-full">
            <RecentlyWatched />
          </section>
          <section id="latest-releases" className="w-full">
            <LatestReleases />
          </section>
          <section id="movies-explorer" className="w-full">
            <MoviesExplorer />
          </section>
        </div>
      </main>
    </div>
  );
}
