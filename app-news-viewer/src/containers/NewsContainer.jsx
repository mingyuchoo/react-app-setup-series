import React from 'react';
import styled from 'styled-components';
import NewsTitle from '../components/NewsTitle';
import NewsSubTitle from '../components/NewsSubTitle';
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

const NewsContainer = ({ data }) => {
  return (
    <StyledNewsContainer>
      <NewsTitle />
      <NewsSubTitle />
      <NewsList data={data} />
    </StyledNewsContainer>
  );
};
export default NewsContainer;
