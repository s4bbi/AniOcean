import React from "react";
import HeroSection from "../components/HeroSection";
import VerticalNav from "../components/VerticalNav";
import ContinueWatching from "../components/ContinueWatching";
import LatestEpisodes from "../components/LatestEpisodes";
import TrendingNow from "../components/Trending";
import FeaturedAnime from "../components/FeaturedAnime";
import AllTimeFavourites from "../components/AllTimeFavourites";
import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <main className="relative">
      <VerticalNav />

      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="continue-watching" className="h-full">
        <ContinueWatching />
      </section>

      <section id="latest" className="h-full">
        <LatestEpisodes />
      </section>

      <section id="trending" className="h-full">
        <TrendingNow />
      </section>

      <section id="featured" className="h-full">
        <FeaturedAnime />
      </section>

      <section id="favourites" className="h-full">
        <AllTimeFavourites />
      </section>

      <section id="schedule" className="min-h-screen">
        <Schedule />
      </section>
    </main>
  );
}
