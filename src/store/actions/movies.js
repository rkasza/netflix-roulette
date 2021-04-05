import MovieService from '../../services/MovieService';
import * as actionTypes from './actionTypes';

export const getMovies = () => async dispatch => {
  const response = await MovieService.getMovies();
  dispatch({ type: actionTypes.GET_MOVIES, payload: { response }});
};
export const storeMovie = movie => {
  return { type: actionTypes.STORE_MOVIE, payload: { movie }}
}
export const getMovie = id => async dispatch => {
  const movie = await MovieService.getMovie(id);
  dispatch(storeMovie(movie));
};