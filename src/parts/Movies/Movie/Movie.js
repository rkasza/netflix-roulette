import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GenreList from './GenreList';
import ReleaseYear from './ReleaseYear';
import Image from '../../../components/Image';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon'
import Popup from '../../../components/Popup/Popup';
import MovieMenu from './MovieMenu';
import MovieForm from '../../MovieForm/MovieForm';
import Confirm from '../../../components/Confirm';
import useModal from '../../../hooks/useModal';

const Movie = React.memo(({ movie, viewMovieDetails }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { modal, openModal } = useModal();

  const openEditModal = () => {
    const modalBody = <MovieForm formTitle="EDIT MOVIE" formData={movie} onSubmit={() => alert('Movie Edited')} />;
    openModal(modalBody, 'MovieFormModal');
  };

  const openConfrim = () => {
    const confirm = (
      <Confirm onConfirm={() => alert('MOVIE DELETEd')}>
        <h3>DELETE MOVIE</h3>
        <p>Are you sure you want to delete this movie?</p>
      </Confirm>
    );
    openModal(confirm, 'ConfirmModal');
  }

  const handleOnMouseEnter = () => setShowPopup(true);
  const handleOnMouseLeave = () => setShowPopup(false);

  const { title, poster_path, release_date, genres } = movie;

  return (
    <>
      <div className="Movie" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
        {showPopup && (
          <Popup button={<DotsVerticalIcon className="MovieMenuButton" size={40} />}>
            <MovieMenu>
              <MovieMenu.Item onClick={openEditModal}>Edit</MovieMenu.Item>
              <MovieMenu.Item onClick={openConfrim}>Delete</MovieMenu.Item>
            </MovieMenu>
          </Popup>
        )}
        <div className="Poster">
          <Image src={poster_path}  alt={title} />
        </div>
        <div className="Info">
          <h5>
            <span onClick={() => viewMovieDetails(movie)}className="MovieTitle">{title}</span>
            <ReleaseYear>{release_date}</ReleaseYear>
          </h5>
          <GenreList genres={genres} />
        </div>
      </div>
      {modal}
    </>
  )  
});

Movie.propTypes = {
  movie: PropTypes.object
};
export default Movie;