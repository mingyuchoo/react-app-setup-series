import React from 'react';

// graphql queries, mutations
import { useCreateUserByEmail } from '../operations/remote/mutations';
import { useLazyGetAllUsers } from '../operations/remote/queries';

// cache
import { nameVar, emailVar } from '../cache';
import localMutations from '../operations/client/mutations';

// components
import Status from '../components/Status';
import UserForm from '../components/UserForm';

export default function UserFormContainer(): React.ReactElement {
  const [addNewUser, { loading, error, data }] = useCreateUserByEmail();

  // reactive variable mutation operators
  const { updateName, updateEmail } = localMutations;

  // loading
  // UserForm 자체가 변경되어 주석처리했다.
  // if (loading) {
  //   return <Loading />;
  // }

  // error
  if (error) return <Status info={'Error!'} />;

  return (
    <UserForm
      vars={{
        nameVar,
        emailVar,
      }}
      actions={{
        addNewUser,
        updateName,
        updateEmail,
      }}
    />
  );
}
