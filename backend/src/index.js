const express = require("express");

const app = express();

app.use(require("cors")());
app.use(express.json());

app.get("/api-test", (req, res) => {
  res.send({ message: "Health check" });
});

app.listen(3001, () => {
  console.log("Listening on port 3001 🚀");
});
