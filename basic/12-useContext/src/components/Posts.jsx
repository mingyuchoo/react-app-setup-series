import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';
import PostsContext from '../contexts/PostsContext';

/* Posts */
const Posts = () => {
  const user = useContext(AppContext);
  const posts = useContext(PostsContext);

  let label = 'user';
  if (user.isAdmin) {
    label = 'admin';
  }

  return (
    <div className="App">
      <h3>{label}</h3>
      <h3>{user.nickname}</h3>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
            <h2 className="post">{post.content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
