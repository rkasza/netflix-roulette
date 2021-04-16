import PropTypes from 'prop-types';
import Col from '../../../../components/Skeleton/Col';
import Genre from './Genre';
import './Genres.css';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

const Genres = ({ selected, handleSelect }) => (
  <Col size={6} className="GenreWrapper">
    {genres.map(genre => <Genre key={genre} active={selected === genre} genre={genre} handleSelect={handleSelect}/>)}
  </Col>
);

Genres.propTypes = {
  selected: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Genres;
