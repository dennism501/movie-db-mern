const fetch = require("node-fetch");
const {
  LATEST_MOVIES_URL,
  NOW_PLAYING_MOVIES_URL,
} = require("../utils/Constants");

const getLatestMovies = async () => {
  try {
    const api_key = process.env.API_KEY;
    const result = await fetch(`${LATEST_MOVIES_URL}?api_key=${api_key}`);
    const res = await result.json();
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getNowPlayingMovies = async () => {
  try {
    const api_key = process.env.API_KEY;
    const result = await fetch(`${NOW_PLAYING_MOVIES_URL}?api_key=${api_key}`);
    const res = await result.json();
    return res;
  } catch (err) {
    console.error(err);
  }
};
module.exports = { getLatestMovies, getNowPlayingMovies };
