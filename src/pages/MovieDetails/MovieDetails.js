import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import { getMovie } from '../../store/actions/movieActions'
import HeroImage from '../../parts/HeroImage/HeroImage';
import Logo from '../../components/Logo/Logo';
import './MovieDetails.css';
import Image from '../../components/Image';
import GenreList from '../../parts/Movies/Movie/GenreList';
import ReleaseYear from '../../parts/Movies/Movie/ReleaseYear';
import Raitng from './Rating/Raitng';
import RunTime from './Runtime';

const MovieDetails = () => {
  const movie = useSelector(({ movieState }) => movieState.movie);
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      if(movieId) {
        try {
          await dispatch(getMovie(movieId));
          window.scrollTo(0,0);
        } catch (error) {
          //TODO: Handle notfound status
        }
      }
    })();
  }, [movieId, dispatch]);

  return movie && (
    <HeroImage className="MovieDetails" image="/images/movie-montage.jpg" alpha={0.95}>
      <div className="header">
        <Logo />
        <Link to="/"><MagnifyIcon className="SearchMovie" color="#f65261" size={30} /></Link>
      </div>
      <div className="MovieDetails">
        <Image src={movie.poster_path}  className="Poster"/>
        <div className="MovieInfo">
          <h1 className="MovieTitle">{movie.title} <Raitng>{movie.vote_average}</Raitng></h1>
          <GenreList genres={movie.genres} />
          <div style={{marginBottom: '1em'}}>
            <ReleaseYear>{movie.release_date}</ReleaseYear>
            <RunTime className="MovieRuntime">{+movie.runtime}</RunTime>
          </div>          
          <p>{movie.overview}</p>
        </div>
      </div>
    </HeroImage>
  );
}

export default MovieDetails;
