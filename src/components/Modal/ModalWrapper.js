import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = `Modal ${this.props.className}`;
  }
  componentDidMount() {
    document.body.appendChild(this.el);
    document.body.classList.add('ModalActive');
  }

  componentWillUnmount() {
      document.body.removeChild(this.el);
      document.body.classList.remove('ModalActive');
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
};

ModalWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalWrapper;
