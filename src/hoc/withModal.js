import { Component } from 'react'
import Modal from '../components/Modal/Modal';


const withModal = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalBody: null,
        showModal: false,
        modalClassName: ''
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }
    closeModal () {
      this.setState({ showModal: !this.state.showModal, modalBody: null });
    }
    openModal(modalBody, modalClassName) {
      this.setState({ showModal: true, modalBody, modalClassName });
    }

    render () {
      const { showModal, modalBody, modalClassName } = this.state;
      return (
        <>
          <WrappedComponent openModal={this.openModal} {...this.props}/>
          {showModal && <Modal onClose={this.closeModal} className={modalClassName}>{modalBody}</Modal>}
        </>
      );
    }
  }
}
//
export default withModal;
