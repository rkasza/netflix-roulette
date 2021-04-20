import React from 'react';
import MovieService from '../../services/MovieService';
import * as actionTypes from './actionTypes';
import { changeModalBody } from '../actions/modalActions';
import ResponseMessage from '../../components/ResponseMessage/ResponseMessage';

export const storeMovies = (totalAmount, movies) => ({ type: actionTypes.STORE_MOVIES, payload: { totalAmount, movies } });

export const saveMovie = movie => ({ type: actionTypes.STORE_MOVIE, payload: { movie } });

export const updateMovieParam = param => ({ type: actionTypes.UPDATE_MOVIE_PARAM, payload: param });

export const updateMovieParamAndGetMovies = param => async dispatch => {
  dispatch(updateMovieParam(param));
  dispatch(getMovies());
};

export const setQuery = query => ({ type: actionTypes.SET_QUERY, payload: { query }});

export const saveLastQuery = lastQuery => ({ type: actionTypes.SAVE_LAST_QUERY, payload: { lastQuery }});

const showResponse = (message, isSuccess = true) => dispatch => {
  const response = <ResponseMessage success={isSuccess}>{message}</ResponseMessage>;
  dispatch(changeModalBody(response));
};

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

export const getMovie = id => async (dispatch) => {
  const movie = await MovieService.getMovie(id);
  dispatch(saveMovie(movie));
};

export const createMovie = newMovie => async dispatch => {
  try {
    await MovieService.createMovie(newMovie);   
    dispatch(showResponse(<>The movie has been added to <br /> database successfully.</>));
  } catch (error) {
    console.log(error, error.messages);
    dispatch(showResponse(error.messages, false));
  }
};

export const updateMovie = movie => async dispatch => {
  try {
    await MovieService.updateMovies(movie);
    dispatch(showResponse(<>{movie.title} <br /> has been updated.</>));
    dispatch(getMovies());    
  } catch (error) {
    console.log(error, error.messages);
    dispatch(showResponse(error.messages, false));
  }
};

export const deleteMovie = movieId => async dispatch => {
  try {
    await MovieService.deleteMovie(movieId);
    dispatch(showResponse('Movie has been deleted.'));
    dispatch(getMovies());
  } catch (error) {
    console.log(error, error.messages);
    dispatch(showResponse(error.messages, false));
  }
};
