import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../../components/Skeleton/Col';
import Row from '../../../components/Skeleton/Row';
import './FindMovie.css';

const MovieFilter = ({ onSubmit, onChange, query }) => (
  <form className="FindMovieForm" onSubmit={onSubmit}>
    <Row>
      <Col size={12} className="">
        <h4>FIND YOUR MOVIE</h4>
      </Col>
    </Row>
    <Row>
      <Col size={9} className="">
        <input
          className="u-full-width searchfield"
          type="text"
          placeholder="What do you want to watch?"
          id="movieQuery"
          value={query}
          onChange={onChange}/>
      </Col>
      <Col size={3}>
        <button className="button-primary u-full-width search" type="submit">Search</button>
      </Col>
    </Row>
  </form>
);

MovieFilter.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  query: PropTypes.string,
}

export default MovieFilter;
