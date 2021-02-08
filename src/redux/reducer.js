import { INCREMENT, DECREMENT } from './actionTypes';
const initialState = {
  counter: 0
};

export default function(state = initialState, action) {
  console.log
  switch(action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
}