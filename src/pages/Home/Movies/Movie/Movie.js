import React from 'react';
import GenreList from './GenreList';
import ReleaseYear from './ReleaseYear';
import Image from '../../../../components/Image';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon'
import Popup from '../../../../components/Popup/Popup';
import MovieMenu from './MovieMenu';
import MovieForm from '../MovieForm/MovieForm';
import withModal from '../../../../hoc/withModal';
import Confirm from '../../../../components/Confirm';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.openConfrim = this.openConfrim.bind(this);
  }

  handleOnMouseEnter () {
    this.setState({ showPopup: true });
  }

  handleOnMouseLeave () {
    this.setState({ showPopup: false });
  }

  openEditModal() {
    const editMovieForm = <MovieForm formTitle="EDIT MOVIE" formData={this.props.movie} onSubmit={() => alert('Movie Edited')} />;
    this.props.openModal(editMovieForm, 'MovieForm');
  }
  openConfrim() {
    const confirm = (
      <Confirm onConfirm={() => alert('MOVIE DELETEd')}>
        <h3>DELETE MOVIE</h3>
        <p>Are you sure you want to delete this movie?</p>
      </Confirm>
    );
    this.props.openModal(confirm, 'ConfirmModal');
  }

  render() {
    const { movie : {title, poster_path, release_date, genres } } = this.props;
    const { showPopup } = this.state;
    
    return (
      <div className="Movie" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} >
        {showPopup && (
          <Popup button={<DotsVerticalIcon className="MovieMenuButton" size={40} />}>
            <MovieMenu>
              <MovieMenu.Item onClick={this.openEditModal}>Edit</MovieMenu.Item>
              <MovieMenu.Item onClick={this.openConfrim}>Delete</MovieMenu.Item>
            </MovieMenu>
          </Popup>
        )}
        <div className="Poster">
          <Image src={poster_path}  alt={title} />
        </div>
        <div className="Info">
          <h5>
            {title}
            <ReleaseYear>{release_date}</ReleaseYear>
          </h5>
          <GenreList genres={genres} />
        </div>
      </div>
    )
  }
  
};

export default withModal(Movie);
