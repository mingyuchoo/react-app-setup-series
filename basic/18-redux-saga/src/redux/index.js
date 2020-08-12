import { combineReducers } from 'redux';
import counterReducer, { counterSaga } from './counter';
import apiReducer, { apiSaga } from './api';
import loadingReducer from './loading';

import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counterReducer,
  apiReducer,
  loadingReducer,
});

export function* rootSaga() {
  yield all([counterSaga(), apiSaga()]);
}

export default rootReducer;
