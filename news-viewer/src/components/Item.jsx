import React from 'react';

const Item = ({ article }) => {
  return (
    <div class="box" key={article.url}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <a href={article.url}>
              <strong>{article.title}</strong>
            </a>
            <br />
            {article.description}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;
