import React from 'react';
import { useMutation } from '@apollo/client';

// types
import { Query, User } from '../types/profileTypes';

// graphql queries, mutations
import { GET_ALL_USERS } from '../graphql/queries';
import { DELETE_USER_BY_ID } from '../graphql/mutations';

// components
import Deleting from './Deleting';
import Error from './Error';

import './UserItem.scss';

export interface UserProps {
  user: User;
  refetch: () => void;
}

function UserItem({ user, refetch }: UserProps): React.ReactElement {
  // // Other way (1) - 데이터 삭제한 뒤 쿼리를 다시 실행해서 변경된 데이터를 화면에 렌더링 하는 방법
  // const [deleteUser, { loading: mutationLoading, error: mutationError, data }] = useMutation(DELETE_USER_BY_ID, {
  //   refetchQueries: [
  //     {
  //       query: GET_ALL_USERS,
  //     },
  //   ],
  // });

  // // Other way (2) - 데이터를 삭제한 뒤 삭제가 완료될 때 부모에서 받아 온 refetch() 함수를 이용해서 데이터를 다시 가져와 화면을 렌더링 하는 방법
  // const [deleteUser, {loading: mutationLoading, error: mutationError}] = useMutation(DELETE_USER_BY_ID,
  //   {
  //     onCompleted: () => refetch(),
  //   }
  // );

  // Other way (3) - 데이터를 삭제한 뒤 cache 동기화로 자동으로 화면을 렌더링하는 방법
  const [deleteUser, { loading: mutationLoading, error: mutationError }] = useMutation(DELETE_USER_BY_ID, {
    // cache  동기화 작업 실시
    update: (cache, { data }) => {
      // cache에서 쿼리 데이터를 가져옴
      const query: Query | null = cache.readQuery({ query: GET_ALL_USERS });

      // cache에 있는 graphql 쿼리 중 변경하고자 하는 쿼리만 추출
      const getAllUsers = query !== null ? query.getAllUsers : [];

      // 삭제한 데이터 정보를 가져옴
      const toDeleteUser = data.deleteUserById;

      // getAllUsers 쿼리 정보가 null 이거나 빈 Array 일 수 있어서, 데이터가 있을 경우만 처리하도록 함
      if (getAllUsers) {
        // 삭제할 대상을 제외한 나머지 사용자 정보만 저장
        const filteredUsers = getAllUsers.filter((user) => user !== null && user.id !== toDeleteUser.id);

        // 삭제할 대상이 빠진 정보를 cache에 쓰기
        cache.writeQuery({ query: GET_ALL_USERS, data: { getAllUsers: filteredUsers } });
      }
    },
    // cache에 있는 데이터가 변경되면 화면이 자동으로 렌더링 되므로 다시 데이터를 쿼리 하지 않아도 된다
    // onCompleted: () => refetch(),
  });

  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    deleteUser({ variables: { id } });
  };

  // loading
  if (mutationLoading) {
    return <Deleting />;
  }

  // error
  if (mutationError) {
    return <Error />;
  }
  return (
    <div className="list">
      <div className="row" key={user.id} onDoubleClick={(event) => onDoubleClickRow(user.id, event)}>
        <p className="column">{user.name}</p>
        <p className="column">{user.email}</p>
      </div>
    </div>
  );
}

export default UserItem;
