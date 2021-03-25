import React, { useState, useCallback } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './parts/Header';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import Movies from './parts/Movies/Movies';
import useMovies from './hooks/useMovies';
import moviesJSON from './__mocks__/movies.json';
import './assets/css/App.css';


const { data: _movies } = moviesJSON;

function App() {
  const [movie, setMovie] = useState(null);
  const { movies,
    sortBy,
    query,
    selectedGenre,
    setQuery,
    setSortBy,
    setSelectedGenre,
    handleOnSubmit
  } = useMovies(_movies);

  const handleOnChange = e => setQuery(e.target.value);
  const viewMovieDetails = useCallback(movie => setMovie(movie), [setMovie]);
  const backHome = useCallback(() => setMovie(null), [setMovie]);

  return (
    <ErrorBoundary>
      <Container className="PageContent">
        <Header
          movie={movie}
          onChange={handleOnChange}
          query={query}
          onSubmit={handleOnSubmit}
          backHome={backHome}/>
        <Movies
          viewMovieDetails={viewMovieDetails}
          selectedGenre={selectedGenre}
          sortBy={sortBy} 
          movies={movies}
          onGenreChange={setSelectedGenre}
          onSortByChange={setSortBy} />
        <footer><Logo fontSize='18px' /></footer>
      </Container>
    </ErrorBoundary>
  );
}

export default App;
