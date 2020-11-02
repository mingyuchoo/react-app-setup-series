import React, { useState, useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChangeTodoInsert = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const onSubmitTodoInsert = useCallback(
    (event) => {
      event.preventDefault();
      console.log(text);
      onInsert(text);
      setText('');
    },
    [onInsert, text]
  );

  return (
    <form className="grid" onSubmit={onSubmitTodoInsert}>
      <input
        className="grid_item first"
        type="text"
        placeholder="INSERT HERE."
        value={text}
        onChange={onChangeTodoInsert}
        required={true}
      />
      <button className="grid_item first" type="submit">
        <FiPlusCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
