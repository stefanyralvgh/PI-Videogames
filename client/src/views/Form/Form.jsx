import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoGame } from "../../redux/actions/actions";
import {
  FormTitle,
  FormFirst,
  FormSecond,
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormCheckbox,
  FormTextarea,
  FormButton,
  CheckboxContainer,
  LabelCheckbox
} from "./FormStyles"; 
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
    genres: [],
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
              genresList.push(
                ...game.Genres.map((genre) => [genre.id, genre.name])
              );
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
    if (e.target.name === "image") {
      const imageUrl = e.target.value;

      setForm((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
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

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    const isChecked = e.target.checked;
    console.log(genreId);
    setSelectedGenreIds((prevGenreIds) => {
      const updatedGenreIds = new Set(prevGenreIds);

      if (isChecked) {
        updatedGenreIds.add(genreId);
      } else {
        updatedGenreIds.delete(genreId);
      }

      return Array.from(updatedGenreIds);
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

      return Array.from(updatedPlatforms);
    });
  };

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

    const newGame = {
      name: form.name,
      description: form.description,
      image: form.image,
      release_date: form.release_date,
      rating: form.rating,
      genres: selectedGenreIds,
      platforms: selectedPlatforms,
    };

    axios
      .post("http://localhost:3001/videogames", newGame)
      .then((res) => {
        dispatch(addVideoGame(res.data));
        window.alert("Game created successfully!");
      })
      .catch((error) => {
        console.error("Error creating the videogame:", error);
        window.alert("Error creating the game. Please try again.");
      });
  };

  return (
    <div>
      <FormTitle>CREATE NEW VIDEOGAME </FormTitle>
    <FormContainer>
      
      
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <FormFirst>
          <FormGroup>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput
              className="name"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="description">Description:</FormLabel>
            <FormTextarea
              className="name"
              name="description"
              placeholder="Description..."
              id="description"
              cols="30"
              rows="3"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="date">Release Date:</FormLabel>
            <FormInput
              name="release_date"
              className="dt"
              type="date"
              id="date"
              required
            />
          </FormGroup>
        </FormFirst>
        <FormSecond>
          <FormGroup>
            <FormLabel htmlFor="rating">Rating:</FormLabel>
            <FormInput
              name="rating"
              className="dt"
              placeholder="Rate from 1 to 5"
              type="tel"
              id="rating"
              maxLength="1"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="image">Image:</FormLabel>
            <FormInput
              type="text"
              placeholder="Insert image URL"
              id="image"
              name="image"
            />
            {form.image && <img src={form.image} alt="Game Cover" />}
          </FormGroup>
        </FormSecond>
        <br />
        <div>
        <div>
          <FormLabel htmlFor="image">Genres:</FormLabel>
          <br />
          <CheckboxContainer id="genres">
            {Array.from(new Set(form.genres.map((genre) => genre[1]))).map(
              (genreName, index) => (
                <div key={index}>
                  <input
                    name={genreName}
                    value={form.genres.find((genre) => genre[1] === genreName)[0]}
                    type="checkbox"
                    id={genreName}
                    onChange={handleGenreChange}
                    checked={selectedGenres.includes(genreName)}
                  />
                  <LabelCheckbox htmlFor={genreName}>{genreName}.</LabelCheckbox>
                </div>
              )
            )}
          </CheckboxContainer>
        </div>

        <div>
          <FormLabel className="title-name">
            <strong>Platforms: </strong>{" "}
          </FormLabel>
          <CheckboxContainer id="platforms" className="plat-div">
            {form.platforms.map((platform, index) => (
              <div key={index}>
                <FormInput
                  name={platform}
                  type="checkbox"
                  id={platform}
                  onChange={handlePlatformChange}
                  checked={selectedPlatforms.includes(platform)}
                />
                <LabelCheckbox htmlFor={platform}>{platform}.</LabelCheckbox>
              </div>
            ))}
          </CheckboxContainer>
        </div>
        </div>
        <br />
        <div className="div-but-form">
          <FormButton type="submit">Create</FormButton>
        </div>
      </form>
    </FormContainer>
    </div>
  );
}
