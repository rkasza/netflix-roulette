import movieReducer, { initialState as movieState } from './movieReducer';
import {
  updateMovieParam,
  resetState,
  saveMovie,
  storeMovies,
  saveLastQuery
} from '../actions/movieActions';
import * as actionTypes from '../actions/actionTypes';

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(movieState);
  });
  describe(`CASE ${actionTypes.STORE_MOVIES}`, () => {
    it('should reset save the movie in the state', () => {
      const movies = [1,2,34,5,6];
      const totalAmount = movies.length;
      const expectedState = {
        ...movieState,
        movies,
        totalAmount: movies.length
      };
      expect(movieReducer(movieState, storeMovies(totalAmount, movies))).toEqual(expectedState);
    });
  });
  describe(`CASE ${actionTypes.STORE_MOVIE}`, () => {
    it('should reset save the movie in the state', () => {
      const movie = { title: 'Matrix' };
      const expectedState = {
        ...movieState,
        movie
      }
      expect(movieReducer(movieState, saveMovie(movie))).toEqual(expectedState);
    });
  });
  //
  describe(`
    CASE ${actionTypes.UPDATE_MOVIE_PARAM}`, () => {
    it.each`
      value                 |       key       |         expectedState
      ${'All'}              |   ${'genre'}    | ${{...movieState, genre: 'All'}}
      ${'La la Land'}       |   ${'query'}    | ${{...movieState, query: 'La la Land'}}
      ${'La la Land'}       |   ${'query'}    | ${{...movieState, query: 'La la Land'}}
      ${'voting_avarage'}   |   ${'sortBy'}   | ${{...movieState, sortBy: 'voting_avarage'}}
    `('should update $key to $value',
      ({ value, key, expectedState }) => {
        expect(movieReducer(movieState, updateMovieParam({ [key]: value })))
          .toEqual(expectedState);
    });  
  });
  describe(`CASE ${actionTypes.RESET_STATE}`, () => {
    it('should reset the state', () => {
      const state = {
        ...movieState,
        movies: [1,2,34,5,6],
        query: 'HOHOHOOHHOHH'
      }
      expect(movieReducer(state, resetState())).toEqual(movieState);
    });
  });
  describe(`CASE ${actionTypes.SAVE_LAST_QUERY}`, () => {
    it('should save last query', () => {
      const lastQuery = 'lastQuery';
      const expectedState = {
        ...movieState,
        lastQuery
      };
      expect(movieReducer(movieState, saveLastQuery(lastQuery))).toEqual(expectedState);
    });
  });
}); 
