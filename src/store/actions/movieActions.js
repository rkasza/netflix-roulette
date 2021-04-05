import MovieService from '../../services/MovieService';
import * as actionTypes from './actionTypes';

export const getMovies = params => async dispatch => {
  const response = await MovieService.getMovies(params);
  //TODO: create action and change type to STORE_RESPONSE maybe
  dispatch({ type: actionTypes.GET_MOVIES, payload: { response }});
};
export const storeMovie = movie => {
  return { type: actionTypes.STORE_MOVIE, payload: { movie }}
}
export const getMovie = id => async dispatch => {
  const movie = await MovieService.getMovie(id);
  dispatch(storeMovie(movie));
};
export const sortBy = key => async dispatch => {
  const response = await MovieService.sortBy(key);
  dispatch({ type: actionTypes.GET_MOVIES, payload: { response }});
};
export const searchByGenre = genre => async dispatch => {
  const response = await MovieService.searchBy(genre, 'genres');
  dispatch({ type: actionTypes.GET_MOVIES, payload: { response }});
};