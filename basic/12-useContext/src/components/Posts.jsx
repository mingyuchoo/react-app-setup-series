import React, { useContext, useCallback, useRef, useState, useEffect } from 'react';

import AppContext from '../contexts/AppContext';
import PostsContext from '../contexts/PostsContext';

import './Posts.scss';

/* Posts */
const Posts = () => {
  const refInput = useRef(null);
  const [user, setUser] = useContext(AppContext);
  const [posts, setPosts] = useContext(PostsContext);

  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Your current nickname is ${user.nickname} and have an ${user.isAdmin ? 'admin': 'user'} role.`);
  }, [user]);

  const onClickButtonChangeNickname = useCallback(() => {
    if (refInput.current.value) {
      setUser({...user, nickname: refInput.current.value});
      refInput.current.value = '';
    } else {
       refInput.current.placeholder = 'Please insert your new nickname';
    }
  });

  const onClickButtonToggleRole = useCallback(() => {
    setUser({...user, isAdmin: !user.isAdmin})
  })

  return (
    <div>
      <h1>{message}</h1>
      <input
        className="input"
        ref={refInput}
        type="text"
        name="input-nickname"
        placeholder="Input your new nickname here."
      />
      <button
        className="button"
        name="button-change-nickname"
        onClick={onClickButtonChangeNickname}
      >
        Change Nickname
      </button>
      <button className="button" name="button-toggle-role" onClick={onClickButtonToggleRole}>
        Change to {user.isAdmin ? 'User' : 'Admin'}
      </button>

      <div className="post">
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
