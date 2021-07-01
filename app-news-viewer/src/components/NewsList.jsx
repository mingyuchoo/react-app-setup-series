import React from 'react';
import styled from 'styled-components';

import NewsItem from './NewsItem';

const StyledNewsList = styled.div`
  margin: auto;
  width: 100%;
`;

const NewsList = ({ data }) => {
  return (
    <StyledNewsList>
      {data &&
        data.articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
    </StyledNewsList>
  );
};

export default NewsList;
