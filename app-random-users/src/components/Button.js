import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  margin: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: Blue;
  cursor: pointer;
`;

const Button = ({ page, setPage, isLoading }) => {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        console.log(`load more page from ${page} to ${page + 1}`);
        setPage(page + 1);
      }}
      value={isLoading ? `Loading ...` : `Load more page to ${page + 1}`}
    />
  );
};

export default Button;
