import React, { useState } from 'react';

const BookForm = ({ form, onChangeForm, onInsert, onChange }) => {
  const [book, setBook] = useState({
    title: '',
    content: '',
    writer: '',
    date: '',
  });

  const onChangeTitle = (event) => {
    setBook({ ...book, title: event.target.value });
  };

  const onChangeContent = (event) => {
    setBook({ ...book, content: event.target.value });
  };

  const onChangeWriter = (event) => {
    setBook({ ...book, writer: event.target.value });
  };

  const onChangeDate = (event) => {
    setBook({ ...book, date: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onInsert({ ...book });
    console.log(book);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control form-control-sm"
          id="title"
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <input
          className="form-control form-control-sm"
          id="content"
          type="text"
          placeholder="Content"
          value={book.content}
          onChange={onChangeContent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Writer</label>
        <input
          className="form-control form-control-sm"
          id="name"
          type="text"
          placeholder="Name"
          value={book.writer}
          onChange={onChangeWriter}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          className="form-control form-control-sm"
          id="date"
          type="text"
          placeholder="Date"
          value={book.date}
          onChange={onChangeDate}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
