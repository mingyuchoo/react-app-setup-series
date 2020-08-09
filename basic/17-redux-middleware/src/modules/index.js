import { combineReducers } from 'redux';
import counterReducer from './redux-counter';
import apiReducer from './redux-api';
const rootReducer = combineReducers({
  counterReducer,
  apiReducer,
});

export default rootReducer;
