import React, { useState } from 'react';

import { PostsContextProvider } from '../contexts/PostsContext';

import './PostsPage.scss';

import Posts from './Posts';

const initialState = [
  {
    title: 'useContext 알아보기',
    content: '이번 편에서는 React Context를 ...',
  },
];

/* Posts */
const PostsPage = () => {
  const [posts, setPosts] = useState(initialState);

  return (
    <PostsContextProvider value={[posts, setPosts]}>
      <Posts />
    </PostsContextProvider>
  );
};

export default PostsPage;
