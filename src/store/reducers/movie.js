import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  movie: null,
  // For pagination
  limit: 6,
  offset: 0,
  totalAmount: 0
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_MOVIES:
      return {
        ...state,
        ...payload.response, // We save the server response from the server
        movies: payload.response.data
      };
    case actionTypes.STORE_MOVIE:
      return {
        ...state,
        movie: payload.movie
      };
    default:
      return state;
  }
};

export default movieReducer;