import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello1: React.FC<HelloProps> = (
  props: HelloProps
): React.ReactElement => (
  <h1>
    Hello from {props.compiler} and {props.framework}
  </h1>
);

export class Hello2 extends React.Component<HelloProps> {
  render(): React.ReactElement {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}
      </h1>
    );
  }
}
