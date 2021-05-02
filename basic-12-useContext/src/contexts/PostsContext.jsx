import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const PostsContext = createContext();

export const PostsContextProvider = ({ value, children }) => {
  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

PostsContextProvider.propTypes = {
  value: PropTypes.any,
  children: PropTypes.any,
};

export default PostsContext;
