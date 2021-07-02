import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: auto;
  width: 50%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Random User Generator</h1>
    </StyledHeader>
  );
};

export default Header;
