const express = require('express');
const router = express.Router();
const { getGenres } = require('../controllers/controllerGenres');



router.get("/genres", getGenres);


module.exports = router;