import React from 'react';
import MovieListController from './Controls/MovieListController';
import NoMovieFound from './NoMovieFound';
import './Movies.css';
import moviesJSON from '../../../__mocks__/movies.json'
import Movie from './Movie/Movie';
import Row from '../../../components/Skeleton/Row';

const { data: movies } = moviesJSON;

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'All',
      sortBy: 1,
      movies,
      filteredMovies: this.sortMoviesByDate(movies)
    };
  }

  hendleGenreChange (selectedGenre) {
    this.setState({ selectedGenre });
  }

  handleSortByChange (sortBy) {
    const filterFunction = sortBy === 1 ? this.sortMoviesByDate.bind(this) : this.sortMoviesByRating.bind(this);
    const filteredMovies = filterFunction(this.state.movies);
    this.setState({ sortBy, filteredMovies });
  }
  filterMovies () {

  }
  sortMoviesByDate (movies) {
    return movies.sort(({ release_date: a }, { release_date: b }) => b.localeCompare(a));
  }
  
  sortMoviesByRating (movies) {
    return movies.sort(({ vote_average: a }, { vote_average: b }) => b > a);
  }
  render () {
    const { selectedGenre, sortBy, filteredMovies } = this.state;
    return (
      <div className="MovieListWrapper">
        <MovieListController selectedGenre={selectedGenre} sortBy={sortBy} onGenreChange={this.hendleGenreChange.bind(this)} onSortByChange={this.handleSortByChange.bind(this)}/>
        <Row className="MovieList">
          {filteredMovies.map(movie => <Movie key={movie.id} {...movie} />)}
        </Row>
      </div>
    );
  }
}

export default Movies;
