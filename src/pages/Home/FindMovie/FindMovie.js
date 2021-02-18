import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../components/Skeleton/Row';
import Col from '../../../components/Skeleton/Col';
import HeroImage from '../HeroImage/HeroImage';
import Logo from '../../../components/Logo/Logo';
import MovieFilter from './MovieFilter';

const FindMovie = ({ onSearch, query, onChange, onEnter }) => {
  return (
    <Row className="FindMovieWrapper">
      <Col size={12}>
        <HeroImage image="/images/movie-montage.jpg">
            <div className="header">
              <Logo />
              <button className="button AddMovie" type="button">+ ADD MOVIE</button>
            </div>
            <MovieFilter onChange={onChange} onSearch={onSearch} query={query} onEnter={onEnter} />
        </HeroImage>
      </Col>
    </Row>
  )
};

FindMovie.propTypes = {
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  query: PropTypes.string,
};

export default FindMovie;
