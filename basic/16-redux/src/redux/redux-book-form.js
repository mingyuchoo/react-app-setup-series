import { createAction, handleActions, handleAction } from 'redux-actions';

/* initial state */
const initialState = {
  form: {
    id: 0,
    title: '',
    content: '',
    writer: '',
    date: '',
  },
};
/* actions */
const CHANGE_FORM = 'books/CHANGE_FORM';

/* action creators */
export const changeForm = createAction(CHANGE_FORM);

/* reducer */
const bookFormReducer = handleActions(
  {
    [CHANGE_FORM]: (state, action) => ({
      ...state,
      form: action.payload,
    }),
  },
  initialState
);

export default bookFormReducer;
