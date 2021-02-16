import React from 'react';
import Row from '../../../components/Skeleton/Row';
import Col from '../../../components/Skeleton/Col';
import HeroImage from '../HeroImage/HeroImage';
import Logo from '../../../components/Logo/Logo';
import MovieFilter from './MovieFilter';

const FindMovie = () => {
  return (
    <Row className="FindMovieWrapper">
      <Col size={12}>
        <HeroImage image="/images/movie-montage.jpg">
          <div style={{ padding: '0.2em 1em' }}>
            <div className="header">
              <Logo />
              <button className="button AddMovie" type="button">+ ADD MOVIE</button>
            </div>
            <MovieFilter />
          </div>
        </HeroImage>
      </Col>
    </Row>
  )
};

export default FindMovie;
