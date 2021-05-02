import { NetworkStatus } from '@apollo/client';
import { Checkbox, PrimaryButton } from '@fluentui/react';
import faker from 'faker';
import React, { ReactElement } from 'react';

import { useCreateTodo } from '../operations/remote/mutations';
// graphql queries, mutations
import { useAllTodos } from '../operations/remote/queries';

export default function ListContainer(): ReactElement {
  const { networkStatus, loading, error, data, refetch } = useAllTodos();
  const [createTodo] = useCreateTodo();

  console.log('ListContainer is called');

  if (networkStatus === NetworkStatus.refetch) return <div>Refetching...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  const allTodos = data.allTodos.data;

  const _onClicked = () => {
    console.log('called');
    void createTodo({ variables: { data: { title: faker.company.companyName(), completed: false } } });
  };
  return (
    <>
      <PrimaryButton text="Generate" onClick={_onClicked} />
      {allTodos.map((todo) => (
        <Checkbox key={todo._id} label={todo.title} checked={todo.completed} boxSide="end" />
      ))}
    </>
  );
}
