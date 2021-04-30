import PropTypes from 'prop-types';
import './Rating.css';

const getRatingColor = rating => {
  if (rating >= 8 && rating <= 10) {
    return '#7bb256';
  } else if (rating >= 6 && rating <= 8) {
    return '#fdff00';
  } else if (rating >= 4 && rating <= 6) {
    return '#ffa500';
  } else {
    return '#f65261';
  }
}

const Rating = ({ children }) => <span className="MovieRating" style={{color: getRatingColor(children)}}>{children}</span>;


Rating.propTypes = {
  children: PropTypes.number.isRequired
};

export default Rating;
