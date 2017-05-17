import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counter-reducer';

const rootReducer = combineReducers({
  counterReducer,
  routing: routerReducer,
});

export default rootReducer;
