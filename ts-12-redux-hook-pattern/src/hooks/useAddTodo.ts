import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo } from '../reducers/todos';

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
