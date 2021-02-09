import React, { Component } from 'react';

export default class HelloWorldWithClass extends Component {
  render() {
    return <h1 style={this.props.style}>{this.props.children}</h1>
  };
};
