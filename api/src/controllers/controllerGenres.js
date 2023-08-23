const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const {Genre} = require("../db");


const getGenres = (req, res) => {
 
  try {
    Genre.findAll().then((genres) => res.send(genres));
  } catch (error) {
    res.send(error);
  }
};


const fillDataBaseGenres = async () => {
  const url = "https://api.rawg.io/api/genres";

  try {
    const response = await axios.get(
      `${url}?key=${API_KEY}`
    );

    const genresData = response.data.results;
   
    const genres = [];

    let idCounter = 0;

    genresData.forEach((genreData) => {
      const genreInfo = {
        id: idCounter++,
        name: genreData.name              
      };

      genres.push(genreInfo);
    });

      
    await Genre.bulkCreate(genres);

    console.log("genres database filled");
  } 
catch (error) {
    console.log(error);
  }
};




module.exports = {
    getGenres,
    fillDataBaseGenres
};
