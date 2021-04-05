import * as actionTypes from '../actions/actionTypes';

const initialState = {
  show: false,
  modalBody: null,
  modalClassName: ''
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        show: true
      };
    case actionTypes.STORE_MOVIE:
      return {
        ...state,
        movie: payload.movie
      };
    default:
      return state;
  }
};

export default modalReducer;