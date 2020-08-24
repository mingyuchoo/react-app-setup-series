import { combineReducers } from 'redux';
import counterReducer from './redux-counter';
import todosReduceer from './redux-todos';
import booksReducer from './redux-books';
import bookFormReducer from './redux-book-form';

const rootReducer = combineReducers({
  counterReducer,
  todosReduceer,
  booksReducer,
  bookFormReducer,
});

export default rootReducer;
