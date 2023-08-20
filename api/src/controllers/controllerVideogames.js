const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const {Videogame} = require("../db");


const getAllVideogames = (req, res) => {
  try {
    Videogame.findAll().then((videogames) => res.send(videogames));
  } catch (error) {
    res.send(error);
  }
};

const fillDataBase = async () => {
  const url = "https://api.rawg.io/api/games";

  try {
    const response = await axios.get(
      `${url}?key=${API_KEY}`
    );

    const videogamesData = response.data.results;
   
    const videogames = [];

    let idCounter = 0;

    videogamesData.forEach((videogameData) => {
      const videogameInfo = {
        id: idCounter++,
        name: videogameData.name,
        description: videogameData.description ? videogameData.description : "Not found",
        image: videogameData.background_image,
        release_date: videogameData.released ? videogameData.released : "Not found",
        platforms: videogameData.platforms,
        rating: videogameData.rating,
        
      };

      videogames.push(videogameInfo);
    });

      
    await Videogame.bulkCreate(videogames);

    console.log("database filled");
  } 
catch (error) {
    console.log(error);
  }
};

const getVideogamesById = (req, res) => {
  console.log("videogamesById");
};

const getVideogamesByName = (req, res) => {
  console.log("videogamesByName");
};

const postVideogames = (req, res) => {
  console.log("postVideogames");
};

module.exports = {
  getAllVideogames,
  getVideogamesById,
  getVideogamesByName,
  postVideogames,
  fillDataBase,
};
