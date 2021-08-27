const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/api/movies/latest", movieController.getLatestMovies);
router.get("/api/movies/now-playing", movieController.getNowPlayingMovies);
router.get("/api/movies/popular", movieController.getPopularMovies);
router.get("/api/movies/top-rated", movieController.getTopRatedMovies);
router.get("/api/movies/upcoming", movieController.getUpcomingMovies);

router.get("/api-test", (req, res) => {
  res.send({ message: process.env.API_KEY }).status(200);
});

module.exports = router;
