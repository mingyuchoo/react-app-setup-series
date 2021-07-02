import React from 'react';
import styled from 'styled-components';

const StyledLoadButton = styled.input`
  margin: auto;
  width: 100%;
  padding: 2rem;
  color: green;
  font-size: 3rem;
  cursor: pointer;
`;

const LoadButton = ({ page, setPage }) => {
  return (
    <StyledLoadButton
      type="button"
      onClick={() => {
        console.log(`Load more page from ${page} to ${page + 1}`);
        setPage(page + 1);
      }}
      value="Load More"
    />
  );
};

export default LoadButton;
