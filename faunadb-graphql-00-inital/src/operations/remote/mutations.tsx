import { useMutation } from '@apollo/client';

import { CREATE_TODO, DELETE_TODO } from '../../graphql/remote/mutations';
// graphql queries, mutations
import { ALL_TODOS } from '../../graphql/remote/queries';

export function useDeleteTodo() {
  return useMutation(DELETE_TODO, {
    // cache  동기화 작업 실시
    update: (cache, { data }) => {
      // cache에서 쿼리 데이터를 가져옴
      const query: Query | null = cache.readQuery({ query: ALL_TODOS });
      // cache에 있는 graphql 쿼리 중 변경하고자 하는 쿼리만 추출
      const allTodos = query !== null ? query.allTodos.data : [];
      // 삭제한 데이터 정보를 가져옴
      const toDeleteTodo = data.deleteTodo;
      // allTodos 쿼리 정보가 null 이거나 빈 Array 일 수 있어서, 데이터가 있을 경우만 처리하도록 함
      if (allTodos) {
        // 삭제할 대상을 제외한 나머지 사용자 정보만 저장
        const filteredTodos = allTodos.filter((todo) => todo !== null && todo._id !== toDeleteTodo.id);
        // 삭제할 대상이 빠진 정보를 cache에 쓰기
        cache.writeQuery({ query: ALL_TODOS, data: { allTodos: filteredTodos } });
      }
    },
    // cache에 있는 데이터가 변경되면 화면이 자동으로 렌더링 되므로 다시 데이터를 쿼리 하지 않아도 된다
    // onCompleted: () => refetch(),
  });
}

export function useCreateTodo() {
  console.log('useCreateTodo is called');
  // 데이터 추가한 뒤 cache 동기화로 자동으로 화면을 렌더링하는 방법
  return useMutation(CREATE_TODO, {
    // cache 동기화 작업 실시
    update: (cache, { data }) => {
      // cache에서 쿼리 데이터를 가져옴
      const query: Query | null = cache.readQuery({ query: ALL_TODOS });
      // cache에 있는 graphql 쿼리 중 변경하고자 하는 쿼리만 추출
      const allTodos = query !== null ? query.allTodos.data : [];
      // 추가한 데이터 정보를 가져옴
      const addedTodo = data.createTodo;
      // allTodos 쿼리 정보가 null 이거나 빈 Array 일 수 있으니, 데이터가 있을 경우만 처리하도록 함
      if (allTodos) {
        // 추가한 데이터 정보를 기존에 있는 사용자 정보 cache에 추가하여 쓰기
        cache.writeQuery({ query: ALL_TODOS, data: { allTodos: [...allTodos, addedTodo] } });
      }
    },
  });
}
