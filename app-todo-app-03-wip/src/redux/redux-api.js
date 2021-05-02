import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import * as api from '../lib/api';

// initial state
const initialState = {
  todos: null,
};

// actions
const GET_TODOS = 'api/GET_TODOS';
const GET_TODOS_SUCCESS = 'api/GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'api/GET_TODOS_FAILURE';

export const getTodos = createAction(GET_TODOS);

// todos
function* getTodosSaga(action) {
  yield put(startLoading(GET_TODOS));
  try {
    const todos = yield call(api.getTodos);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: todos.data,
    });
  } catch (e) {
    yield put({
      type: GET_TODOS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_TODOS));
}

export function* apiSaga() {
  yield takeLatest(GET_TODOS, getTodosSaga);
}

// reducer
const apiReducer = handleActions(
  {
    [GET_TODOS_SUCCESS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_TODOS: false,
      },
      todos: aciton.payload,
    }),
  },
  initialState
);

export default apiReducer;
