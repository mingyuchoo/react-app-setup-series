import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onRemove }) => {
  return (
    <div className="row">
      <table className="table">
        <caption>BooK list</caption>
        <thead className="thead-light">
          <tr>
            <th scope="col">no</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">writer</th>
            <th scope="col">date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem key={book.id} book={book} onRemove={onRemove} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
