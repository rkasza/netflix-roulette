import React from 'react';
import Col from '../../../components/Skeleton/Col';
import Row from '../../../components/Skeleton/Row';
import './FindMovie.css';

const MovieFilter = props => {
  return (
    <form className="FindMovieForm">
      <Row>
        <Col size={12} className="">
          <h4>FIND YOUR MOVIE</h4>
        </Col>
        
      </Row>
      <Row>
        <Col size={9} className="">
          <input className="u-full-width searchfield" type="text" placeholder="What do you want to watch?" id="movieQuery" />
        </Col>
        <Col size={3}>
          <input className="button-primary u-full-width search" type="submit" value="Search" />
        </Col>
      </Row>
    </form>
  )
};

export default MovieFilter;
