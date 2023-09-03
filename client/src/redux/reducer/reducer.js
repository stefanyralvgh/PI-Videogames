import { GET_VIDEOGAMES, SET_PAGE, 
  // SEARCH_VIDEOGAMES 
} from "./types";

const initialState = {
  videogames: [],
  page: 1,
  perPage: 15,
  // searchResults: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
 
  }}


export default reducer;
