import React, { useState, useEffect } from "react";
import MovieHeroSection from "../components/Movies/MovieHeroSection";
import RecentlyWatched from "../components/common/RecentlyWatched";
import LatestReleases from "../components/Movies/LatestReleases";
import MovieFilters from "../components/Movies/MovieFilters";
import MovieGrid from "../components/Movies/MovieGrid";
import {
  trendingMovie,
  recentlyWatched,
  latestReleases,
  allMovies,
} from "../data/moviesData";
import VerticalMoviesNav from "../components/Movies/VerticalMoviesNav";

export default function MoviesPage() {
  const [filter, setFilter] = useState({
    genre: "",
    lang: "",
    year: "",
    rating: "",
    sortBy: "",
    search: "",
  });

  const [filtered, setFiltered] = useState(allMovies);

  const handleInputChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    let result = allMovies;

    if (filter.search) {
      result = result.filter((m) =>
        m.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    if (filter.genre) {
      result = result.filter((m) => m.genre === filter.genre);
    }
    if (filter.lang) {
      result = result.filter((m) => m.lang === filter.lang);
    }
    if (filter.year) {
      result = result.filter((m) => m.year.toString() === filter.year);
    }
    if (filter.rating) {
      result = result.filter((m) => m.rating >= parseFloat(filter.rating));
    }

    if (filter.sortBy) {
      result = [...result].sort((a, b) => {
        if (filter.sortBy === "title") return a.title.localeCompare(b.title);
        if (filter.sortBy === "rating") return b.rating - a.rating;
        if (filter.sortBy === "year") return b.year - a.year;
        return 0;
      });
    }

    setFiltered(result);
  };

  // Could run applyFilters on filter change automatically:
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <main className="relative">
      <VerticalMoviesNav />

      <section id="home" className="min-h-screen">
        <MovieHeroSection movie={trendingMovie} />
      </section>

      <section id="continue-watching" className="h-full">
        <RecentlyWatched movies={recentlyWatched} />
      </section>
      <section id="latest" className="h-full">
        <LatestReleases movies={latestReleases} />
      </section>
      <section id="Search" className="h-full">
        <MovieFilters
          filter={filter}
          onChange={handleInputChange}
          onApply={applyFilters}
        />
      </section>
      <section id="featured" className="min-h-screen">
        <MovieGrid movies={filtered} />
      </section>
      
      
    </main>
  );
}
