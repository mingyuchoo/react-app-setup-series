import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import './UserList.scss';

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const onClickHandler = () => {
    alert('Hello');
  };
  // loading
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  // error
  if (error) {
    return <div>Error</div>;
  }

  // data
  if (data) {
    if (data.getAllUsers.length > 0) {
      return (
        <div className="list">
          {data.getAllUsers.map((user) => (
            <div className="row" key={user.id} onClick={onClickHandler}>
              <p className="column">{user.name}</p>
              <p className="column">{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserList;
