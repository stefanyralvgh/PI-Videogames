const express = require('express');
const router = express.Router();
const { getAllVideogames, getVideogamesById, getVideogamesByName, postVideogames } = require('../controllers/controllerVideogames');



router.get("/videogames", getAllVideogames);
router.get("/videogames/:id", getVideogamesById);
router.get("/videogames/name", getVideogamesByName);
router.post("/videogames", postVideogames);


module.exports = router;