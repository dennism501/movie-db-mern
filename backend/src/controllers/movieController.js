const movieService = require("../services/movieService");

//TODO: Add error handling

const getLatestMovies = async (req, res) => {
  const latestMovies = await movieService.getLatestMovies();
  res.send(latestMovies).status(200);
};

const getNowPlayingMovies = async (req, res) => {
  const nowPlayingMovies = await movieService.getNowPlayingMovies();
  res.send(nowPlayingMovies).status(200);
};

const getPopularMovies = async (req, res) => {
  const popularMovies = await movieService.getPopularMovies();
  res.send(popularMovies).status(200);
};

const getTopRatedMovies = async (req, res) => {
  const topRatedMovies = await movieService.getTopRatedMovies();
  res.send(topRatedMovies).status(200);
};

const getUpcomingMovies = async (req, res) => {
  const topRatedMovies = await movieService.getUpcomingMovies();
  res.send(topRatedMovies).status(200);
};

module.exports = {
  getLatestMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
};
