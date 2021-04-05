import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './parts/Header';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import Movies from './parts/Movies/Movies';
import './assets/css/App.css';

function App({ movies = [], movie = null, getMovies = console.log, numberOfResults = 10, viewMovieDetails = console.log, backHome = console.log }) {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('release_date');
  const [query, setQuery] = useState('');

  useEffect(() => {
    //Fetch movies
    getMovies('HELLO THERE');
  }, [getMovies]);

  const handleOnSubmit = event => {
    event.preventDefault();
    alert('Submiteddddd!!!!');
  };
  
  
  const handleOnChange = e => setQuery(e.target.value);

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
          numberOfResults={numberOfResults}
          onGenreChange={setSelectedGenre}
          onSortByChange={setSortBy} />
        <footer><Logo fontSize='18px' /></footer>
      </Container>
    </ErrorBoundary>
  );
}

// const mapsStateToProps = ({ movies, totalAmount, movie }) => ({
//   movies,
//   movie,
//   numberOfResults: totalAmount
// });

// const mapDispatchToProps = dispatch => ({
//   getMovies: () => dispatch(actions.getMovies()),
//   viewMovieDetails: movieId => dispatch(actions.getMovie(movieId)),
//   backHome: () => dispatch(actions.storeMovie(null))
// });

export default App;
