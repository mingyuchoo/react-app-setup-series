import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

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
// export const insert = ({ text }) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text: text,
//     checked: false,
//   },
// });

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text: text,
  checked: false,
}));

// export const remove = ({ id }) => ({
//   type: REMOVE,
//   id,
// });

export const remove = createAction(REMOVE, (id) => id);

// export const toggle = ({ id }) => ({
//   type: TOGGLE,
//   id,
// });

export const toggle = createAction(TOGGLE, (id) => id);

/* reducer */
// const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
//         ),
//       };
//     default:
//       return state;
//   }
// };

const todosReducer = handleActions(
  {
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        // ...state,
        // todos: state.todos.concat(todo),
        draft.todos.push(todo);
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        // ...state,
        // todos: state.todos.filter((todo) => todo.id !== id),
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        // ...state,
        // todos: state.todos.map((todo) =>
        //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
        // ),
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.checked = !todo.checked;
      }),
  },
  initialState
);
export default todosReducer;
