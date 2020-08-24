import { createAction, handleActions } from 'redux-actions';

const initialState = {
  todos: [
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '콤포넌트 스타일해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false,
    },
  ],
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

/* reducer */

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
