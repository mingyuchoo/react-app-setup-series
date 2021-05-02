import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: ${(props) => props.theme.fg};
`;

StyledH1.defaultProps = {
  theme: {
    fg: 'palevioletred',
    bg: 'white',
  },
};

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello1: React.FC<HelloProps> = (props: HelloProps): React.ReactElement => (
  <StyledH1 data-testid="hello1-h1">
    Hello from {props.compiler} and {props.framework}
  </StyledH1>
);

export class Hello2 extends React.Component<HelloProps> {
  render(): React.ReactElement {
    return (
      <StyledH1 data-testid="hello2-h1">
        Hello from {this.props.compiler} and {this.props.framework}
      </StyledH1>
    );
  }
}
