import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../components/Skeleton/Row';
import Col from '../../../components/Skeleton/Col';
import HeroImage from '../HeroImage/HeroImage';
import Logo from '../../../components/Logo/Logo';
import MovieFilter from './MovieFilter';
import withModal from '../../../hoc/withModal';
import MovieForm from '../Movies/MovieForm/MovieForm';

const emptyFormData = {
  id: null,
  title: '',
  release_date: new Date().toISOString().split('T')[0], // date,
  poster_path: '',
  genres: [],  // multiple options
  overview: '',
  runtime: '' // in minutes 
}

class FindMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: emptyFormData,
    }
    this.openAddModal = this.openAddModal.bind(this);
  }
  openAddModal() {
    const newMovieForm = <MovieForm formTitle="ADD MOVIE" formData={emptyFormData} onSubmit={() => alert('Movie Created')} />;
    this.props.openModal(newMovieForm, 'MovieForm');
  }
  render() {
    
    const { onSubmit, query, onChange  } = this.props;
    
    return (
      <Row className="FindMovieWrapper">
        <Col size={12}>
          <HeroImage image="/images/movie-montage.jpg">
              <div className="header">
                <Logo />
                <button className="button AddMovie" type="button" onClick={this.openAddModal}>+ ADD MOVIE</button>
              </div>
              <MovieFilter onChange={onChange} onSubmit={onSubmit} query={query} />
          </HeroImage>
        </Col>
      </Row>
    )
  }
}

FindMovie.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  query: PropTypes.string,
};

export default withModal(FindMovie);
