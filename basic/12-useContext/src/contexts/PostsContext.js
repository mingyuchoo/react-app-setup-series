import React, { createContext } from 'react';

const PostsContext = createContext();

export const PostsContextProvider = (props) => {
  return (
    <PostsContext.Provider value={props.value}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
