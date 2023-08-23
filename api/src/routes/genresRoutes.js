const express = require('express');
const router = express.Router();
const { getGenres } = require('../controllers/controllerGenres');



router.get("/", getGenres);


module.exports = router;