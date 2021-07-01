import React from 'react';
import styled from 'styled-components';

import NewsItem from './NewsItem';

const StyledNewsList = styled.article`
  text-decoration: none;
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
