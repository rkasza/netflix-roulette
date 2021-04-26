import { useDispatch } from 'react-redux';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';
import HeroImage from '../../parts/HeroImage/HeroImage';
import Logo from '../../components/Logo/Logo';
import MovieFilter from './FindMovieForm';
import MovieForm from '../../parts/MovieForm/MovieForm';
import useModal from '../../hooks/useModal';
import { createMovie } from '../../store/actions/movieActions';


const Home = () => {
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const handleOnSubmit = newMovie => {
    dispatch(createMovie(newMovie));
  };
  const handleOnClick = () => {
    const modalBody = <MovieForm formTitle="ADD MOVIE" onSubmit={handleOnSubmit} />;
    openModal(modalBody, 'MovieFormModal');
  };

  return (
    <Row className="FindMovieWrapper">
      <Col size={12}>
        <HeroImage image="/images/movie-montage.jpg">
          <div className="header">
            <Logo />
            <button className="button AddMovie" type="button" onClick={handleOnClick}>+ ADD MOVIE</button>
          </div>
          <MovieFilter />
        </HeroImage>
      </Col>
    </Row>
  );
};

export default Home;
