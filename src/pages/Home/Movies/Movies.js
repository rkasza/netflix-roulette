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
      movies
    };
  }
  hendleGenreChange (selectedGenre) {
    console.log(selectedGenre)
    this.setState({ selectedGenre });
  }
  handleSortByChange (sortBy) {
    this.setState({ sortBy });
  }
  render () {
    const { selectedGenre, sortBy } = this.state;
    return (
      <div className="MovieListWrapper">
        <MovieListController selectedGenre={selectedGenre} sortBy={sortBy} onGenreChange={this.hendleGenreChange.bind(this)} onSortByChange={this.handleSortByChange.bind(this)}/>
        <Row className="MovieList">
          {this.state.movies.map(movie => <Movie key={movie.id} {...movie} />)}
        </Row>
      </div>
    );
  }
}

export default Movies;
