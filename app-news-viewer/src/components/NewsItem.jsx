import React from 'react';
import styled from 'styled-components';

const StyledNewsItem = styled.div`
  margin: 5em;
`;

const StyledDescription = styled.p`
  font-size: 1em;
  color: #444444;
`;
const StyledImage = styled.img`
  display: block;
  padding: 1em 0em 0em 0em;
  width: 600px;
`;

const StyledLink = styled.a`
  font-size: 2em;
  font-style: italic;
  text-decoration: none;
  &:link {
    color: #171717;
  }
  &:visited {
    color: #171717;
  }
  &:hover {
    color: #da0037;
  }
  &:active {
    color: #171717;
  }
`;

const NewsItem = ({ article }) => {
  return (
    <StyledNewsItem key={article.url}>
      <StyledLink href={article.url} target="_blank" rel="noreferrer">
        {article.title}
      </StyledLink>
      <StyledImage src={article.urlToImage}></StyledImage>
      <StyledDescription>
        {article.description}
        {article.content}
      </StyledDescription>
    </StyledNewsItem>
  );
};

export default NewsItem;
