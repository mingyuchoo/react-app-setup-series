import { createAction, handleActions } from 'redux-actions';

// initial
const initialState = 0;

// actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducer
const counterReducer = handleActions(
  {
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1,
  },
  initialState
);

export default counterReducer;
