import React, { useState, useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import styled from 'styled-components';

const StyledTodoForm = styled.form`
margin 3rem;
text-align: center;
`;

const StyledTodoInput = styled.input`
  margin: 0rem 0.5rem 0rem 1rem;
  padding 1rem;
`;
const StyledTodoButton = styled.button`
  margin: 0rem 1rem 0rem 0.5rem;
  padding 1rem;
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
