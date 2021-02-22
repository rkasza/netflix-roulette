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
      query: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
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

  handleOnSearch() {
    const { selectedGenre } = this.state;
    let movies = this.filterMovies(selectedGenre);
    if (this.state.query !== '') {
      movies = movies.filter(movie => filterByQuery(movie, this.state.query));
    } 
    this.setState({ movies });
  }
  shouldComponentUpdate(nextProps, nextState) {
    const nextStateSTR = JSON.stringify(nextState);
    const currentState = JSON.stringify(this.state);
    return nextStateSTR !== currentState;
  }

  handleSortByChange (sortBy) {
    const sortFunction = sortBy === 1 ? this.sortMoviesByDate : this.sortMoviesByRating;
    const movies = sortFunction(this.state.movies);
    this.setState({ sortBy, movies });
  }

  handleEnter (event) {
    if (event.charCode === 13) {
      event.preventDefault();
      this.handleOnSearch();
    }
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
          onEnter={this.handleEnter}
          onSearch={this.handleOnSearch}
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
