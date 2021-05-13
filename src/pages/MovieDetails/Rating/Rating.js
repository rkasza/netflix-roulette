import PropTypes from 'prop-types';
import './Rating.css';

export const INVALID_RATING = 'N/A';

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
  let rating = children;
  let className = 'MovieRating';
  if (typeof children !== 'number' || children < 0 || children > 10) {
    rating = INVALID_RATING;
    className = `${className} InvalidRating`;
  }
  
  return <span className={className} style={{color: getRatingColor(rating)}}>{rating}</span>;
};

Rating.propTypes = {
  children: PropTypes.number
};

export default Rating;
