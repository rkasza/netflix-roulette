import React from 'react';
import GenreList from './GenreList';
import ReleaseYear from './ReleaseYear';
import Image from '../../../../components/Image';

const Movie = props => {
  const { title, poster_path, release_date, genres } = props;
  
  return (
    <div className="Movie">
      <div className="Poster">
        {/* <img src={poster_path}  alt={title} onerror=""/> */}
        <Image src={poster_path}  alt={title} />
      </div>
      <div className="Info">
          <h5>
            {title}
            <ReleaseYear>{release_date.slice(0, 4)}</ReleaseYear>
          </h5>
          <GenreList genres={genres} />
      </div>
    </div>
  )
};

export default Movie;
