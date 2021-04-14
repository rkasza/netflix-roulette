import { handleResponse } from '../util/http/http-util';
const  MOVIE_API_URL = 'http://localhost:4000/movies';

const MovieApiUrlBuilder = params => {
  if (!params || typeof params != 'object') return MOVIE_API_URL;
  const keys = Object.keys(params);
  //Get movie by id endpoint
  if (keys.includes('id')) return `${MOVIE_API_URL}/${params.id}`;
  return keys.reduce((url, key, index) => {
    const separator = index === 0 ? '?' : '&';
    return `${url}${separator}${key}=${params[key]}`;
  }, MOVIE_API_URL);
};

const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const _fetch = params => options => fetch(MovieApiUrlBuilder(params), { ...defaultOptions, ...options }).then(handleResponse);

const MovieService = {
  //searcBy, sortby, getMovies returns result in response.data
  getMovies: async params => await _fetch({ limit: 6, sortOrder: 'desc', ...params })(), // GET
  createMovie: async newMovie => await _fetch()({ method: 'POST', body: JSON.stringify(newMovie) }), // POST
  /* There are some movies with empty taglines in the database.
     Before updating the movie tagline needs to be removed from the body because it can not be empty.
  */
  updateMovies: async ({ tagline, ...updatedMovie }) => await _fetch()({ method: 'PUT', body: JSON.stringify(updatedMovie) }), // PUT
  getMovie: async id => await _fetch({ id })(), // GET + movieId
  deleteMovie: async id => await _fetch({ id })({ method: 'DELETE' }), // DELETE + movieId
};

export default MovieService;


// createMovie: async ({ id, ...newMovie }) => await _fetch()({ method: 'POST', body: JSON.stringify(newMovie) }), // POST