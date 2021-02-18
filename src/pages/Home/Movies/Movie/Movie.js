import React from 'react';
import GenreList from './GenreList';
import ReleaseYear from './ReleaseYear';
import Image from '../../../../components/Image';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon'

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuButton: false
    }
  }

  handleOnMouseEnter () {
    this.setState({ showMenuButton: true });
  }

  handleOnMouseLeave () {
    this.setState({ showMenuButton: false });
  }
  render() {
    const { title, poster_path, release_date, genres } = this.props;
    const { showMenuButton } = this.state;
    return (
      <div className="Movie" onMouseEnter={this.handleOnMouseEnter.bind(this)} onMouseLeave={this.handleOnMouseLeave.bind(this)} >
        {showMenuButton && <DotsVerticalIcon  className="MovieMenuButton" size={40}/>}
        <div className="Poster">
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
  }
  
};

export default Movie;
