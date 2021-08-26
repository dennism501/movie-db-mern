const express = require("express");

const router = express.Router();

router.get("/api/movies/latest");
router.get("/api/movies/now-playing");
router.get("/api/movies/popular");
router.get("/api/movies/top-rated");
router.get("/api/movies/top-rated");

module.exports = router;
