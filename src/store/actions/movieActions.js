import MovieService from '../../services/MovieService';
import * as actionTypes from './actionTypes';

export const getMovies = () => async (dispatch, getState) => {
  const { movieState: { sortBy, genre, query } } = getState();
  const params = {
    sortBy,
    ...query !== '' && { search: query, searchBy: 'title'},
    ...genre !== 'All' && { filter: genre }
  };
  dispatch(saveLastQuery(query));
  const { totalAmount, data: movies } = await MovieService.getMovies({ ...params });
  dispatch(storeMovies(totalAmount, movies));
};

export const storeMovies = (totalAmount, movies) => ({ type: actionTypes.STORE_MOVIES, payload: { totalAmount, movies } });

export const saveMovie = movie => ({ type: actionTypes.STORE_MOVIE, payload: { movie } });

export const getMovie = id => async (dispatch) => {
  const movie = await MovieService.getMovie(id);
  dispatch(saveMovie(movie));
};

export const updateMovieParam = param => ({ type: actionTypes.UPDATE_MOVIE_PARAM, payload: param });

export const updateMovieParamAndGetMovies = param => async dispatch => {
  dispatch(updateMovieParam(param));
  dispatch(getMovies());
};

export const setQuery = query => ({ type: actionTypes.SET_QUERY, payload: { query }});

export const saveLastQuery = lastQuery => ({ type: actionTypes.SAVE_LAST_QUERY, payload: { lastQuery }});
