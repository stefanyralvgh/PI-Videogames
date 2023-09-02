import axios from 'axios';
import { GET_VIDEOGAMES,  } from '../reducer/types';

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/videogames');
      dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
