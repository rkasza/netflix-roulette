import * as actionTypes from './actionTypes';

export const openModal = (modalBody, modalClassName) => ({ type: actionTypes.OPEN_MODAL, payload: { modalBody, modalClassName } });
export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL });