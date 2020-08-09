import { combineReducers } from 'redux';
import counterReducer from './redux-counter';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
