import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(promise, thunk, logger));

export default store;
