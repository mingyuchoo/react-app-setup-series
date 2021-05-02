import React from 'react';

import { modifyTitle, useTitle } from '../state/title';

const onClick = (title) => {
  modifyTitle(title);
};

function Item() {
  const { loading, error, data } = useTitle();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <p>Item</p>
      <button onClick={() => onClick('Foo')}>{data.title}</button>
      <button onClick={() => onClick('Bar')}>{data.title}</button>
    </>
  );
}

export default Item;
