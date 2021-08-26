const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/api/movies/latest", movieController.getLatestMovies);
router.get("/api/movies/now-playing");
router.get("/api/movies/popular");
router.get("/api/movies/top-rated");
router.get("/api/movies/top-rated");

router.get("/api-test", (req, res) => {
  res.send({ message: process.env.API_KEY }).status(200);
});

module.exports = router;
