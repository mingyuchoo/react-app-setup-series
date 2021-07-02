import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import UserItem from './UserItem';
import Loading from './Loading';
import ErrorMsg from './ErrorMsg';

const StyledUserList = styled.div`
  margin: auto;
  width: 100%;
`;
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log('[Mounting]');
  }, []);

  useEffect(() => {
    console.log('[Rendering]');
  });

  useEffect(() => {
    console.log('[Updated]');
    loadUsers();
  }, [page]);

  useEffect(() => {
    return () => {
      console.log('[Unmounting]');
    };
  }, []);

  const loadUsers = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=5`)
      .then((response) => {
        console.log(response.data.results);
        setUsers([...users, ...response.data.results]);
        setErrorMsg('');
      })
      .catch((error) => {
        console.log('error', error);
        setErrorMsg('Error while loading users. Tray again later.');
      })
      .finally(() => {
        console.log('users loading is done.');
        setIsLoading(false);
      });
  }, [page]);

  return (
    <StyledUserList>
      {users &&
        users.map((user) => <UserItem key={user.login.uuid} user={user} />)}
      {isLoading && <Loading>Loading</Loading>}
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      <Button page={page} setPage={setPage} isLoading={isLoading} />
    </StyledUserList>
  );
};

export default UserList;
