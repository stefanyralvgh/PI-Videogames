const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");



const fillDataBase = async () => {
  const url = "https://api.rawg.io/api/games";
  const totalGamesToFetch = 100;
  const gamesPerPage = 20;
  const totalPages = Math.ceil(totalGamesToFetch / gamesPerPage);
  const videogames = [];
  let idCounter = 0;

  try {
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`${url}?key=${API_KEY}&page=${page}`);

      const videogamesData = response.data.results;
      console.log(`Fetching page ${page}: ${videogamesData.length} games`);

      videogamesData.forEach((videogameData) => {
        const videogameInfo = {
          id: idCounter++,
          name: videogameData.name,
          description: videogameData.description
            ? videogameData.description
            : "Not found",
          image: videogameData.background_image,
          release_date: videogameData.released
            ? videogameData.released
            : "Not found",
          platforms: videogameData.platforms,
          rating: videogameData.rating,
        };

        videogames.push(videogameInfo);
      });
    }

    await Videogame.bulkCreate(videogames);

    console.log("Database filled");
  } catch (error) {
    console.error(error);
  }
};

const getAllVideogames = (req, res) => {
  try {
    Videogame.findAll().then((videogames) => res.send(videogames));
  } catch (error) {
    res.send(error);
  }
};

const getVideogamesById = (req, res) => {
  const { id } = req.params;

  try {
    const videogameId = id;

    Videogame.findByPk(videogameId, {
      include: [Genre],
    }).then((videogame) => {
      videogame
        ? res.send(videogame)
        : res.status(404).send("Videogame not found");
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVideogamesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const videogame = await Videogame.findAndCountAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: [Genre],
      limit: 15,
    });

    videogame.count > 0
      ? res.send(videogame)
      : res.status(404).send("No videogames found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const postVideogames = async (req, res) => {
  try {
    const videogameData = req.body;
    const genresIds = videogameData.genres;

    const [newVideogame, created] = await Videogame.findOrCreate({
      where: { name: videogameData.name },
      defaults: videogameData,
    });

    if (created || !newVideogame) {
      if (genresIds && genresIds.length > 0) {
        await newVideogame.setGenres(genresIds);
      }
    }

    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVideogames,
  getVideogamesById,
  getVideogamesByName,
  postVideogames,
  fillDataBase,
};
