import { createAction, handleActions } from 'redux-actions';

const initialState = {
  todos: [],
};

/* actions */
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

/* action creators */
let id = 4;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text: text,
  checked: false,
}));

export const remove = createAction(REMOVE, (id) => id);

export const toggle = createAction(TOGGLE, (id) => id);

const todosReducer = handleActions(
  {
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    }),
  },
  initialState
);
export default todosReducer;
