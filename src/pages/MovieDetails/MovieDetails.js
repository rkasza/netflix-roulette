import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from '../../parts/HeroImage/HeroImage';
import Logo from '../../components/Logo/Logo';
import './MovieDetails.css';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import Image from '../../components/Image';
import GenreList from '../../parts/Movies/Movie/GenreList';
import ReleaseYear from '../../parts/Movies/Movie/ReleaseYear';
import Raitng from './Rating/Raitng';
import RunTime from './Runtime';

const MovieDetails = ({ movie, backHome }) => {
  return (
    <HeroImage className="MovieDetails" image="/images/movie-montage.jpg" alpha={0.95}>
      <div className="header">
        <Logo />
        <MagnifyIcon className="SearchMovie" color="#f65261" size={30} onClick={backHome}/>
      </div>
      <div className="MovieDetails">
        <Image src={movie.poster_path}  className="Poster"/>
        <div className="MovieInfo">
          <h1 className="MovieTitle">{movie.title} <Raitng>{movie.vote_average}</Raitng></h1>
          <GenreList genres={movie.genres} />
          <div style={{marginBottom: '1em'}}>
            <ReleaseYear>{movie.release_date}</ReleaseYear>
            <RunTime className="MovieRuntime">{movie.runtime}</RunTime>
          </div>          
          <p>{movie.overview}</p>
        </div>
      </div>
    </HeroImage>
  )
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
  backHome: PropTypes.func
};

export default MovieDetails;
