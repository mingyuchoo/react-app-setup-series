import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import styled from 'styled-components';

import UserItem from './UserItem';
import Button from './Button';
import Loading from './Loading';
import Error from './Error';

const StyledUserList = styled.div`
  margin: auto;
  width: 100%;
`;

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: ID!) {
    deleteUserById(id: $id) {
      id
      name
      email
    }
  }
`;

const UserList = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [deleteUser, { data: data2, error: error2, loading: loading2 }] = useMutation(DELETE_USER_BY_ID);

  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    deleteUser({ variables: { id } });
  };

  if (loading || loading2) {
    return <Loading />;
  }
  if (error || error2) {
    return <Error />;
  }
  if (data || data2) {
    if (data.getAllUsers.length > 0) {
      return (
        <StyledUserList>
          {data.getAllUsers.map((user) => (
            <UserItem key={user.id} user={user} onDoubleClickRow={onDoubleClickRow} />
          ))}
          <Button
            type="submit"
            onClick={() => {
              console.log(`button clicked`);
            }}
          >
            Load More
          </Button>
        </StyledUserList>
      );
    }
  }
};

export default UserList;
