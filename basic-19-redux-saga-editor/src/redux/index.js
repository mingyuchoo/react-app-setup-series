import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import apiReducer, { apiSaga } from './api';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  apiReducer,
  loadingReducer,
});

export function* rootSaga() {
  yield all([apiSaga()]);
}

export default rootReducer;
