import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

// types
import { Query, User } from '../types/profileTypes';

// graphql queries, mutations
import { GET_ALL_USERS } from '../operations/remote/queries';
import { CREATE_USER_BY_EMAIL } from '../operations/remote/queries';

// components
import Loading from './Loading';
import Error from './Error';

import './UserForm.scss';

// https://www.apollographql.com/docs/react/data/mutations/

// // Other way (1)
// const Form: React.FC = ():React.ReactElement => {

// Other way (2)
function UserForm(): React.ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // // Other way (1) - 데이터 추가한 뒤 쿼리를 다시 실행해서 변경된 데이터를 화면에 렌더링 하는 방법
  // const [addNewUser, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_USER_BY_EMAIL, {
  //   refetchQueries: [
  //     {
  //       query: GET_ALL_USERS,
  //       variables: {},
  //     },
  //   ],
  // });

  // Other way (2) - 데이터 추가한 뒤 cache 동기화로 자동으로 화면을 렌더링하는 방법
  const [addNewUser, { loading: mutationLoading, error: mutationError, data }] = useMutation(CREATE_USER_BY_EMAIL, {
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

  // loading;
  if (mutationLoading) {
    return <Loading />;
  }

  // error
  if (mutationError) {
    return <Error />;
  }

  const onSubmitForm = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    addNewUser({ variables: { email, name } });

    // input 지움
    setName('');
    setEmail('');
  };
  const onChangeName = (event) => {
    // console.log(`${event.target.name} : ${event.target.value}`);
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    // console.log(`${event.target.name} : ${event.target.value}`);
    setEmail(event.target.value);
  };

  const onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(`${event.target.name} : ${event.target.value}`);
    }
  };

  const onClickReset = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Input your name"
        value={name}
        onChange={onChangeName}
      />
      <input
        className="input"
        type="text"
        name="email"
        placeholder="Input your email address"
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onKeyPressEmail}
      />
      <button className="button" type="submit">
        Submit
      </button>
      <button className="button" onClick={onClickReset}>
        Reset
      </button>
    </form>
  );
}

export default UserForm;
