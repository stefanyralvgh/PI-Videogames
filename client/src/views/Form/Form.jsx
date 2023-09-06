import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoGame } from "../../redux/actions/actions";
import axios from "axios";

export default function Form(props) {
  const dispatch = useDispatch();
  const [selectedGenreIds, setSelectedGenreIds] = useState([]);


  const [errors, setErrors] = useState({ form: "Must complete the form" });

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    release_date: "",
    rating: "0",
    genres: [], // Inicializa genres como un arreglo vacío
  platforms: [],
  });

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/videogames")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const platformsList = [];
          const genresList = [];

          for (let i = 0; i < response.data.length; i++) {
            const game = response.data[i];

            if (game.platforms && Array.isArray(game.platforms)) {
              platformsList.push(...game.platforms);
            }

            if (game.Genres && Array.isArray(game.Genres)) {
              genresList.push(...game.Genres.map((genre) => genre.name));
            }
          }

          const uniquePlatforms = [...new Set(platformsList)];
          const uniqueGenres = [...new Set(genresList)];

          setForm((prevForm) => ({
            ...prevForm,
            platforms: uniquePlatforms,
            genres: uniqueGenres,
          }));
        } else {
          console.error("The video game data is not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Couldn't get the videogames", error);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.parentNode.parentNode.id === "genres") {
      const genre = e.target.value;
      const isChecked = e.target.checked;

      if (isChecked) {
        setSelectedGenres((prevGenres) => [...prevGenres, genre]);
      } else {
        setSelectedGenres((prevGenres) =>
          prevGenres.filter((prevGenre) => prevGenre !== genre)
        );
      }
    }

    if (e.target.parentNode.parentNode.id === "platforms") {
      const platform = e.target.name;
      const isChecked = e.target.checked;

      if (isChecked) {
        setSelectedPlatforms((prevPlatforms) => [...prevPlatforms, platform]);
      } else {
        setSelectedPlatforms((prevPlatforms) =>
          prevPlatforms.filter((prevPlatform) => prevPlatform !== platform)
        );
      }
    }

    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Game Name is required";
    } else if (form.name.length < 4) {
      errors.name = "Game Name must have at least 4 characters";
    }
    if (!form.description) {
      errors.description = "Description is required";
    } else if (form.description.length < 8) {
      errors.description = "Description must have at least 8 characters";
    }
    if (!form.rating) {
      errors.rating = "Rating is required";
    } else if (!/^[1-5]$/.test(form.rating)) {
      errors.rating = "Rating must be between 1 and 5";
    }
    return errors;
  };

  // const handleGenreChange = (e) => {
  //   const genre = e.target.value;
  //   const isChecked = e.target.checked;
  
  //   setSelectedGenres((prevGenres) => {
  //     const updatedGenres = new Set(prevGenres);
  
  //     if (isChecked) {
  //       updatedGenres.add(genre);
  //     } else {
  //       updatedGenres.delete(genre);
  //     }
  
  //     return Array.from(updatedGenres); // Convierte el conjunto a un arreglo
  //   });
  // };
  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    const isChecked = e.target.checked;
  
    setSelectedGenreIds((prevGenreIds) => {
      const updatedGenreIds = new Set(prevGenreIds);
  
      if (isChecked) {
        updatedGenreIds.add(genreId);
      } else {
        updatedGenreIds.delete(genreId);
      }
  
      return Array.from(updatedGenreIds); // Convierte el conjunto a un arreglo
    });
  };
  
  
  const handlePlatformChange = (e) => {
    const platform = e.target.name;
    const isChecked = e.target.checked;
  
    setSelectedPlatforms((prevPlatforms) => {
      const updatedPlatforms = new Set(prevPlatforms);
  
      if (isChecked) {
        updatedPlatforms.add(platform);
      } else {
        updatedPlatforms.delete(platform);
      }
  
      return Array.from(updatedPlatforms); // Convierte el conjunto a un arreglo
    });
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validate(form);
  
  //   let checkboxsErrors = [];
  //   if (selectedGenres.length < 1) checkboxsErrors.push("Genres is required");
  //   if (selectedPlatforms.length < 1)
  //     checkboxsErrors.push("Platforms is required");
  //   if (Object.values(errors).length || checkboxsErrors.length) {
  //     return alert(Object.values(errors).concat(checkboxsErrors).join("\n"));
  //   }
  
  //   // Crea un nuevo objeto que contiene los datos del formulario
  //   const newGame = {
  //     name: form.name,
  //     description: form.description,
  //     image: form.image,
  //     release_date: form.release_date,
  //     rating: form.rating,
  //     genres: selectedGenres,     // Utiliza el arreglo de géneros seleccionados
  //     platforms: selectedPlatforms, // Utiliza el arreglo de plataformas seleccionadas
  //   };
  
  //   axios
  //     .post("http://localhost:3001/videogames", newGame)
  //     .then((res) => {
  //       dispatch(addVideoGame(res.data));
  //     })
  //     .catch((error) => {
  //       console.error("Error creating the videogame:", error);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(form);
  
    let checkboxsErrors = [];
    if (selectedGenreIds.length < 1) checkboxsErrors.push("Genres is required");
    if (selectedPlatforms.length < 1)
      checkboxsErrors.push("Platforms is required");
    if (Object.values(errors).length || checkboxsErrors.length) {
      return alert(Object.values(errors).concat(checkboxsErrors).join("\n"));
    }
  
    // Crea un nuevo objeto que contiene los datos del formulario
    const newGame = {
      name: form.name,
      description: form.description,
      image: form.image,
      release_date: form.release_date,
      rating: form.rating,
      genres: selectedGenreIds,     // Utiliza el arreglo de IDs de géneros seleccionados
      platforms: selectedPlatforms, // Utiliza el arreglo de plataformas seleccionadas
    };
  
    axios
      .post("http://localhost:3001/videogames", newGame)
      .then((res) => {
        dispatch(addVideoGame(res.data));
      })
      .catch((error) => {
        console.error("Error creating the videogame:", error);
      });
  };
  
  

  return (
    <>
      <div className="main-add">
        <div className="container-add">
          <h2>CREATE GAME - DETAILS -</h2>
          <div className="div-cont">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <label htmlFor="name" className="title-name">
                <strong>Name: </strong>
              </label>
              <br />
              <input
                className="name"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="description" className="title-name">
                <strong>Description: </strong>
              </label>
              <br />
              <textarea
                className="name"
                name="description"
                placeholder="Description..."
                id="description"
                cols="30"
                rows="3"
              />
              <br />
              <label htmlFor="date" className="title-name">
                <strong>Release Date: </strong>
              </label>
              <label htmlFor="image" className="title-name">
                <strong>Image: </strong>
              </label>
              <br />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                id="image"
                name="image"
              />
              <br />
              <input
                name="release_date"
                className="dt"
                type="date"
                id="date"
                required
              />
              <br />
              <label htmlFor="rating" className="title-name">
                <strong>Rating: </strong>
              </label>
              <br />
              <input
                name="rating"
                className="dt"
                placeholder="Rate from 1 to 5"
                type="tel"
                id="rating"
                maxLength="1"
                autoComplete="off"
              />
              <br />
              <label className="title-name">
                <strong>Genres:</strong>
              </label>
              <div id="genres" className="genres-div">
                {form.genres.map((genre, index) => (
                  <div key={index}>
                    <input
                      name={genre}
                      value={genre}
                      type="checkbox"
                      id={genre}
                      onChange={handleGenreChange}
                      checked={selectedGenres.includes(genre)}
                    />
                    <label htmlFor={genre}>{genre}.</label>
                  </div>
                ))}
              </div>
              <label className="title-name">
                <strong>Platforms: </strong>{" "}
              </label>
              <div id="platforms" className="plat-div">
                {form.platforms.map((platform, index) => (
                  <div key={index}>
                    <input
                      name={platform}
                      type="checkbox"
                      id={platform}
                      onChange={handlePlatformChange}
                      checked={selectedPlatforms.includes(platform)}
                    />
                    <label htmlFor={platform}>{platform}.</label>
                  </div>
                ))}
              </div>
              <br />
              <div className="div-but-form">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
