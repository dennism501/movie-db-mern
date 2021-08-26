const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);
app.use(require("cors")());
app.use(express.json());

app.get("/api-test", (req, res) => {
  debugger;
  res.send({ message: process.env.API_KEY }).status(200);
});

app.listen(3001, () => {
  console.log("Listening on port 3001 🚀");
});
