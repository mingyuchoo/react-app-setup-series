import { createAction, handleActions } from 'redux-actions';

/* initial state */
const initialState = {
  books: [
    {
      id: 1,
      title: 'React',
      content: 'Learn React',
      writer: 'Chris',
      date: '2020.05.08',
    },
    {
      id: 2,
      title: 'Auction',
      content: 'Do Auction',
      writer: 'Song',
      date: '2020.08.05',
    },
    {
      id: 3,
      title: 'Stock',
      content: 'Buy stocks',
      writer: 'Yi',
      date: '2020.01.01',
    },
    {
      id: 4,
      title: 'Laptop',
      content: 'Select the best laptop',
      writer: 'Choo',
      date: '2020.03.23',
    },
    {
      id: 5,
      title: 'Agile',
      content: 'Change working culture',
      writer: 'Keysey',
      date: '2019.09.02',
    },
  ],
};
/* actions */
const INSERT = 'books/INSERT';
const CHANGE = 'books/CHANGE';
const REMOVE = 'books/REMOVE';

/* action creators */
let id = 6;
export const insert = createAction(INSERT);
export const change = createAction(CHANGE);
export const remove = createAction(REMOVE);

/* reducer */

const booksReducer = handleActions(
  {
    [INSERT]: (state, action) => ({
      ...state,
      books: state.books.concat({ ...action.payload, id: id++ }),
    }),
    [CHANGE]: (state, action) => ({
      ...state,
      books: state.books.map((book) =>
        book.id === action.payload.id
          ? { ...book, content: action.payload.content }
          : book
      ),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
  initialState
);
export default booksReducer;
