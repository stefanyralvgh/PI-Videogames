// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Form() {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     platforms: [],
//     image: null, 
//     release_date: '',
//     rating: '',
//     genres: [], 
//   });



// useEffect(() => {
//     axios.get('http://localhost:3001/genres')
//       .then((response) => {
    
//         if (Array.isArray(response.data)) {
//           const genresList = response.data.map((genre) => ({
//             id: genre.id,
//             name: genre.name,
//           }));
  
//           setFormData((prevFormData) => ({
//             ...prevFormData,
//             genres: genresList,
//           }));
//         } else {
//           console.error('Genres data not in the expected format');
//         }
//       })
//       .catch((error) => {
//         console.error('Error al obtener géneros:', error);
//       });
  
//       axios.get('http://localhost:3001/videogames')
//   .then((response) => {

//     if (Array.isArray(response.data.results)) {
//       const platformsList = [];

//       for (let i = 0; i < response.data.results.length; i++) {
//         const game = response.data.results[i];
        
//         if (game.platforms && game.platforms.length > 0) {
//           for (let j = 0; j < game.platforms.length; j++) {
//             const platformData = game.platforms[j];
//             const platform = {
//               id: platformData.platform.id,
//               name: platformData.platform.name,
//             };
//             const existingPlatform = platformsList.find((p) => p.id === platform.id);
//             if (!existingPlatform) {
//               platformsList.push(platform);
//             }
//           }
//         }
//       }
// console.log(platformsList);
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         platforms: platformsList,
//       }));
//     } else {
//       console.error('Platforms data not in the expected format');
//     }
//   })
//   .catch((error) => {
//     console.error('Error al obtener plataformas:', error);
//   });

        
//   }, []);
  

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
    
//     const newValue = type === 'file' ? files[0] : value;
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('platforms', formData.platforms);
//     formDataToSend.append('image', formData.image); 
//     formDataToSend.append('release_date', formData.release_date);
//     formDataToSend.append('rating', formData.rating);
//     formDataToSend.append('genres', formData.genres.join(',')); 

//     axios.post('http://localhost:3001', formDataToSend)
//       .then((response) => {
        
//         console.log('Videojuego creado:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error al crear el videojuego:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Agregar Nuevo Videojuego</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div>
//           <label>Nombre:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Descripción:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Plataformas:</label>
//           <input
//             type="text"
//             name="platforms"
//             value={formData.platforms}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Imagen:</label>
//           <input
//             type="file" 
//             name="image"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Fecha de Lanzamiento:</label>
//           <input
//             type="text"
//             name="release_date"
//             value={formData.release_date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Géneros:</label>
//           {formData.genres.map((genre) => (
//             <div key={genre.id}>
//               <input
//                 type="checkbox"
//                 name="genres"
//                 value={genre.id}
//                 onChange={handleChange}
//               />
//               <label>{genre.name}</label>
//             </div>
//           ))}
//         </div>
//         <button type="submit">Crear Videojuego</button>
//       </form>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    platforms: [],
    image: null,
    release_date: '',
    rating: '',
    genres: [],
  });

  useEffect(() => {
    // Obtener géneros
    axios.get('http://localhost:3001/genres')
      .then((response) => {
        if (Array.isArray(response.data)) {
          const genresList = response.data.map((genre) => ({
            id: genre.id,
            name: genre.name,
          }));

          setFormData((prevFormData) => ({
            ...prevFormData,
            genres: genresList,
          }));
        } else {
          console.error('Géneros no están en el formato esperado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener géneros:', error);
      });

    // Obtener plataformas
    axios.get('http://localhost:3001/videogames')
      .then((response) => {
        if (Array.isArray(response.data.results)) {
          const platformsList = [];

          for (let i = 0; i < response.data.results.length; i++) {
            const game = response.data.results[i];

            if (game.platforms && game.platforms.length > 0) {
              for (let j = 0; j < game.platforms.length; j++) {
                const platformData = game.platforms[j];
                const platform = {
                  id: platformData.platform.id,
                  name: platformData.platform.name,
                };
                const existingPlatform = platformsList.find((p) => p.id === platform.id);
                if (!existingPlatform) {
                  platformsList.push(platform);
                }
              }
            }
          }

          setFormData((prevFormData) => ({
            ...prevFormData,
            platforms: platformsList.map((platform) => platform.name),
          }));
        } else {
          console.error('Plataformas no están en el formato esperado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener plataformas:', error);
      });

  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('platforms', formData.platforms.join(',')); // Convert platforms array to a string
    formDataToSend.append('image', formData.image);
    formDataToSend.append('release_date', formData.release_date);
    formDataToSend.append('rating', formData.rating);
    formDataToSend.append('genres', formData.genres.join(',')); // Convert genres array to a string

    axios.post('http://localhost:3001', formDataToSend)
      .then((response) => {
        console.log('Videojuego creado:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el videojuego:', error);
      });
  };

  return (
        <div>
          <h2>Agregar Nuevo Videojuego</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Plataformas:</label>
              <input
                type="text"
                name="platforms"
                value={formData.platforms}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Imagen:</label>
              <input
                type="file" 
                name="image"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Fecha de Lanzamiento:</label>
              <input
                type="text"
                name="release_date"
                value={formData.release_date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Géneros:</label>
              {formData.genres.map((genre) => (
                <div key={genre.id}>
                  <input
                    type="checkbox"
                    name="genres"
                    value={genre.id}
                    onChange={handleChange}
                  />
                  <label>{genre.name}</label>
                </div>
              ))}
            </div>
            <button type="submit">Crear Videojuego</button>
          </form>
        </div>
      );
    };