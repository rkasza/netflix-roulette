import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Col from '../../components/Skeleton/Col';
import Row from '../../components/Skeleton/Row';
import './FindMovie.css';
import { updateMovieParam, resetState } from '../../store/actions/movieActions';

const MovieFilter = () => {
  const { query, lastQuery } = useSelector(({ movieState }) => movieState);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    if (query !== lastQuery) {
      if (query !== '') {
        history.push(`/search/${query}`);
      } else {
        dispatch(resetState());
        history.push('/');
      }
    }
  };

  const handleOnChange = event => dispatch(updateMovieParam({ query: event.target.value }));
  return (
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
            onChange={handleOnChange}/>
        </Col>
        <Col size={3}>
          <button className="button-primary u-full-width search" type="submit">Search</button>
        </Col>
      </Row>
    </form>
  );
};

export default MovieFilter;
