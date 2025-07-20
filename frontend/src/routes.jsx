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
import News from "./pages/News";
import "./index.css"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DMCA from "./pages/DMCA";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
      <Route path="/watch/movie/:id" element={<MovieStream />} />
      <Route path="/watch/:id" element={<Stream />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/community" element={<Community />} />
      <Route path="/news" element={<News />} />
      <Route path="/tos" element={<TermsOfService />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/dmca" element={<DMCA />} />
    </Routes>
  );
}
