/* initial state */
const initialState = {
  form: {
    id: 0,
    title: '',
    content: '',
    writer: '',
    date: '',
  },
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
const CHANGE_FORM = 'books/CHANGE_FORM';
const INSERT = 'books/INSERT';
const CHANGE = 'books/CHANGE';
const REMOVE = 'books/REMOVE';

/* action creators */
export const changeForm = ({ id, title, content, writer, date }) => ({
  type: CHANGE_FORM,
  form: {
    id,
    title,
    content,
    writer,
    date,
  },
});

let id = 6;
export const insert = ({ title, content, writer, date }) => ({
  type: INSERT,
  book: {
    id: id++,
    title,
    content,
    writer,
    date,
  },
});

export const change = (id, content) => ({
  type: CHANGE,
  id,
  content,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

/* reducer */
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        form: action.form,
      };
    case INSERT:
      return {
        ...state,
        books: state.books.concat(action.book),
      };
    case CHANGE:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.id ? { ...book, content: book.content } : book
        ),
      };
    case REMOVE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    default:
      return state;
  }
}

export default booksReducer;
