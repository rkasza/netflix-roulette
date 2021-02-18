import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../../components/Skeleton/Col';
import Row from '../../../components/Skeleton/Row';
import './FindMovie.css';

const MovieFilter = ({ onSearch, onChange, query, onEnter }) => (
  <form className="FindMovieForm">
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
          onKeyPress={onEnter}
          onChange={onChange}/>
      </Col>
      <Col size={3}>
        <input className="button-primary u-full-width search" type="button" value="Search" onClick={e => onSearch(query)}/>
      </Col>
    </Row>
  </form>
);

MovieFilter.propTypes = {
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  query: PropTypes.string,
}

export default MovieFilter;
