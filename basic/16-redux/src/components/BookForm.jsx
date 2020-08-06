import React, { useState, useCallback } from 'react';

const FormForm = ({ form, onChangeForm, onInsert, onChange }) => {
  const onChangeTitle = useCallback((event) => {
    onChangeForm({ ...form, title: event.target.value });
    console.log(form);
  }, [form]);

  const onChangeContent = useCallback((event) => {
    onChangeForm({ ...form, content: event.target.value });
    console.log(form);
  }, [form]);

  const onChangeWriter = useCallback((event) => {
    onChangeForm({ ...form, writer: event.target.value });
    console.log(form);
  }, [form]);

  const onChangeDate = useCallback((event) => {
    onChangeForm({ ...form, date: event.target.value });
    console.log(form);
  }, [form]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    
    onInsert({ ...form });
    // onChange({ ...form });
    onChangeForm({
      id: 0,
      title: '',
      content: '',
      writer: '',
      date: '',
    })
  }, [form]);;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control form-control-sm"
          id="title"
          type="text"
          placeholder="Title"
          value={form.title}
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
          value={form.content}
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
          value={form.writer}
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
          value={form.date}
          onChange={onChangeDate}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormForm;
