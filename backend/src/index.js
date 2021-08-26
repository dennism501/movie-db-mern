const express = require("express");
const logger = require("./middleware/logger");
const movieService = require("./services/movie");

const app = express();

app.use(logger);
app.use(require("cors")());
app.use(express.json());

app.get("/api-test", (req, res) => {
  res.send({ message: process.env.API_KEY }).status(200);
});

app.get("/api/movies/latest", async (req, res) => {
  const result = await movieService.getUpcomingMovies();
  res.send(result).status(200);
});

app.listen(3001, () => {
  console.log("Listening on port 3001 🚀");
});
