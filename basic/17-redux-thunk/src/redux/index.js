import { combineReducers } from 'redux';
import counterReducer from './counter';
import apiReducer from './api';
const rootReducer = combineReducers({
  counterReducer,
  apiReducer,
});

export default rootReducer;
