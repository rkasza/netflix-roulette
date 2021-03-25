import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Home from '../pages/Home/Home';

const Header = ({ movie, backHome, query, onSubmit, onChange }) => 
  movie ? <MovieDetails movie={movie} backHome={backHome}/> : <Home query={query} onSubmit={onSubmit} onChange={onChange} />;

Header.propTypes = {
  movie: PropTypes.object,
  backHome: PropTypes.func.isRequired,
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Header;
