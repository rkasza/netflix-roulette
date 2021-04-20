import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  movieState: movieReducer,
  modalState: modalReducer
});

export default rootReducer;
