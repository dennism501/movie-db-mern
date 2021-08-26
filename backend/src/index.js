const express = require("express");
const logger = require("./middleware/logger");
const router = require("./routes/routes");

const app = express();

app.use(router);
app.use(logger);
app.use(require("cors")());
app.use(express.json());

app.listen(3001, () => {
  console.log("Listening on port 3001 🚀");
});
