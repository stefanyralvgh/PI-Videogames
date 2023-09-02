const initialState = {
    videogames: [],
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_VIDEOGAMES_SUCCESS':
        return { ...state, videogames: action.payload, error: null };
      
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  