import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.h2`
  font-size: 3em;
  margin: 1em 0em 0em 1em;
`;

const NewsSubTitle = () => {
  const subTitle = 'Top Headlines';
  return <StyledSubTitle>{subTitle}</StyledSubTitle>;
};

export default NewsSubTitle;
