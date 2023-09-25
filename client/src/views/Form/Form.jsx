import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoGame } from "../../redux/actions/actions";
import {
  FormTitle,
  FormGroup,
  FormButton,
  FormLabel,
  FormTextTarea,
  ErrorMessage,
  FormInput,
  DetailButton,
  FormLabelCheckbox,
  CheckboxContainer,
} from "../Form/FormStyles";
import axios from "axios";

export default function Form() {
  const dispatch = useDispatch();
  const [selectedGenreIds, setSelectedGenreIds] = useState([]);
  const [errors, setErrors] = useState({ form: "Must complete the form" });
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    release_date: "",
    rating: "",
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
      // const genreName = e.target.name;
      // const isChecked = e.target.checked;

      // if (isChecked) {
      //   setSelectedGenres([...selectedGenres, genreName]);
      // } else {
      //   setSelectedGenres(
      //     selectedGenres.filter((genre) => genre !== genreName)
      //   );
      // }
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
    } else if (form.name.length > 15) {
      errors.name = "Game Name must have until 15 characters";
    }
    if (!form.description) {
      errors.description = "Description is required";
    } else if (form.description.length < 8) {
      errors.description = "Description must have at least 8 characters";
    }
    if (!form.image) {
      errors.image = "Image URL is required";
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(form.image)) {
      errors.image = "Invalid image URL";
    }
    if (!form.rating) {
      errors.rating = "Rating is required";
    } else if (!/^(?:[1-5](?:\.\d+)?)$/.test(form.rating)) {
      errors.rating = "Rating must be between 1 and 5";
    }
    if (!form.selectedPlatforms || form.selectedPlatforms.length === 0) {
      errors.platforms = "At least one platform is required";
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
  
      const newForm = {
        ...form,
        selectedPlatforms: Array.from(updatedPlatforms),
      };
  
      setForm(newForm);
      setErrors(validate(newForm)); // Update errors state
  
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
    <>
      <div>
        <div>
        <DetailButton onClick={() => navigate("/home")}>
        🡸
             </DetailButton>
          <FormTitle>CREATE NEW VIDEOGAME </FormTitle>

          <FormGroup>
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <FormLabel htmlFor="name">Name</FormLabel>

              <FormInput
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                autoComplete="off"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <FormLabel htmlFor="description">Description</FormLabel>

              <FormTextTarea
                name="description"
                placeholder="Description..."
                id="description"
                cols="30"
                rows="3"
                style={{ height: "150px" }}
              />
              {errors.description && (
                <ErrorMessage>{errors.description}</ErrorMessage>
              )}
              <FormLabel htmlFor="date">Release Date</FormLabel>

              <FormInput
                name="release_date"
                className="dt"
                type="date"
                id="date"
                required
                style={{ width: "15%" }}
              />
              {errors.release_date && (
                <ErrorMessage>{errors.release_date}</ErrorMessage>
              )}
              <br />
              <FormLabel htmlFor="rating">Rating</FormLabel>
              <br />

              <FormInput
                name="rating"
                className="dt"
                placeholder="Rate from 1 to 5"
                type="tel"
                id="rating"
                autoComplete="off"
                style={{ width: "15%" }}
              />
              {errors.rating && <ErrorMessage>{errors.rating}</ErrorMessage>}
              <br />

              <FormLabel>Image</FormLabel>

              <FormInput
                type="text"
                placeholder="Insert image URL"
                id="image"
                name="image"
              />
              {form.image && (
                <img width="45" height="35" src={form.image} alt="Game Cover" />
              )}
              {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
              <br />
              <FormLabel>Genres</FormLabel>
              <CheckboxContainer>
                {Array.from(new Set(form.genres.map((genre) => genre[1]))).map(
                  (genreName, index) => (
                    <div key={index}>
                      <input
                        name={genreName}
                        value={
                          form.genres.find((genre) => genre[1] === genreName)[0]
                        }
                        type="checkbox"
                        id={genreName}
                        onChange={handleGenreChange}
                        checked={selectedGenres.includes(genreName)}
                      />
                      <FormLabelCheckbox htmlFor={genreName}>
                        {genreName}.
                      </FormLabelCheckbox>
                    </div>
                  )
                )}
              </CheckboxContainer>

              <FormLabel>Platforms</FormLabel>
              <CheckboxContainer>
                {form.platforms.map((platform, index) => (
                  <div key={index}>
                    <input
                      name={platform}
                      type="checkbox"
                      id={platform}
                      onChange={handlePlatformChange}
                      checked={selectedPlatforms.includes(platform)}
                    />
                    <FormLabelCheckbox htmlFor={platform}>
                      {platform}.
                    </FormLabelCheckbox>
                  </div>
                ))}
              </CheckboxContainer>
                {errors.platforms && <ErrorMessage>{errors.platforms}</ErrorMessage>}
              <br />
              <div>
                <FormButton
                  type="submit"
                  disabled={Object.keys(validate(form)).length > 0}
                >
                  Create
                </FormButton>
              </div>
            </form>
          </FormGroup>
        </div>
      </div>
    </>
  );
}
