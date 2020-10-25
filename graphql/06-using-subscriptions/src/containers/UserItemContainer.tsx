import React from 'react';

// types
import { User } from '../types/profileTypes';

// graphql queries, mutations
import { useDeleteUserById } from '../operations/remote/mutations';
// components
import Deleting from '../components/Deleting';
import Error from '../components/Error';
import UserItem from '../components/UserItem';

export interface UserItemContainer {
  user: User;
  refetch: () => void;
}
export default function UserItemContainer({ user, refetch }: UserItemContainer): React.ReactElement {
  const [deleteUser, { loading, error }] = useDeleteUserById();

  // loading
  if (loading) {
    return <Deleting />;
  }

  // error
  if (error) {
    return <Error />;
  }

  return <UserItem user={user} refetch={refetch} deleteUser={deleteUser} />;
}
