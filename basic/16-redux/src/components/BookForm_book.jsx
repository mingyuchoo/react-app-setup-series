import React, { useState, useCallback } from 'react';

const BookForm = ({ form, onChangeForm, onInsert, onChange }) => {
  const [book, setBook] = useState({
    title: '',
    content: '',
    writer: '',
    date: '',
  });

  const onChangeTitle = useCallback((event) => {
    setBook({ ...book, title: event.target.value });
    console.log(book);
  }, [book]);

  const onChangeContent = useCallback((event) => {
    setBook({ ...book, content: event.target.value });
    console.log(book);
  }, [book]);

  const onChangeWriter = useCallback((event) => {
    setBook({ ...book, writer: event.target.value });
    console.log(book);
  }, [book]);

  const onChangeDate = useCallback((event) => {
    setBook({ ...book, date: event.target.value });
    console.log(book);
  }, [book]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    onInsert({ ...book });
    setBook({
      title: '',
      content: '',
      writer: '',
      date: '',
    })
  }, [book]);;

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
