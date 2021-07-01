import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.a`
  font-size: 5em;
  font-weight: bold;
  text-decoration: none;
  color: #da0037;
  margin: 0.5em;
`;

const NewsTitle = () => {
  const title = 'NewsAPI.org';
  const URL = 'https://newsapi.org';
  return (
    <StyledTitle href={URL} target="_black">
      {title}
    </StyledTitle>
  );
};

export default NewsTitle;
