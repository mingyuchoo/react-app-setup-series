import React, { useState, useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import styled from 'styled-components';

const StyledTodoForm = styled.form`
  margin 1rem auto;
  width 100%;
  // border dashed 1px red;

`;

const StyledTodoInput = styled.input`
  margin: auto;
  padding 1rem;
`;
const StyledTodoButton = styled.button`
  margin-left: 2.5rem;
  padding 1rem;
  width: 20%;
  cursor: pointer;
`;

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
    <StyledTodoForm onSubmit={onSubmitTodoInsert}>
      <StyledTodoInput
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={onChangeTodoInsert}
        required={true}
      />
      <StyledTodoButton type="submit">
        <FiPlusCircle />
      </StyledTodoButton>
    </StyledTodoForm>
  );
};

export default TodoInsert;
