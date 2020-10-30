import React from 'react';

// graphql queries, mutations
import { useDeleteUserById } from '../operations/remote/mutations';

// components
import Status from '../components/Status';
import UserItem from '../components/UserItem';

export interface UserItemContainer {
  user: User;
  refetch: () => void;
}
export default function UserItemContainer({ user, refetch }: UserItemContainer): React.ReactElement {
  const [deleteUser, { loading, error }] = useDeleteUserById();

  if (loading) return <Status info={'Loading...'} />;
  if (error) return <Status info={'Error!'} />;

  return <UserItem user={user} refetch={refetch} deleteUser={deleteUser} />;
}
