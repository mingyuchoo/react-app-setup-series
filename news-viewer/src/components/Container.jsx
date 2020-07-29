import React from 'react';

import Item from './Item';

const Container = ({ data }) => {
  return (
    <div className="container is-fluid">
      <h1 className="title is-1">News</h1>
      <h2 className="subtitle is-2">Articles</h2>
      <div>
        {data && data.articles.map((article) => <Item article={article} />)}
      </div>
    </div>
  );
};

export default Container;
