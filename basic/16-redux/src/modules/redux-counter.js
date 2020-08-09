import { createAction, handleActions } from 'redux-actions';

/* initial state */
const initialState = {
  number: 0,
};

/* actions */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* action creators */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/* reducer */
const counterReducer = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counterReducer;
