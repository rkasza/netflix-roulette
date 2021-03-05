import React from 'react'
import Modal from '../components/Modal/Modal';

// const emptyFormData = {
//   id: null,
//   title: '',
//   release_date: new Date().toISOString().split('T')[0], // date,
//   poster_path: '',
//   genres: [],  // multiple options
//   overview: '',
//   runtime: '' // in minutes 
// }

const withModal = (WrappedComponent, getFormData, onSubmit) => {
  return class extends React.Component {
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
      this.setState({ showModal: !this.state.showModal, modalBody: null })
    }
    openModal(modalBody, modalClassName) {
      this.setState({ showModal: true, modalBody, modalClassName });
    }

    render () {
      const { showModal, modalBody, modalClassName } = this.state;
      return (
        <>
          <WrappedComponent openModal={this.openModal} {...this.props}/>
          {showModal && (
            //(ADD-EDIT)-DELETE
            <Modal onClose={this.closeModal} className={modalClassName}>{modalBody}</Modal>
          )}
        </>
      );
    }
  }
}
//
export default withModal
