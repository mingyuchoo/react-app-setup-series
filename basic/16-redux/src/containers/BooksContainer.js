import React from 'react';
import { connect } from 'react-redux';
import { changeForm, insert, change, remove } from '../modules/redux-books';

import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BooksContainer = ({
  form,
  books,
  changeForm,
  insert,
  change,
  remove,
}) => {
  return (
    <>
      <BookForm
        form={form}
        onChangeForm={changeForm}
        onInsert={insert}
        onChange={change}
      />
      <BookList books={books} onChangeForm={changeForm} onRemove={remove} />
    </>
  );
};

export default connect(
  ({ booksReducer }) => ({
    form: booksReducer.form,
    books: booksReducer.books,
  }),
  { changeForm, insert, change, remove }
)(BooksContainer);
