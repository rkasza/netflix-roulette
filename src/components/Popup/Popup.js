import React, { Component } from 'react'
import './Popup.css';
import CloseIcon from 'mdi-react/CloseIcon';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }
  render() {
    const { button, children } = this.props;
    const { showPopup } = this.state;
    return (
      <div className="PopupWrapper">
        <div onClick={this.togglePopup}>
          {button}
        </div>
        {showPopup && (
          <div className="PopupContent">
            <CloseIcon className="PopupCloseIcon" onClick={this.togglePopup} />
            {children}
          </div>
        )}
      </div>
    )
  }
}

export default Popup;