import React from 'react';
import NewsList from '../components/NewsList';

const NewsContainer = ({ data }) => {
  return (
    <div className="container">
      <h1 className="display-1">Top News</h1>
      <h2 className="display-4">Articls</h2>
      <NewsList data={data} />
    </div>
  );
};

export default NewsContainer;
