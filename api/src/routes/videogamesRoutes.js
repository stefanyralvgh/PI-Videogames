const express = require('express');
const router = express.Router();
const { getAllVideogames, getVideogamesById, getVideogamesByName, postVideogames } = require('../controllers/controllerVideogames');



router.get("/name", getVideogamesByName);
router.get("/:id", getVideogamesById);
router.get("/", getAllVideogames);
router.post("/", postVideogames);


module.exports = router;