import axios from 'axios';
import { GET_VIDEOGAMES_SUCCESS,  } from '../reducer/types';

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/videogames');
      dispatch({ type: GET_VIDEOGAMES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_VIDEOGAMES_ERROR, payload: error.message });
    }
  };
};
