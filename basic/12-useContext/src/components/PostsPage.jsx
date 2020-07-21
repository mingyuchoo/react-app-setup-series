import React from 'react';

import { PostsContextProvider } from '../contexts/PostsContext';

import Posts from './Posts';

/* Posts */
const PostsPage = () => {
  const posts = [
    {
      title: 'useContext 알아보기',
      content: '이번 편에서는 React Context를 ...',
    },
  ];

  return (
    <PostsContextProvider value={posts}>
      <Posts />
    </PostsContextProvider>
  );
};

export default PostsPage;
