import React, { PureComponent } from 'react';

export default class HelloWorldWithClass extends PureComponent {
  render() {
    return <h1 style={this.props.style}>{this.props.children}</h1>
  };
};
