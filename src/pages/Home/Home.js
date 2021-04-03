import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';
import HeroImage from '../../parts/HeroImage/HeroImage';
import Logo from '../../components/Logo/Logo';
import MovieFilter from './MovieFilter';
import MovieForm from '../../parts/MovieForm/MovieForm';
import useModal from '../../hooks/useModal';

const Home = ({ onSubmit, query, onChange }) => {
  const { modal, openModal } = useModal();

  const handleOnClick = () => {
   const modalBody = <MovieForm formTitle="ADD MOVIE" onSubmit={() => alert('Movie Created')} />;
   openModal(modalBody, 'MovieFormModal');
  }

  return (
    <>
      <Row className="FindMovieWrapper">
        <Col size={12}>
          <HeroImage image="/images/movie-montage.jpg">
              <div className="header">
                <Logo />
                <button className="button AddMovie" type="button" onClick={handleOnClick}>+ ADD MOVIE</button>
              </div>
              <MovieFilter onChange={onChange} onSubmit={onSubmit} query={query} />
          </HeroImage>
        </Col>
      </Row>
      {modal}
    </>
  );
};

Home.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  query: PropTypes.string,
};

export default Home;
