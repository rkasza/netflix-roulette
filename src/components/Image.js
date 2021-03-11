import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      fallback: 'images/placeholder-movieimage.png'
    };
    this.handleOnError = this.handleOnError.bind(this);
  }

  handleOnError(event) {
    event.target.src = this.state.fallback;
  }
  render() {
    const { src } = this.state;
    return <img src={src}  {...this.props} onError={this.handleOnError} />; //eslint-disable-line
  }
}
Image.propTypes = {
  src: PropTypes.string.isRequired
};
export default Image
