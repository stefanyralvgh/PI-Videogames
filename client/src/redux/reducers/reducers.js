const initialState = {
    videogames: [],
    error: null,
  };
  
  const videogameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_VIDEOGAMES_SUCCESS':
        return { ...state, videogames: action.payload, error: null };
      case 'GET_VIDEOGAMES_ERROR':
        return { ...state, videogames: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default videogameReducer;
  