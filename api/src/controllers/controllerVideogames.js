const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");


function cleanHTML(descriptionHTML) {
  const regex = /<[^>]*>/g;
  const cleanedText = descriptionHTML.replace(regex, '');  
  return cleanedText;
}

const fillDataBase = async () => {
  const url = "https://api.rawg.io/api/games";
  const totalGamesToFetch = 100;
  const gamesPerPage = 20;
  const totalPages = Math.ceil(totalGamesToFetch / gamesPerPage);
  const videogames = [];

  try {
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`${url}?key=${API_KEY}&page=${page}`);
      const videogamesData = response.data.results;
      console.log(`Fetching page ${page}: ${videogamesData.length} games`);

      for (const videogameData of videogamesData) {
        try {
          const currentVideoGameResponse = await axios.get(
            `${url}/${videogameData.id}?key=${API_KEY}`
          );
          const currentVideoGame = currentVideoGameResponse.data;
          let genres = [];
          let platforms = [];

          for (const genre of currentVideoGame.genres) {
            genres.push(genre.id);
          }

          for (const platform of videogameData.platforms) {
            platforms.push(platform.platform.name);
          }

          const videogameInfo = {
            name: videogameData.name,
            description: cleanHTML(currentVideoGame.description) || "Not found",
            image: videogameData.background_image,
            release_date: videogameData.released || "Not found",
            platforms: platforms,
            rating: videogameData.rating,
          };

          const newVideogame = await Videogame.create(videogameInfo);
          newVideogame.setGenres(genres);
        } catch (error) {
          console.error("Error fetching game details:", error);
        }
      }
    }

    console.log("Database filled");
  } catch (error) {
    console.error(error);
  }
};



const getAllVideogames = (req, res) => {
  try {
    Videogame.findAll({
      include: {
        model: Genre,
        through: "videogame_genre",
      },
    }).then((videogames) => res.send(videogames));
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

    const [newVideogame, created] = await Videogame.findOrCreate({
      where: { name: videogameData.name },
      defaults: {
        name: videogameData.name,
        description: videogameData.description,
        platforms: videogameData.platforms,
        image: videogameData.image,
        release_date: videogameData.release_date,
        rating: videogameData.rating,
      },
    });

    if (created || !newVideogame) {
      const genresIds = videogameData.genres;

      if (genresIds && genresIds.length > 0) {
        await newVideogame.setGenres(genresIds);
      }
      res.status(201).json({ ...newVideogame.toJSON(), genres: genresIds });
    } else {
      res
        .status(409)
        .json({ message: "The videogame already exists in the database" });
    }
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
