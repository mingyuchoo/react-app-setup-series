import React from "react";
import styled from "styled-components";

const StyledLoading = styled.p`
  margin: auto;
  width: 100%;
  color: green;
  font-size: 3rem;
  text-align: center;
`;

const Loading = ({ children }) => {
  return <StyledLoading>{children}</StyledLoading>;
};

export default Loading;
