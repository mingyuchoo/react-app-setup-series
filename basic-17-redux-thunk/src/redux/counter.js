import { createAction, handleActions } from 'redux-actions';

// initial
const initialState = 0;

// actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// reducer
const counterReducer = handleActions(
  {
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1,
  },
  initialState
);

export default counterReducer;
