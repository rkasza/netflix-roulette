import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../../../components/Skeleton/Col';
import './SortBy.css';
//TODO: Move option values to CONSTANTS
const SortBy = ({ onChange, value = 'release_date' }) => {
  return (
    <Col size={6} className="SortByWrapper">
      <label htmlFor="sortMovies">SORT BY</label>
      <select id="sortMovies" onChange={e => onChange(e.target.value)} value={value}>
        <option value="release_date">Release Date</option>
        <option value="voting_avarage">Rating</option>
      </select>
    </Col>
  );
};

SortBy.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortBy;
