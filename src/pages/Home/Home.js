import React from 'react';
import FindMovie from './FindMovie/FindMovie';
import Movies from './Movies/Movies';
import moviesJSON from '../../__mocks__/movies.json';
const { data: movies } = moviesJSON;

const filterByQuery = (movie, query) => movie.title.toLowerCase().search(query.toLowerCase()) !== -1

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'All',
      sortBy: 1,
      movies:this.sortMoviesByDate(movies),
      _movies: movies,
      query: '',
      lastQuery: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.sortMoviesByDate = this.sortMoviesByDate.bind(this);
    this.sortMoviesByRating = this.sortMoviesByRating.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleGenreChange (selectedGenre) {
    this.setState({ selectedGenre, movies: this.filterMovies(selectedGenre) });
  }

  handleOnChange ({ target: { value } }) {
    this.setState({ query: value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { selectedGenre, query, lastQuery } = this.state;
    if (query !== lastQuery) {
      let movies = this.filterMovies(selectedGenre);
      if (query !== '') {
        movies = movies.filter(movie => filterByQuery(movie, this.state.query));
      } 
      this.setState({ movies, lastQuery: this.state.query });
    }
  }

  handleSortByChange (sortBy) {
    const sortFunction = sortBy === 1 ? this.sortMoviesByDate : this.sortMoviesByRating;
    const movies = sortFunction(this.state.movies);
    this.setState({ sortBy, movies });
  }

  sortMovies (movies) {
    const sortFunction = this.state.sortBy === 1 ? this.sortMoviesByDate : this.sortMoviesByRating;
    return sortFunction(movies);
  }
  
  filterMovies (selectedGenre) {
    const filteredMovies = this.sortMovies(
      this.state._movies.filter(({ genres }) => selectedGenre === 'All' || genres.includes(selectedGenre))
      .filter(movie => filterByQuery(movie, this.state.query))
    );
    return filteredMovies;
  }

  sortMoviesByDate (movies) {
    return movies.sort(({ release_date: a }, { release_date: b }) => b.localeCompare(a));
  }
  
  sortMoviesByRating (movies) {
    return movies.sort(({ vote_average: a }, { vote_average: b }) => b > a);
  }

  render() {
    const { selectedGenre, sortBy, movies, query } = this.state;
    return ( 
      <>
        <FindMovie
          query={query}
          onSubmit={this.handleOnSubmit}
          onChange={this.handleOnChange} />
        <Movies
          selectedGenre={selectedGenre}
          sortBy={sortBy} movies={movies}
          onGenreChange={this.handleGenreChange}
          onSortByChange={this.handleSortByChange}/>
      </>
    );
  }
};

export default Home;
