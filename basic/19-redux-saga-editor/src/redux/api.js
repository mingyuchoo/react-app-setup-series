import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import * as api from '../lib/api';

// initial state
const initialState = {
  users: null,
};

// actions
const GET_USERS = 'api/GET_USERS';
const GET_USERS_SUCCESS = 'api/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'api/GET_USERS_FAILURE';

export const getUsers = createAction(GET_USERS);

// users
function* getUsersSaga(action) {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}

export function* apiSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
}

// reducer
const apiReducer = handleActions(
  {
    [GET_USERS_SUCCESS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: aciton.payload,
    }),
  },
  initialState
);

export default apiReducer;
