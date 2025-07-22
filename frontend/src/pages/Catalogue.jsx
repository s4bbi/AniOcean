import React, { useState } from "react";
import CatalogHero from "../components/Catalogue/CatalogHeroSection";
import CatalogFilters from "../components/Catalogue/CatalogFilters";
import CatalogGrid from "../components/Catalogue/CatalogGrid";
import Pagination from "../components/Catalogue/Pagination";

export default function CataloguePage() {
  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    year: "",
    rating: "",
    language: "",
    format: "",
    studio: "",
    sortBy: "",
  });

  const [filteredMovies, setFilteredMovies] = useState([]); // Mock this for now
  const [allMovies] = useState([]); // Replace with real data
  const [page, setPage] = useState(1);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    const results = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(filters.search.toLowerCase())
    );
    setFilteredMovies(results);
  };

  const handleClear = () => {
    setFilters({
      search: "",
      genre: "",
      year: "",
      rating: "",
      language: "",
      format: "",
      studio: "",
      sortBy: "",
    });
    setFilteredMovies([]);
  };

  return (
    <main className="bg-background text-white">
      <CatalogHero />
      <CatalogFilters
        filter={filters}
        onChange={handleFilterChange}
        onApply={handleApplyFilters}
        onClear={handleClear}
      />
      <CatalogGrid movies={filteredMovies.length ? filteredMovies : allMovies} />
      <Pagination current={page} setCurrent={setPage} />
    </main>
  );
}
