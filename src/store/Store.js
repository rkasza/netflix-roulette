import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Store = ({ children }) => <Provider store={store}>{children}</Provider>;

Store.propTypes = {
  children: PropTypes.node
};

export default Store;
