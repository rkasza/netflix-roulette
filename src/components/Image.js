import React, { Component } from 'react'

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
    event.target.src = this.state.fallback
  }
  render() {
    const { src } = this.state;
    // need to take out src from props because it will overwrite the fallback src if not found
    const { src: _src, ...props } = this.props;
    return <img src={src}  {...props} onError={this.handleOnError} /> //eslint-disable-line
  }
}

export default Image
