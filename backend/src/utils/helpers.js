const fetch = require("node-fetch");

module.exports.useFetch = async (url) => {
  try {
    const api_key = process.env.API_KEY;
    const result = await fetch(`${url}?api_key=${api_key}`);
    const res = await result.json();
    return res;
  } catch (err) {
    console.error(err);
  }
};
