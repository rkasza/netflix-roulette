import React, { Component } from 'react';
import Row from '../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';

class ResultController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      sortBy: 1
    };
  }
  selectGenre (selected) {
    this.setState({ selected });
  }
  sortMovies (sortBy) {
    this.setState({ sortBy });
  }
  render() {
    const { selected, sortBy } = this.state;
    return (
      <Row className="ResultController">
        <Genres selected={selected} handleSelect={this.selectGenre.bind(this)} />
        <SortBy value={sortBy} onChange={this.sortMovies.bind(this)} />
      </Row>
    )
  }

};


export default ResultController;