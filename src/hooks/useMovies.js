import { useState, useEffect, useRef } from 'react';
import { arraySortFactory } from '../util/util';

const filterByQuery = (movie, query) => movie.title.toLowerCase().search(query.toLowerCase()) !== -1;

const compareReleaseDates = ({ release_date: a }, { release_date: b }) => b.localeCompare(a);
const sortMoviesByDate  = arraySortFactory(compareReleaseDates);

const compareRating = ({ vote_average: a }, { vote_average: b }) => b > a;
const sortMoviesByRating = arraySortFactory(compareRating);

const useMovies = _movies => {
  const [movies, setMovies] = useState(_movies);
  const lastQuery = useRef('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState(1);
  const [query, setQuery] = useState('');

  const filterMovies = () => {
    const sortMoviesBy = sortBy === 1 ? sortMoviesByDate : sortMoviesByRating;
    let filteredMovies = sortMoviesBy(_movies.filter(({ genres }) => selectedGenre === 'All' || genres.includes(selectedGenre)));
    if (query !== '') {
      filteredMovies = filteredMovies.filter(movie => filterByQuery(movie, query));
    }
    return filteredMovies;
  };

  useEffect(() => {
    const sortMoviesBy = sortBy === 1 ? sortMoviesByDate : sortMoviesByRating;
    setMovies(m => sortMoviesBy(m));
  }, [sortBy]); // eslint-disable-line

  useEffect(() => {
    setMovies(filterMovies());
  }, [selectedGenre]); // eslint-disable-line

  const handleOnSubmit = event => {
    event.preventDefault();
    if (query !== lastQuery.current) {
      setMovies(filterMovies());
      lastQuery.current = query;
    }
  };

  return {
    movies,
    sortBy,
    query,
    selectedGenre,
    lastQuery: lastQuery.current,
    setQuery,
    setSortBy,
    setSelectedGenre,
    handleOnSubmit
  }
};

export default useMovies;