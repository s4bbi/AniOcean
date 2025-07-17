import React from "react";
import HeroSection from "../components/HeroSection";
import VerticalNav from "../components/VerticalNav";

// import ContinueWatching from "../components/ContinueWatching";
// import LatestReleases from "../components/LatestReleases";
// import TrendingNow from "../components/TrendingNow";
// import AnimeOceanFeatured from "../components/AnimeOceanFeatured";
// import AllTimeFavourites from "../components/AllTimeFavourites";
// import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <main className="relative">
      <VerticalNav />

      <section id="home" className="min-h-screen">
        {/* <ContinueWatching /> */}
        <HeroSection />
      </section>

      <section id="continue-watching" className="min-h-screen">
        {/* <ContinueWatching /> */}
      </section>

      <section id="latest" className="min-h-screen">
        {/* <LatestReleases /> */}
      </section>

      <section id="trending" className="min-h-screen">
        {/* <TrendingNow /> */}
      </section>

      <section id="featured" className="min-h-screen">
        {/* <AnimeOceanFeatured /> */}
      </section>

      <section id="favourites" className="min-h-screen">
        {/* <AllTimeFavourites /> */}
      </section>

      <section id="schedule" className="min-h-screen">
        {/* <Schedule /> */}
      </section>
    </main>
  );
}
