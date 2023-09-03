import axios from "axios";
import { GET_VIDEOGAMES, SET_PAGE, 
  // SEARCH_VIDEOGAMES 
 } from "../reducer/types";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setPage = (page) => {
  return { type: SET_PAGE, payload: page };
};

// export const searchVideoGames = (query) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/videogames/search?query=${query}`
//       );
//       dispatch({ type: SEARCH_VIDEOGAMES, payload: response.data });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };


