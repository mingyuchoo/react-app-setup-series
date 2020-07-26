import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChangeTodoInsert = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmitTodoInsert = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value] // 사용하는 props, state 넣음
  );

  return (
    <form className="todo-insert" onSubmit={onSubmitTodoInsert}>
      <input
        className="todo-insert"
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChangeTodoInsert}
      />
      <button className="todo-button" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
