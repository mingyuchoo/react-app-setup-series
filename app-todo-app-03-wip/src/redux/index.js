import { combineReducers } from 'redux';
import apiReducer, { apiSaga } from './redux-api';
import loadingReducer from './redux-loading';
import todosReducer from './redux-todos';

const rootReducer = combineReducers({
  apiReducer,
  loadingReducer,
  todosReducer,
});

export function* rootSaga() {
  yield all([apiSaga()]);
}

export default rootReducer;
