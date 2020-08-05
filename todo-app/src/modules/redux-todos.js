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
export const insert = ({ text, checked }) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    checked,
  },
});

export const remove = ({ id }) => ({
  type: REMOVE,
  id,
});

export const toggle = ({ id }) => ({
  type: TOGGLE,
  id,
});

/* reducer */
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !checked } : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
