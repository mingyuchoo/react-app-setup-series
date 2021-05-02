import React from 'react';

import { modifyTitle, useTitle } from '../state/title';
import Pane from './Pane';

function Page() {
  const { loading, error, data } = useTitle();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <h1>{data.title}</h1>
      <Pane />
    </>
  );
}

export default Page;
