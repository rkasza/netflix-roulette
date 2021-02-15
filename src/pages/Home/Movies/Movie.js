import React from 'react';
import Col from '../../../components/Skeleton/Col';
const Movie = ({ title, poster_path, release_date, genres }) => (
  <div className="Movie">
    <div className="Poster">
      <img src={poster_path} alt={title} />
    </div>
    <div className="Info">
        <h5>
          {title}
          <span className="ReleaseDate">{release_date.slice(0, 4)}</span>
        </h5>
      <div>{genres.map(g => <span>{g}</span>)}</div> {/* TODO: Create Component */}
    </div>
  </div>
);

export default Movie;
