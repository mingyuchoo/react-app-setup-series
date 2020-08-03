import { combineReducers } from 'redux';
import counterReducer from './redux-counter';
import todosReduceer from './redux-todos';

const rootReducer = combineReducers({
  counterReducer,
  todosReduceer,
});

export default rootReducer;
