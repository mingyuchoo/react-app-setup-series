import React, { useState, ReactElement } from 'react';

const About: React.FC<RouterProps> = ({
  match,
  location,
  history,
}): ReactElement => {
  return (
    <div>
      <h1>About</h1>
      <p>This web site is an example.</p>
      <pre>{JSON.stringify(match, null, 2)}</pre>
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <pre>{JSON.stringify(history, null, 2)}</pre>
    </div>
  );
};

export default About;
