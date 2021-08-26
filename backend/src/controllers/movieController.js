const movieService = require("../services/movieService");

const getLatestMovies = async (req, res, next) => {
  const latestMovies = await movieService.getLatestMovies();
  res.send(latestMovies).status(200);
};

module.exports = { getLatestMovies };
