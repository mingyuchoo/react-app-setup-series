import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const GET_POST = 'api/GET_POST';
const GET_POST_SUCCESS = 'api/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'api/GET_POST_FAILURE';

const GET_USERS = 'api/GET_USERS';
const GET_USERS_SUCCESS = 'api/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'api/GET_USERS_FAILURE';

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const apiReducer = handleActions(
  {
    [GET_POST]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_POST_FAILURE]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USERS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true,
      },
    }),
    [GET_USERS_SUCCESS]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
    [GET_USERS_FAILURE]: (state, aciton) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
  },
  initialState
);

export default apiReducer;
