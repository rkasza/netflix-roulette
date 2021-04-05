import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import movieReducer from "./reducers/movie";


const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
      }
  }
};

const store = createStore(movieReducer, applyMiddleware(thunk));

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Store;
