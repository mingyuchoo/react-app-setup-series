import { combineReducers } from 'redux';
import counterReducer from './redux-counter';
import todosReduceer from './redux-todos';
import booksReducer from './redux-books';

const rootReducer = combineReducers({
  counterReducer,
  todosReduceer,
  booksReducer,
});

export default rootReducer;
