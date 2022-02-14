const express = require("express");
const router = express.Router();
const PlaylistController = require("../controller/PlaylistController");

router.get("/get_music_by_city_name", PlaylistController.get_music_by_city_name);


module.exports = router;
