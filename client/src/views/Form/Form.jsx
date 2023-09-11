// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addVideoGame } from "../../redux/actions/actions";
// import {
//   FormContainer,
//   FormTitle,
//   FormGroup,
//   FormButton,
//   FormLabel,
//   FormInput,
//   FormLabelOptions,
//   PageContainer,
//   CheckboxContainer
// } from "../Form/FormStyles";
// import axios from "axios";

// export default function Form(props) {
//   const dispatch = useDispatch();
//   const [selectedGenreIds, setSelectedGenreIds] = useState([]);
//   const [errors, setErrors] = useState({ form: "Must complete the form" });

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     image: "",
//     release_date: "",
//     rating: "0",
//     genres: [],
//     platforms: [],
//   });

//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [selectedPlatforms, setSelectedPlatforms] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/videogames")
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           const platformsList = [];
//           const genresList = [];

//           for (let i = 0; i < response.data.length; i++) {
//             const game = response.data[i];

//             if (game.platforms && Array.isArray(game.platforms)) {
//               platformsList.push(...game.platforms);
//             }

//             if (game.Genres && Array.isArray(game.Genres)) {
//               genresList.push(
//                 ...game.Genres.map((genre) => [genre.id, genre.name])
//               );
//             }
//           }

//           const uniquePlatforms = [...new Set(platformsList)];
//           const uniqueGenres = [...new Set(genresList)];

//           setForm((prevForm) => ({
//             ...prevForm,
//             platforms: uniquePlatforms,
//             genres: uniqueGenres,
//           }));
//         } else {
//           console.error("The video game data is not in the expected format.");
//         }
//       })
//       .catch((error) => {
//         console.error("Couldn't get the videogames", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     if (e.target.parentNode.parentNode.id === "genres") {
//       const genre = e.target.value;
//       const isChecked = e.target.checked;

//       if (isChecked) {
//         setSelectedGenres((prevGenres) => [...prevGenres, genre]);
//       } else {
//         setSelectedGenres((prevGenres) =>
//           prevGenres.filter((prevGenre) => prevGenre !== genre)
//         );
//       }
//     }

//     if (e.target.parentNode.parentNode.id === "platforms") {
//       const platform = e.target.name;
//       const isChecked = e.target.checked;

//       if (isChecked) {
//         setSelectedPlatforms((prevPlatforms) => [...prevPlatforms, platform]);
//       } else {
//         setSelectedPlatforms((prevPlatforms) =>
//           prevPlatforms.filter((prevPlatform) => prevPlatform !== platform)
//         );
//       }
//     }
//     if (e.target.name === "image") {
//       const file = e.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setForm((prevState) => ({
//           ...prevState,
//           image: imageUrl,
//         }));
//       }
//     }

//     setForm((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));

//     setErrors(
//       validate({
//         ...form,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };

//   const validate = (form) => {
//     let errors = {};
//     if (!form.name) {
//       errors.name = "Game Name is required";
//     } else if (form.name.length < 4) {
//       errors.name = "Game Name must have at least 4 characters";
//     }
//     if (!form.description) {
//       errors.description = "Description is required";
//     } else if (form.description.length < 8) {
//       errors.description = "Description must have at least 8 characters";
//     }
//     if (!form.rating) {
//       errors.rating = "Rating is required";
//     } else if (!/^[1-5]$/.test(form.rating)) {
//       errors.rating = "Rating must be between 1 and 5";
//     }
//     return errors;
//   };

//   const handleGenreChange = (e) => {
//     const genreId = e.target.value;
//     const isChecked = e.target.checked;
//     console.log(genreId);
//     setSelectedGenreIds((prevGenreIds) => {
//       const updatedGenreIds = new Set(prevGenreIds);

//       if (isChecked) {
//         updatedGenreIds.add(genreId);
//       } else {
//         updatedGenreIds.delete(genreId);
//       }

//       return Array.from(updatedGenreIds);
//     });
//   };

//   const handlePlatformChange = (e) => {
//     const platform = e.target.name;
//     const isChecked = e.target.checked;

//     setSelectedPlatforms((prevPlatforms) => {
//       const updatedPlatforms = new Set(prevPlatforms);

//       if (isChecked) {
//         updatedPlatforms.add(platform);
//       } else {
//         updatedPlatforms.delete(platform);
//       }

//       return Array.from(updatedPlatforms);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validate(form);

//     let checkboxsErrors = [];
//     if (selectedGenreIds.length < 1) checkboxsErrors.push("Genres is required");
//     if (selectedPlatforms.length < 1)
//       checkboxsErrors.push("Platforms is required");
//     if (Object.values(errors).length || checkboxsErrors.length) {
//       return alert(Object.values(errors).concat(checkboxsErrors).join("\n"));
//     }

//     const newGame = {
//       name: form.name,
//       description: form.description,
//       image: form.image,
//       release_date: form.release_date,
//       rating: form.rating,
//       genres: selectedGenreIds,
//       platforms: selectedPlatforms,
//     };

//     axios
//       .post("http://localhost:3001/videogames", newGame)
//       .then((res) => {
//         dispatch(addVideoGame(res.data));
//         window.alert("Game created successfully!");
//       })
//       .catch((error) => {
//         console.error("Error creating the videogame:", error);
//         window.alert("Error creating the game. Please try again.");
//       });
//   };

//   return (
//     <>
//       <PageContainer>
       
//           <FormTitle>CREATE NEW VIDEOGAME </FormTitle>
//           <FormGroup>
//             <FormContainer onSubmit={handleSubmit} onChange={handleChange}>
//               <div>
//               <FormLabel htmlFor="name">Name:</FormLabel>
//               <FormInput
//                 className="name"
//                 placeholder="Name"
//                 type="text"
//                 id="name"
//                 name="name"
//                 autoComplete="off"
//               />
             
             
//               <FormLabel htmlFor="description">
//                 <strong>Description: </strong>
//               </FormLabel>
//               <textarea
//                 className="name"
//                 name="description"
//                 placeholder="Description..."
//                 id="description"
//                 cols="30"
//                 rows="3"
//               />
              
//               <FormLabel htmlFor="date">
//                 <strong>Release Date: </strong>
//               </FormLabel>
//               </div>
//               <FormInput
//                 name="release_date"
//                 className="dt"
//                 type="date"
//                 id="date"
//                 required
//               />
//               <FormLabel htmlFor="rating">
//                 <strong>Rating: </strong>
//               </FormLabel>
              
//               <FormInput
//                 name="rating"
//                 className="dt"
//                 placeholder="Rate from 1 to 5"
//                 type="tel"
//                 id="rating"
//                 maxLength="1"
//                 autoComplete="off"
//               />
//               <FormLabel >
//                 <strong>Image: </strong>
//               </FormLabel>
    
//               <FormInput
//                 htmlFor="image"
//                 type="file"
//                 accept=".jpg, .jpeg, .png"
//                 id="image"
//                 name="image"
//               />
//               {form.image && <img src={form.image} alt="Game Cover" />}
//               <br />
//               <FormLabel>
//                 <strong>Genres: </strong>
//               </FormLabel>
//               <CheckboxContainer>
//                 {Array.from(new Set(form.genres.map((genre) => genre[1]))).map(
//                   (genreName, index) => (
//                     <div key={index}>
//                       <input
//                         name={genreName}
//                         value={
//                           form.genres.find((genre) => genre[1] === genreName)[0]
//                         }
//                         type="checkbox"
//                         id={genreName}
//                         onChange={handleGenreChange}
//                         checked={selectedGenres.includes(genreName)}
//                       />
//                       <FormLabelOptions htmlFor={genreName}>
//                         {genreName}.
//                       </FormLabelOptions>
//                     </div>
//                   )
//                 )}
//               </CheckboxContainer>

//               <FormLabel>
//                 Platforms: 
//               </FormLabel>
//               <CheckboxContainer>
//                 {form.platforms.map((platform, index) => (
//                   <div key={index}>
//                     <FormInput
//                       name={platform}
//                       type="checkbox"
//                       id={platform}
//                       onChange={handlePlatformChange}
//                       checked={selectedPlatforms.includes(platform)}
//                     />
//                     <FormLabelOptions htmlFor={platform}>
//                       {platform}.
//                     </FormLabelOptions>
//                   </div>
//                 ))}
//               </CheckboxContainer>
//               <div>
//                 <FormButton type="submit">Create</FormButton>
//               </div>
//             </FormContainer>
//           </FormGroup>
        
//       </PageContainer>
//     </>
//   );
// }
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
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setForm((prevState) => ({
          ...prevState,
          image: imageUrl,
        }));
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
    <>
      <div className="main-add">
        <div className="container-add">
          <h2>CREATE NEW VIDEOGAME </h2>
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
              {form.image && (
                <img src={form.image} alt="Game Cover" className="game-image" />
              )}
              <br />
              <label htmlFor="image" className="title-name">
                <strong>Genres: </strong>
              </label>
              <div id="genres" className="genres-div">
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
                      <label htmlFor={genreName}>{genreName}.</label>
                    </div>
                  )
                )}
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