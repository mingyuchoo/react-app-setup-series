import React from 'react';
import { connect } from 'react-redux';
import { insert, change, remove } from '../redux/redux-books';
import { changeForm } from '../redux/redux-book-form';

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
  ({ bookFormReducer, booksReducer }) => ({
    form: bookFormReducer.form,
    books: booksReducer.books,
  }),

  {
    // 액션 생성함수로 이루어진 객체 형태로 넘겨주면
    // connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
    changeForm,
    insert,
    change,
    remove,
  }
)(BooksContainer);
