import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import * as api from '../lib/api';

// initial state
const initialState = {
  post: null,
  users: null,
};

// actions
const GET_POST = 'api/GET_POST';
const GET_POST_SUCCESS = 'api/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'api/GET_POST_FAILURE';

const GET_USERS = 'api/GET_USERS';
const GET_USERS_SUCCESS = 'api/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'api/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

// post
function* getPostSaga(action) {
  yield put(startLoading(GET_POST)); // 로딩 시작
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

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
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// reducer
const apiReducer = handleActions(
  {
    [GET_POST_SUCCESS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: aciton.payload,
    }),
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
