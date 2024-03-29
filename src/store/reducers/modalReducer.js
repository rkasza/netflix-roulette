import * as actionTypes from '../actions/actionTypes';

const initialState = {
  show: false,
  modalBody: null,
  modalClassName: ''
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        ...payload,
        show: true
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...initialState
      };
    case actionTypes.CHANGE_MODAL_BODY:
      return {
        ...state,
        modalBody: payload
      }
    default:
      return state;
  }
};

export default modalReducer;