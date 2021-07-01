import React from 'react';
import styled from 'styled-components';
import NewsList from '../components/NewsList';

const StyledNewsContainer = styled.div`
  margin: 1em;
  $.outer {
    display: flex;
  }
  $.inner {
    margin: auto;
  }
`;

const StyledTitle = styled.h1`
  font-size: 5em;
  color: #da0037;
  margin: 0.5em;
`;
const StyledSubTitle = styled.h2`
  font-size: 3em;
  margin: 1em 0em 0em 1em;
`;
const NewsContainer = ({ data }) => {
  return (
    <StyledNewsContainer>
      <StyledTitle>NewsAPI.org</StyledTitle>
      <StyledSubTitle>Top Headlines</StyledSubTitle>
      <NewsList data={data} />
    </StyledNewsContainer>
  );
};
export default NewsContainer;
