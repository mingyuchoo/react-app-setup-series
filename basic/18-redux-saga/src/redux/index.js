import { combineReducers } from 'redux';
import apiReducer, { apiSaga } from './api';
import loadingReducer from './loading';

import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  apiReducer,
  loadingReducer,
});

export function* rootSaga() {
  yield all([apiSaga()]);
}

export default rootReducer;
