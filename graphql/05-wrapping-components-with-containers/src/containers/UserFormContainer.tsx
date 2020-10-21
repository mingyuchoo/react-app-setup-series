import React from 'react';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';

// types
import { Query, User } from '../types/profileTypes';

// graphql queries, mutations
import { GET_ALL_USERS } from '../graphql/queries';
import { CREATE_USER_BY_EMAIL } from '../graphql/queries';

// cache
import { nameVar, emailVar } from '../cache';
import localMutations from '../operations/client/mutations';

// components
import Loading from '../components/Loading';
import Error from '../components/Error';
import UserForm from '../components/UserForm';

export default function UserFormContainer(): React.ReactElement {
  // 데이터 추가한 뒤 cache 동기화로 자동으로 화면을 렌더링하는 방법
  const [addNewUser, { loading, error, data }] = useMutation(CREATE_USER_BY_EMAIL, {
    // cache 동기화 작업 실시
    update: (cache, { data }) => {
      // cache에서 쿼리 데이터를 가져옴
      const query: Query | null = cache.readQuery({ query: GET_ALL_USERS });

      // cache에 있는 graphql 쿼리 중 변경하고자 하는 쿼리만 추출
      const getAllUsers = query !== null ? query.getAllUsers : [];

      // 추가한 데이터 정보를 가져옴
      const addedUser = data.createUserByEmail;

      // getAllUsers 쿼리 정보가 null 이거나 빈 Array 일 수 있으니, 데이터가 있을 경우만 처리하도록 함
      if (getAllUsers) {
        // 추가한 데이터 정보를 기존에 있는 사용자 정보 cache에 추가하여 쓰기
        cache.writeQuery({ query: GET_ALL_USERS, data: { getAllUsers: [...getAllUsers, addedUser] } });
      }
    },
  });

  // reactive variable mutation operators
  const { updateName, updateEmail } = localMutations;

  // loading
  if (loading) {
    return <Loading />;
  }

  // error
  if (error) {
    return <Error />;
  }

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
