import React from "react";
import HeroSection from "../components/Home/HeroSection";
import VerticalNav from "../components/Home/VerticalHomeNav";
import RecentlyWatched from "../components/common/RecentlyWatched";
import LatestEpisodes from "../components/Home/LatestEpisodes";
import TrendingNow from "../components/Home/Trending";
import FeaturedAnime from "../components/Home/FeaturedAnime";
import AllTimeFavourites from "../components/Home/AllTimeFavourites";
import Schedule from "../components/Home/Schedule";
import {
  recentlyWatched,
} from "../data/moviesData";

export default function Home() {
  return (
    <main className="relative">
      <VerticalNav />

      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>

      <section id="continue-watching" className="h-full">
        <RecentlyWatched movies={recentlyWatched} />
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
