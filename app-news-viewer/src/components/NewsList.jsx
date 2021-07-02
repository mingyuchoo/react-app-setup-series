import React from 'react';
import styled from 'styled-components';

import NewsItem from './NewsItem';
import LoadButton from './LoadButton';

const StyledNewsList = styled.div`
  margin: auto;
  width: 100%;
`;

const NewsList = ({ articles, page, setPage }) => {
  return (
    <StyledNewsList>
      {articles &&
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      <LoadButton page={page} setPage={setPage} />
    </StyledNewsList>
  );
};

export default NewsList;
