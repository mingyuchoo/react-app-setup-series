import React from 'react';

const BookItem = ({ book, onChangeForm, onRemove }) => {
  const onClickRemove = () => {
    onRemove(book.id);
  };
  const onClickContent = () => {
    onChangeForm({
      id: book.id, 
      title: book.title, 
      content: book.content, 
      writer: book.writer, 
      date: book.date
    })
    console.log('BookItem - onClickContent - onChangeForm')
  }

  return (
    <tr className="item">
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td className="content" onClick={onClickContent}>{book.content}</td>
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
