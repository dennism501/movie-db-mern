const { useFetch } = require("../utils/helpers");
const {
  LATEST_MOVIES_URL,
  NOW_PLAYING_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
  POPULAR_MOVIES_URL,
} = require("../utils/Constants");

//TODO: Add error handling
const getLatestMovies = async () => {
  return await useFetch(LATEST_MOVIES_URL);
};

const getNowPlayingMovies = async () => {
  return await useFetch(NOW_PLAYING_MOVIES_URL);
};

const getTopRatedMovies = async () => {
  return await useFetch(TOP_RATED_MOVIES_URL);
};

const getUpcomingMovies = async () => {
  return await useFetch(UPCOMING_MOVIES_URL);
};

const getPopularMovies = async () => {
  return await useFetch(POPULAR_MOVIES_URL);
};
module.exports = {
  getLatestMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularMovies,
};
