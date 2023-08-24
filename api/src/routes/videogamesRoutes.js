const express = require('express');
const router = express.Router();
const { getAllVideogames, getVideogamesById, getVideogamesByName, postVideogames } = require('../controllers/controllerVideogames');



router.get("/name", getVideogamesByName);
router.get("/", getAllVideogames);
router.post("/", postVideogames);
router.get("/:id", getVideogamesById);


module.exports = router;