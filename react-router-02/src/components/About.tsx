import React, { ReactElement } from 'react';

import { RouterProps } from './Types';

const About: React.FC<RouterProps> = (props: RouterProps): ReactElement => {
  return (
    <div>
      <h1>About</h1>
      <p>This web site is an example.</p>
      <pre>{JSON.stringify(props.match, null, 2)}</pre>
      <pre>{JSON.stringify(props.location, null, 2)}</pre>
      <pre>{JSON.stringify(props.history, null, 2)}</pre>
    </div>
  );
};

export default About;
