import trendingImg from "../assets/images/ds.jpg";
import jk0Img from "../assets/images/jjk0.webp";
import kaiju8Img from "../assets/images/kaiju8.png";
import mugenTrainImg from "../assets/images/dsmugen.png";

export const trendingMovie = {
  title: "DEMON SLAYER: INFINITY CASTLE",
  release: "Sept 12, 2025",
  genre: "ACTION/ADVENTURE",
  description: "The Demon Slayer Corps plunge into Infinity Castle to defeat Muzan. However...",
  image: trendingImg,
  badge: "UPCOMING",
  type: "MOVIE"
};

export const recentlyWatched = [
  { id: 1, title: "Jujutsu Kaisen 0", image: jk0Img },
  // ...
];

export const latestReleases = [
  { id: 1, title: "Kaiju No.8: Movie", rating: 8.2, image: kaiju8Img },
  // ...
];

export const allMovies = [
  { id: 1, title: "DEMON SLAYER: MUGEN TRAIN", image: mugenTrainImg, rating: 8.6, year: 2020, genre: "Action", lang: "Japanese", badge: "MOVIE" },
  // ...
];
