import React from 'react';

import NewsItem from './NewsItem';

const NewsList = ({ data }) => {
  return (
    <article className="row">
      <div className="col">
        {data && data.articles.map((article) => <NewsItem article={article} />)}
      </div>
    </article>
  );
};

export default NewsList;
