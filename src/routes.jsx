import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Catalogue from "./pages/Catalogue";
import AnimeDetails from "./pages/AnimeDetails";
import MovieStream from "./pages/MovieStream";
import Stream from "./pages/Stream";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import "./index.css"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
      <Route path="/watch/movie/:id" element={<MovieStream />} />
      <Route path="/watch/:id" element={<Stream />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
}
