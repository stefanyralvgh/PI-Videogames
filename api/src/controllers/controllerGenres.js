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


// const fillDataBaseGenres = async () => {
//   const url = "https://api.rawg.io/api/genres";

//   try {
//     const response = await axios.get(
//       `${url}?key=${API_KEY}`
//     );

//     const genresData = response.data.results;
   
//     const genres = [];

//     genresData.forEach((genreData) => {
//       const genreInfo = {
//         id: genreData.id,
//         name: genreData.name              
//       };

//       genres.push(genreInfo);
//     });

      
//     await Genre.bulkCreate(genres);

//     console.log("genres database filled");
//   } 
// catch (error) {
//     console.log(error);
//   }
// };

const fillDataBaseGenres = async () => {
  const url = "https://api.rawg.io/api/genres";
  const genresPerPage = 20; // Cantidad de géneros por página
  let genres = [];

  try {
    let page = 1;
    let response;
    let genresData; // Declarar la variable aquí

    do {
      response = await axios.get(`${url}?key=${API_KEY}&page=${page}`);
      genresData = response.data.results;

      console.log(`Fetching page ${page}: ${genresData.length} genres`);

      genresData.forEach((genreData) => {
        const genreInfo = {
          id: genreData.id,
          name: genreData.name,
        };

        genres.push(genreInfo);
      });

      page++;
    } while (genresData.length === genresPerPage);

    await Genre.bulkCreate(genres);

    console.log("Genres database filled");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    getGenres,
    fillDataBaseGenres
};
