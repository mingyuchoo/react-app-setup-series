import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div className="jumbotron" key={article.url}>
      <h1 className="p-1">
        <a href={article.url} target="_blank">{article.title}</a>
      </h1>
      <h3 className="p-4">{article.description}</h3>
    </div>
  );
};

export default NewsItem;
