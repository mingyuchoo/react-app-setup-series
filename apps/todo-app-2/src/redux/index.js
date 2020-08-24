import { combineReducers } from 'redux';
import todosReducer from './redux-todos';

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
