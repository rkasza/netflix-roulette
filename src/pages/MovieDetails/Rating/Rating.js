import PropTypes from 'prop-types';
import './Rating.css';

const INVALID_RATING = 'N/A';

export const getRatingColor = rating => {
  if (rating === INVALID_RATING) return '#fff';
  if (rating >= 8 && rating <= 10) {
    return '#7bb256';
  } else if (rating >= 6 && rating < 8) {
    return '#fdff00';
  } else if (rating >= 4 && rating < 6) {
    return '#ffa500';
  } else {
    return '#f65261';
  }
}

const Rating = ({ children }) => {
  const rating = children && (children > 0 && children < 10) ? children : INVALID_RATING;
  return <span className="MovieRating" style={{color: getRatingColor(rating)}}>{rating}</span>
};

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
