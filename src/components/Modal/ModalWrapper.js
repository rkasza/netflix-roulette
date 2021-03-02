import React from 'react';
import ReactDOM from 'react-dom';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = `Modal ${this.props.className}`;
    this.handleOverLayClick = this.handleOverLayClick.bind(this);
    this.el.addEventListener('click', this.handleOverLayClick);
  }
  componentDidMount() {
    document.body.appendChild(this.el);
    document.body.classList.add('ModalActive');
  }

  componentWillUnmount() {
      this.el.removeEventListener('click', this.onClose);
      document.body.removeChild(this.el);
      document.body.classList.remove('ModalActive');
  }
  handleOverLayClick (event) {
    if (event.target === this.el) {
      this.props.onClose();
    }
  }
  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
};

export default ModalWrapper;
