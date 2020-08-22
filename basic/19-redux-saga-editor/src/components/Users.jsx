import React, { useState } from 'react';

function Display({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.username);
  const onBlurInput = (event) => {
    setIsEditing(!isEditing);
  };
  const onClickDiv = (event) => {
    setIsEditing(!isEditing);
  };

  const onChangeInput = (event) => {
    setName(event.target.value);
  };

  return isEditing ? (
    <tr onChange={onChangeInput} onBlur={onBlurInput}>
      <td>
        <input type="text" value={user.id} />
      </td>
      <td>
        <input type="text" value={user.name} autoFocus={true} />
      </td>
      <td>
        <input type="text" value={user.username} />
      </td>
      <td>
        <input type="text" value={user.email} />
      </td>
    </tr>
  ) : (
    <tr key={user.id} onClick={onClickDiv}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );
}

function PostUsers({ users, loadingUsers }) {
  return (
    <div>
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중'}
        {!loadingUsers && users && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <Display key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default PostUsers;
