import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/index';

export const defaultState = {};

const loggerMiddleware = createLogger();

function configureStore() {
  return createStore(rootReducer, applyMiddleware(loggerMiddleware));
}

export default configureStore;
