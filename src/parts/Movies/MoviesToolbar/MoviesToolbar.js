import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import * as movieActions from '../../../store/actions/movieActions'
import Row from '../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';
// Dispatch sort/filter functions here useEffect maybe?
const MoviesToolbar = () => {
  const [genre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('release_date');
  const dispatch = useDispatch();
  //TODO: Handle if genre is All
  const handleGenreChange = newGenre => {
    setSelectedGenre(newGenre);
    dispatch(movieActions.getMovies({ search: newGenre, searchBy: 'genres', sortBy }));
  };

  const handleSortByChange = newSortByValue => {
    setSortBy(newSortByValue);
    dispatch(movieActions.getMovies({ search: genre, searchBy: 'genres', sortBy: newSortByValue }));
  };
  return (
    <Row className="MoviesToolbar">
      <Genres selected={genre} onGenreChange={handleGenreChange} />
      <SortBy value={sortBy} onChange={handleSortByChange} />
    </Row>
  );
}

export default MoviesToolbar;