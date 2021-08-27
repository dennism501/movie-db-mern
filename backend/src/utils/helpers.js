const fetch = require("node-fetch");

module.exports.useFetch = async (url) => {
  try {
    const api_key = process.env.API_KEY;
    const result = await fetch(`${url}?api_key=${"api_key"}`);
    console.log(result.ok);

    if (!result.ok) {
      return await result.json();
    }
    return await result.json();
  } catch (err) {
    console.error(err);
  }
};
