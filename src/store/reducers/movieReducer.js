import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  movie: null,
  totalAmount: null,
  query: '',
  genre: '',
  sortBy: 'release_date',
  lastQuery: null
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.STORE_MOVIES:
      return {
        ...state,
        ...payload
      };
    case actionTypes.STORE_MOVIE:
      return {
        ...state,
        movie: payload.movie
      };
    // Payload looks like { [genre|sortBy|query]: newValue }
    case actionTypes.UPDATE_MOVIE_PARAM:
    case actionTypes.SAVE_LAST_QUERY:
      return {
        ...state,
        ...payload
      };
    case actionTypes.RESET_STATE:
      return {
        ...initialState
      }
    default:
      return state;
  }
};

export default movieReducer;