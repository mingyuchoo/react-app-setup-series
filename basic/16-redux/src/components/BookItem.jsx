import React from 'react';

const BookItem = ({ book, onRemove }) => {
  const onClickRemove = () => {
    onRemove(book.id);
  };
  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.content}</td>
      <td>{book.writer}</td>
      <td>{book.date}</td>
      <td>
        <button className="btn btn-light" onClick={onClickRemove}>
          x
        </button>
      </td>
    </tr>
  );
};

export default BookItem;
