import React from 'react';
import Col from '../../../../../components/Skeleton/Col';
import './SortBy.css';
const SortBy = ({ onChange, value = 1 }) => {
  return (
    <Col size={6} className="SortByWrapper">
      <label htmlFor="sortMovies">SORT BY</label>
      <select id="sortMovies" onChange={e => onChange(e.target.value)} value={value}>
        <option value="1">Release Date</option>
        <option value="2">Rating</option>
      </select>
    </Col>
  );
};

export default SortBy;
